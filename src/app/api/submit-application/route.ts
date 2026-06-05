import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SHEET_NAME = "Submissions";

const HEADERS = [
  "Submitted At", "Reference ID",
  "First Name", "Last Name", "Date of Birth", "Email", "Phone",
  "Street Address", "City", "State", "ZIP",
  "Primary Care Physician", "Medical Conditions",
  "Current Medications", "Allergies",
  "Insurance Provider", "Policy Number", "Group Number",
  "Documents Folder", "Drive Folder URL",
];

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Write header row if sheet is empty
    const meta = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1:A1`,
    });

    if (!meta.data.values?.length) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [HEADERS] },
      });
    }

    // Append the new record
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          (() => {
            const now = new Date();
            const tz = body.timezone || "UTC";
            const parts = new Intl.DateTimeFormat("en-US", {
              timeZone: tz,
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }).formatToParts(now).reduce<Record<string, string>>((acc, p) => {
              acc[p.type] = p.value;
              return acc;
            }, {});
            // Node.js returns "GMT+5:30" for IST; map known offsets to abbreviations
            const ianaToAbbr: Record<string, string> = {
              "Asia/Kolkata": "IST", "Asia/Calcutta": "IST",
              "America/New_York": "ET", "America/Chicago": "CT",
              "America/Denver": "MT", "America/Los_Angeles": "PT",
            };
            const tzAbbr = ianaToAbbr[tz] ?? new Intl.DateTimeFormat("en-US", {
              timeZone: tz, timeZoneName: "short",
            }).formatToParts(now).find(p => p.type === "timeZoneName")?.value ?? tz;
            return `${parts.month} ${parts.day}, ${parts.year} ${parts.hour}:${parts.minute} ${parts.dayPeriod} ${tzAbbr}`;
          })(),
          body.refId ?? "",
          body.firstName ?? "",
          body.lastName ?? "",
          body.dateOfBirth ?? "",
          body.email ?? "",
          body.phone ?? "",
          body.street ?? "",
          body.city ?? "",
          body.state ?? "",
          body.zip ?? "",
          body.primaryCarePhysician ?? "",
          body.medicalConditions ?? "",
          body.medications ?? "",
          body.allergies ?? "",
          body.insuranceProvider ?? "",
          body.policyNumber ?? "",
          body.groupNumber ?? "",
          body.driveFolderName ?? "",
          body.driveFolderUrl ?? "",
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Google Sheets error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
