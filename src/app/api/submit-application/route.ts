import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { DateTime } from "luxon";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SHEET_NAME = "Submissions";

const HEADERS = [
  "Submitted At", "Reference ID",
  "First Name", "Last Name", "Date of Birth", "Email", "Phone", "Gender", "Referred By",
  "Street Address", "City", "State", "ZIP",
  "Primary Care Physician", "Medical Conditions",
  "Current Medications", "Allergies",
  "Insurance Company", "Policy Number", "Group Number", "Member ID",
  "Primary Policy Holder", "Relationship to Policy Holder",
  "Emergency Contact Name", "Emergency Contact Phone", "Emergency Contact Relationship",
  "Print Name", "Signature Date",
  "RPM Consent", "HIPAA Authorization", "Billing Authorization", "Info Accuracy",
  "Documents Folder", "Drive Folder URL",
  "Additional Emergency Contacts",
];

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Write or update header row when columns change
    const meta = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!1:1`,
    });

    const existingHeaders = (meta.data.values?.[0] ?? []) as string[];
    if (existingHeaders.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [HEADERS] },
      });
    } else if (existingHeaders.length < HEADERS.length) {
      // New columns were added at the end — patch the header row in place
      await sheets.spreadsheets.values.update({
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
            const tz = body.timezone || "UTC";
            const dt = DateTime.now().setZone(tz);
            const rawAbbr = dt.offsetNameShort ?? tz;
            const offsetToAbbr: Record<string, string> = {
              "Asia/Kolkata": "IST", "Asia/Calcutta": "IST",
              "Asia/Colombo": "SLST", "Asia/Kathmandu": "NPT",
              "Asia/Dhaka": "BST", "Asia/Karachi": "PKT",
              "Asia/Dubai": "GST", "Asia/Riyadh": "AST",
            };
            const tzAbbr = (rawAbbr.startsWith("GMT") || rawAbbr.startsWith("UTC"))
              ? (offsetToAbbr[tz] ?? rawAbbr)
              : rawAbbr;
            return dt.toFormat("MMM d, yyyy h:mm a") + " " + tzAbbr;
          })(),
          body.refId ?? "",
          body.firstName ?? "",
          body.lastName ?? "",
          body.dateOfBirth ?? "",
          body.email ?? "",
          body.phone ?? "",
          body.gender ?? "",
          body.referredBy ?? "",
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
          body.memberId ?? "",
          body.primaryPolicyHolder ?? "",
          body.relationshipToPolicyHolder ?? "",
          body.emergencyContactName ?? "",
          body.emergencyContactPhone ?? "",
          body.emergencyContactRelationship ?? "",
          body.printName ?? "",
          body.signatureDate ?? "",
          body.consents?.rpmConsent ? "Yes" : "No",
          body.consents?.hipaaConsent ? "Yes" : "No",
          body.consents?.billingConsent ? "Yes" : "No",
          body.consents?.infoAccuracy ? "Yes" : "No",
          body.driveFolderName ?? "",
          body.driveFolderUrl ?? "",
          Array.isArray(body.additionalEmergencyContacts) && body.additionalEmergencyContacts.length > 0
            ? (body.additionalEmergencyContacts as Record<string, string>[])
                .map((c, i) => `Contact ${i + 2}: ${c.name || "—"} | ${c.phone || "—"} | ${c.relationship || "—"}`)
                .join("\n")
            : "",
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Google Sheets error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
