import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { DateTime } from "luxon";

const SHEET_ID = process.env.VITAL_BUDDY_SHEET_ID!;
const SHEET_NAME = "Contact Us";
const HEADERS = ["Submitted At", "First Name", "Last Name", "Email", "Phone", "Role", "Subject", "Message"];

function getPrivateKey(): string {
  if (process.env.GOOGLE_PRIVATE_KEY_BASE64) {
    return Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, "base64").toString("utf-8");
  }
  return process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "";
}

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: getPrivateKey(),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

const offsetToAbbr: Record<string, string> = {
  "Asia/Kolkata": "IST", "Asia/Calcutta": "IST",
  "Asia/Colombo": "SLST", "Asia/Kathmandu": "NPT",
  "Asia/Dhaka": "BST", "Asia/Karachi": "PKT",
  "Asia/Dubai": "GST", "Asia/Riyadh": "AST",
};

function formatTimestamp(tz: string): string {
  const dt = DateTime.now().setZone(tz);
  const rawAbbr = dt.offsetNameShort ?? tz;
  const tzAbbr = (rawAbbr.startsWith("GMT") || rawAbbr.startsWith("UTC"))
    ? (offsetToAbbr[tz] ?? rawAbbr)
    : rawAbbr;
  return dt.toFormat("MMM d, yyyy h:mm a") + " " + tzAbbr;
}

async function ensureSheet(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string) {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = spreadsheet.data.sheets?.some(s => s.properties?.title === SHEET_NAME);

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: [{ addSheet: { properties: { title: SHEET_NAME } } }] },
    });
  }

  const meta = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A1:A1`,
  });

  if (!meta.data.values?.length) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [HEADERS] },
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    await ensureSheet(sheets, SHEET_ID);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          formatTimestamp(body.timezone || "UTC"),
          body.firstName ?? "",
          body.lastName ?? "",
          body.email ?? "",
          body.fullPhone ?? "",
          body.role ?? "",
          body.subject ?? "",
          body.message ?? "",
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Sheets error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
