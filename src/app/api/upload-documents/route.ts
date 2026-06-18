import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

const PARENT_FOLDER_ID = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID!;

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

export async function POST(req: NextRequest) {
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
    const folder = await drive.files.create({
      requestBody: {
        name: folderName,
        mimeType: "application/vnd.google-apps.folder",
        parents: [PARENT_FOLDER_ID],
      },
      fields: "id",
    });
    const folderId = folder.data.id!;

    // Upload each file into the patient folder
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const stream = Readable.from(buffer);

      await drive.files.create({
        requestBody: {
          name: file.name,
          parents: [folderId],
        },
        media: {
          mimeType: file.type || "application/octet-stream",
          body: stream,
        },
        fields: "id",
      });
    }

    const folderUrl = `https://drive.google.com/drive/folders/${folderId}`;
    return NextResponse.json({ success: true, folderName, folderUrl, folderId });
  } catch (err) {
    console.error("Drive upload error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
