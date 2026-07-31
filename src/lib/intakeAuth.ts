import { NextRequest } from "next/server";

const BACKEND_URL = process.env.VITAL_BACKEND_URL ?? "https://devbackend.vitalfrnd.com";

export const INTAKE_COOKIE = "intake_session";

export function getBackendUrl(): string {
  return BACKEND_URL;
}

export function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

interface IntakeSessionCookie {
  token: string;
  identifier: string;
}

function parseCookie(req: NextRequest): IntakeSessionCookie | null {
  const raw = req.cookies.get(INTAKE_COOKIE)?.value;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed.token === "string" && typeof parsed.identifier === "string") {
      return parsed as IntakeSessionCookie;
    }
  } catch {
    // malformed cookie — treat as unauthenticated
  }
  return null;
}

// Re-validates the session's JWT against the backend on every call — GET
// /whoAmI does a live DB lookup (tokenVersion + account/role active checks),
// so a revoked or deactivated admin account is rejected immediately rather
// than trusting whatever the cookie says until it expires.
export async function getIntakeSession(
  req: NextRequest,
): Promise<{ identifier: string } | null> {
  const cookie = parseCookie(req);
  if (!cookie) return null;
  try {
    const res = await fetch(`${BACKEND_URL}/whoAmI`, {
      headers: { Authorization: `Bearer ${cookie.token}` },
    });
    if (!res.ok) return null;
  } catch (err) {
    console.error("intakeAuth: session verification failed", err);
    return null;
  }
  return { identifier: cookie.identifier };
}

export async function verifyIntakeSession(req: NextRequest): Promise<boolean> {
  return (await getIntakeSession(req)) !== null;
}

// ── Login rate limiting ──────────────────────────────────────────────────
// Per-process, in-memory only — resets on cold start and doesn't share state
// across serverless instances. Good enough to blunt naive brute-forcing of a
// low-traffic internal login; not a substitute for the backend's own limits.
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

function recentAttempts(key: string): number[] {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter(t => now - t < ATTEMPT_WINDOW_MS);
  attempts.set(key, recent);
  return recent;
}

export function isRateLimited(key: string): boolean {
  return recentAttempts(key).length >= MAX_ATTEMPTS;
}

export function recordFailedAttempt(key: string): void {
  const recent = recentAttempts(key);
  recent.push(Date.now());
  attempts.set(key, recent);
}

export function clearAttempts(key: string): void {
  attempts.delete(key);
}
