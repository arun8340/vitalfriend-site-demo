import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import https from "https";
import { verifyIntakeSession } from "@/lib/intakeAuth";

export const maxDuration = 60;

const PARENT_FOLDER_ID = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID!;
const TRANSIENT_CODES = new Set(["EPIPE", "ECONNRESET", "ETIMEDOUT", "ECONNABORTED"]);

// A fresh, non-keep-alive agent per request: reusing a pooled keep-alive
// socket that Google has since closed is what was surfacing as "write EPIPE".
function freshAgent() {
  return new https.Agent({ keepAlive: false });
}

function getOAuthClient() {
  const oauth2 = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  );
  oauth2.setCredentials({
    refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
  });
  return oauth2;
}

function isTransientError(err: unknown): boolean {
  const code = (err as { code?: string; cause?: { code?: string } })?.code
    ?? (err as { cause?: { code?: string } })?.cause?.code;
  return typeof code === "string" && TRANSIENT_CODES.has(code);
}

async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i === attempts - 1 || !isTransientError(err)) throw err;
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
  throw lastErr;
}

export async function POST(req: NextRequest) {
  if (!(await verifyIntakeSession(req))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const patientName = formData.get("patientName") as string;
    const refId = formData.get("refId") as string;
    const files = formData.getAll("files") as File[];

    if (!files.length) {
      return NextResponse.json({ success: true, folderName: null, folderUrl: null });
    }

    const auth = getOAuthClient();
    const drive = google.drive({ version: "v3", auth });

    // Create patient folder inside the parent folder
    const folderName = `${patientName} – ${refId}`;
    const folder = await withRetry(() =>
      drive.files.create(
        {
          requestBody: {
            name: folderName,
            mimeType: "application/vnd.google-apps.folder",
            parents: [PARENT_FOLDER_ID],
          },
          fields: "id",
        },
        { agent: freshAgent() },
      )
    );
    const folderId = folder.data.id!;

    // Upload each file into the patient folder — sequentially, with retry on
    // transient network errors, each on its own fresh (non-keep-alive)
    // connection to avoid writing to a socket Google has already closed.
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());

      await withRetry(() =>
        drive.files.create(
          {
            requestBody: {
              name: file.name,
              parents: [folderId],
            },
            media: {
              mimeType: file.type || "application/octet-stream",
              body: Readable.from(buffer),
            },
            fields: "id",
          },
          { agent: freshAgent() },
        )
      );
    }

    const folderUrl = `https://drive.google.com/drive/folders/${folderId}`;
    return NextResponse.json({ success: true, folderName, folderUrl, folderId });
  } catch (err) {
    console.error("Drive upload error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
