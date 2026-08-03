import { NextRequest, NextResponse } from "next/server";
import {
  INTAKE_COOKIE,
  clearAttempts,
  getBackendUrl,
  getClientIp,
  isRateLimited,
  recordFailedAttempt,
} from "@/lib/intakeAuth";

const GENERIC_ERROR = "Invalid email/phone or password.";

interface FacilityLoginResponse {
  data?: {
    token?: string;
    role?: string;
  };
}

export async function POST(req: NextRequest) {
  let body: { identifier?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const identifier = body.identifier?.trim();
  const password = body.password;
  if (!identifier || !password) {
    return NextResponse.json({ error: "Email/phone and password are required." }, { status: 400 });
  }

  const ip = getClientIp(req);
  const rateLimitKey = `${ip}:${identifier.toLowerCase()}`;
  if (isRateLimited(rateLimitKey)) {
    return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  const credentials = identifier.includes("@")
    ? { email: identifier, password }
    : { phone: identifier, password };

  let backendRes: Response;
  try {
    backendRes = await fetch(`${getBackendUrl()}/users/facilityLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": req.headers.get("user-agent") ?? "",
        "X-Forwarded-For": ip,
      },
      body: JSON.stringify(credentials),
    });
  } catch (err) {
    console.error("Intake login: backend request failed", err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  if (!backendRes.ok) {
    recordFailedAttempt(rateLimitKey);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  let payload: FacilityLoginResponse;
  try {
    payload = await backendRes.json();
  } catch (err) {
    console.error("Intake login: unexpected backend response shape", err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  const token = payload.data?.token;
  const role = payload.data?.role;

  // Bad credentials and "valid credentials but not admin" both collapse to
  // the same generic error — distinguishing them would tell an attacker
  // guessing passwords the moment they've found a working one.
  if (!token || (role !== "admin" && role !== "ops_admin")) {
    recordFailedAttempt(rateLimitKey);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  clearAttempts(rateLimitKey);

  const res = NextResponse.json({ success: true });
  res.cookies.set(INTAKE_COOKIE, JSON.stringify({ token, identifier }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
