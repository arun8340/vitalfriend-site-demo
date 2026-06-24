import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, PDFPage, PDFFont, rgb, StandardFonts } from "pdf-lib";
import { google } from "googleapis";
import { Readable } from "stream";

export const maxDuration = 60;

// ── Auth ──────────────────────────────────────────────────────────────────────
function getAuth() {
  const oauth2 = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  );
  oauth2.setCredentials({ refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN });
  return oauth2;
}

// ── Page constants ────────────────────────────────────────────────────────────
const PW = 612;
const PH = 792;
const ML = 52;          // left/right margin
const CW = PW - ML * 2; // 508 content width

const C_DARK  = rgb(0.05, 0.05, 0.05);
const C_GRAY  = rgb(0.55, 0.55, 0.55);
const C_LINE  = rgb(0.70, 0.70, 0.70);
const C_CHECK = rgb(0.17, 0.50, 1.00);
const C_WHITE = rgb(1, 1, 1);

// ── Helpers ───────────────────────────────────────────────────────────────────
function sanitize(s: string | undefined) {
  return (s || "").replace(/[^\x20-\x7E]/g, " ").trim();
}

function wrapText(text: string, font: PDFFont, size: number, maxW: number): string[] {
  const safe = sanitize(text) || "—";
  const words = safe.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const attempt = cur ? `${cur} ${w}` : w;
    if (font.widthOfTextAtSize(attempt, size) > maxW) {
      if (cur) lines.push(cur);
      // hard-wrap single word if too long
      let chunk = w;
      while (font.widthOfTextAtSize(chunk, size) > maxW && chunk.length > 1) {
        chunk = chunk.slice(0, -1);
      }
      cur = chunk;
    } else {
      cur = attempt;
    }
  }
  if (cur) lines.push(cur);
  return lines.length ? lines : ["—"];
}

// ── State ─────────────────────────────────────────────────────────────────────
interface S {
  doc: PDFDocument;
  page: PDFPage;
  bold: PDFFont;
  reg:  PDFFont;
  ital: PDFFont;
  y: number;
}

function newPage(s: S): S {
  const page = s.doc.addPage([PW, PH]);
  return { ...s, page, y: PH - ML };
}

function ensureY(s: S, h: number): S {
  return s.y - h < ML + 24 ? newPage(s) : s;
}

function hRule(s: S, thick = 0.7, color = C_LINE) {
  s.page.drawLine({
    start: { x: ML, y: s.y },
    end:   { x: PW - ML, y: s.y },
    thickness: thick, color,
  });
}

// ── Section header: bold text + separator line ────────────────────────────────
function section(s: S, title: string): S {
  s = ensureY(s, 52);
  s.y -= 20;
  s.page.drawText(title, { x: ML, y: s.y, size: 14, font: s.bold, color: C_DARK });
  s.y -= 10;
  hRule(s, 0.8, C_DARK);
  s.y -= 16;
  return s;
}

// ── Inline field: "Label *  value" + underline ────────────────────────────────
// Draws on the CURRENT y, returns the state unchanged (y is NOT decremented here;
// the caller decides row height and calls s.y -= after grouping fields per line).
function inlineField(
  s: S,
  label: string,
  value: string,
  x: number,
  areaW: number,   // total width of this field's column
  required = false,
) {
  const mark = required ? " *" : "";
  const fullLabel = label + mark + "  ";
  const lw = s.bold.widthOfTextAtSize(fullLabel, 10);

  // Bold label
  s.page.drawText(fullLabel, { x, y: s.y, size: 10, font: s.bold, color: C_DARK });

  // Value text (truncated to fit)
  const val = sanitize(value);
  if (val) {
    const maxVW = areaW - lw - 4;
    let drawn = val;
    while (drawn.length > 0 && s.reg.widthOfTextAtSize(drawn, 10) > maxVW) {
      drawn = drawn.slice(0, -1);
    }
    if (drawn !== val) drawn += "…";
    s.page.drawText(drawn, { x: x + lw, y: s.y, size: 10, font: s.reg, color: C_DARK });
  }

  // Underline under the value area
  s.page.drawLine({
    start: { x: x + lw, y: s.y - 3 },
    end:   { x: x + areaW, y: s.y - 3 },
    thickness: 0.5, color: C_LINE,
  });
}

// ── Row builders ──────────────────────────────────────────────────────────────
// Full-width single field
function row1(s: S, label: string, value: string, required = false, gap = 22): S {
  s = ensureY(s, gap);
  inlineField(s, label, value, ML, CW, required);
  s.y -= gap;
  return s;
}

// Two equal-half fields side by side
function row2(
  s: S,
  a: { label: string; value: string; req?: boolean },
  b: { label: string; value: string; req?: boolean },
  gap = 22,
): S {
  s = ensureY(s, gap);
  const half = CW / 2 - 6;
  inlineField(s, a.label, a.value, ML,          half, a.req);
  inlineField(s, b.label, b.value, ML + CW / 2 + 6, half, b.req);
  s.y -= gap;
  return s;
}

// City / State / ZIP on one line (custom widths)
function rowCityStateZip(s: S, city: string, state: string, zip: string): S {
  s = ensureY(s, 22);
  // City ~42%, State ~14%, ZIP ~44%
  const cityW  = Math.round(CW * 0.42);
  const stateX = ML + cityW + 8;
  const stateW = Math.round(CW * 0.14);
  const zipX   = stateX + stateW + 8;
  const zipW   = ML + CW - zipX;
  inlineField(s, "City",     city,  ML,     cityW,  true);
  inlineField(s, "State",    state, stateX, stateW, true);
  inlineField(s, "ZIP Code", zip,   zipX,   zipW,   true);
  s.y -= 22;
  return s;
}

// ── Wrapped multi-line field ───────────────────────────────────────────────────
// For medical/allergy fields that can be multi-line
function multiRow(s: S, label: string, value: string, required = false): S {
  const lines = wrapText(value || "—", s.reg, 10, CW - 100);
  const h     = 16 + lines.length * 14 + 4;
  s = ensureY(s, h);

  // Label
  s.page.drawText(label + (required ? " *" : ""), {
    x: ML, y: s.y, size: 10, font: s.bold, color: C_DARK,
  });
  s.y -= 14;

  // Value lines
  for (const ln of lines) {
    s.page.drawText(ln, { x: ML + 8, y: s.y, size: 10, font: s.reg, color: C_DARK });
    s.y -= 13;
  }

  // Underline after last line
  s.page.drawLine({
    start: { x: ML, y: s.y + 2 },
    end:   { x: ML + CW, y: s.y + 2 },
    thickness: 0.5, color: C_LINE,
  });
  s.y -= 8;
  return s;
}

// ── Checkbox row ──────────────────────────────────────────────────────────────
function checkRow(s: S, boldLabel: string, bodyText: string, checked: boolean): S {
  const allText = boldLabel + " " + bodyText;
  const lines = wrapText(allText, s.reg, 10, CW - 20);
  s = ensureY(s, lines.length * 14 + 10);

  // Checkbox square
  const boxY = s.y - 8;
  s.page.drawRectangle({
    x: ML, y: boxY, width: 10, height: 10,
    color: checked ? C_CHECK : C_WHITE,
    borderColor: checked ? C_CHECK : C_LINE,
    borderWidth: 0.8,
  });
  if (checked) {
    // Checkmark
    s.page.drawLine({ start: { x: ML + 2, y: boxY + 3 }, end: { x: ML + 5, y: boxY + 1 }, thickness: 1.5, color: C_WHITE });
    s.page.drawLine({ start: { x: ML + 5, y: boxY + 1 }, end: { x: ML + 9, y: boxY + 8 }, thickness: 1.5, color: C_WHITE });
  }

  // First line: bold label portion + rest
  const boldLabelW = s.bold.widthOfTextAtSize(boldLabel + " ", 10);
  s.page.drawText(boldLabel, { x: ML + 16, y: s.y, size: 10, font: s.bold, color: C_DARK });

  // Remaining text of first line
  const firstLineRemainder = lines[0].slice(boldLabel.length + 1);
  s.page.drawText(firstLineRemainder, { x: ML + 16 + boldLabelW, y: s.y, size: 10, font: s.reg, color: C_DARK });
  s.y -= 14;

  for (let i = 1; i < lines.length; i++) {
    s.page.drawText(lines[i], { x: ML + 16, y: s.y, size: 10, font: s.reg, color: C_DARK });
    s.y -= 14;
  }
  s.y -= 6;
  return s;
}

// ── Drive helpers ─────────────────────────────────────────────────────────────
async function downloadFile(drive: ReturnType<typeof google.drive>, id: string): Promise<Buffer> {
  const res = await drive.files.get({ fileId: id, alt: "media" }, { responseType: "arraybuffer" });
  return Buffer.from(res.data as ArrayBuffer);
}

async function listFolder(drive: ReturnType<typeof google.drive>, folderId: string) {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: "files(id, name, mimeType)",
    pageSize: 50,
  });
  return (res.data.files ?? []) as { id: string; name: string; mimeType: string }[];
}

// ── Build PDF ─────────────────────────────────────────────────────────────────
async function buildPdf(
  body: Record<string, unknown>,
  driveFiles: { id: string; name: string; mimeType: string }[],
  drive: ReturnType<typeof google.drive>,
): Promise<Uint8Array> {
  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const ital = await doc.embedFont(StandardFonts.HelveticaOblique);

  const form     = (body.form     ?? {}) as Record<string, string>;
  const consents = (body.consents ?? {}) as Record<string, boolean>;
  const sigUrl   = (body.signatureDataUrl ?? "") as string;
  const refId    = (body.refId ?? "") as string;
  const allContacts = (body.emergencyContacts as Array<{ name: string; phone: string; relationship: string }> | undefined)
    ?? [{ name: form.emergencyContactName, phone: form.emergencyContactPhone, relationship: form.emergencyContactRelationship }];

  let s: S = { doc, page: doc.addPage([PW, PH]), bold, reg, ital, y: PH - ML };

  // ── Title ──────────────────────────────────────────────────────────────────
  s.page.drawText("REMOTE PATIENT MONITORING (RPM)", {
    x: ML, y: s.y, size: 26, font: bold, color: C_DARK,
  });
  s.y -= 34;
  s.page.drawText("Patient Intake Form", {
    x: ML, y: s.y, size: 14, font: bold, color: C_DARK,
  });
  // Ref ID top-right
  const refStr = `Ref: ${refId}`;
  const refW = reg.widthOfTextAtSize(refStr, 9);
  s.page.drawText(refStr, { x: PW - ML - refW, y: s.y, size: 9, font: reg, color: C_GRAY });

  s.y -= 14;
  hRule(s, 1.2, C_DARK);
  s.y -= 20;

  // ── PERSONAL INFORMATION ───────────────────────────────────────────────────
  s = section(s, "PERSONAL INFORMATION");
  s = row2(s, { label: "First Name", value: form.firstName, req: true }, { label: "Last Name", value: form.lastName, req: true });
  s.y -= 6;
  s = row2(s, { label: "Date of Birth", value: form.dateOfBirth, req: true }, { label: "Phone Number", value: form.phone, req: true });
  s.y -= 6;
  s = row2(s, { label: "Email Address", value: form.email, req: true }, { label: "Gender", value: form.gender });
  if (form.referredBy) {
    s.y -= 6;
    s = row1(s, "Referred By", form.referredBy);
  }

  s.y -= 10;
  hRule(s);
  s.y -= 6;

  // ── ADDRESS INFORMATION ────────────────────────────────────────────────────
  s = section(s, "ADDRESS INFORMATION");
  s = row1(s, "Street Address", form.street, true, 26);
  s.y -= 6;
  s = rowCityStateZip(s, form.city, form.state, form.zip);

  s.y -= 10;
  hRule(s);
  s.y -= 6;

  // ── INSURANCE INFORMATION ──────────────────────────────────────────────────
  s = section(s, "INSURANCE INFORMATION");
  s = row2(s, { label: "Insurance Company", value: form.insuranceProvider, req: true }, { label: "Policy Number", value: form.policyNumber, req: true });
  s.y -= 6;
  s = row2(s, { label: "Group Number", value: form.groupNumber }, { label: "Member ID", value: form.memberId, req: true });
  s.y -= 6;
  s = row1(s, "Primary Policy Holder (if different)", form.primaryPolicyHolder || "Self");
  s.y -= 6;
  s = row1(s, "Relationship to Policy Holder", form.relationshipToPolicyHolder);

  s.y -= 10;
  hRule(s);
  s.y -= 6;

  // ── REQUIRED DOCUMENTS ─────────────────────────────────────────────────────
  s = section(s, "REQUIRED DOCUMENTS - ATTACH COPIES");

  const DOC_DESCS: Record<string, string> = {
    "Insurance Card (Front)":     "Clear copy of the front of your insurance card",
    "Insurance Card (Back)":      "Clear copy of the back of your insurance card",
    "Government-Issued ID":       "Driver's License, State ID, or Passport",
    "Insurance Coverage Document":"Benefits summary or coverage details (Optional)",
  };

  const imgFiles = driveFiles.filter(f =>
    !f.name.startsWith("Signature_") &&
    (f.mimeType.includes("jpeg") || f.mimeType.includes("jpg") || f.mimeType.includes("png"))
  );

  for (const file of imgFiles) {
    const docLabel = file.name.replace(/\.[^.]+$/, "");
    const desc = DOC_DESCS[docLabel] ?? "";
    const isReq = !docLabel.toLowerCase().includes("optional") && !docLabel.toLowerCase().includes("coverage") && !docLabel.toLowerCase().includes("other");

    s = ensureY(s, 80);

    // Doc type label
    const markStr = isReq ? " *" : "";
    const labelStr = docLabel + markStr;
    s.page.drawText(labelStr, { x: ML, y: s.y, size: 11, font: bold, color: C_DARK });
    if (desc) {
      const lw = bold.widthOfTextAtSize(labelStr + "  ", 11);
      s.page.drawText(desc, { x: ML + lw, y: s.y, size: 10, font: reg, color: C_GRAY });
    }
    s.y -= 14;

    // Embed image
    try {
      const buf = await downloadFile(drive, file.id);
      let img;
      if (file.mimeType.includes("png")) img = await doc.embedPng(buf);
      else img = await doc.embedJpg(buf);

      const maxW = CW;
      const maxH = Math.min(200, s.y - ML - 20);

      if (maxH < 60) {
        s = newPage(s);
        s.y -= 14;
      }

      const availH = Math.min(200, s.y - ML - 20);
      const scale  = Math.min(maxW / img.width, availH / img.height, 1);
      const w      = img.width * scale;
      const h      = img.height * scale;

      s.page.drawImage(img, { x: ML + (CW - w) / 2, y: s.y - h, width: w, height: h });
      s.y -= h + 16;
    } catch {
      s.page.drawText("(Image unavailable)", { x: ML + 8, y: s.y, size: 9, font: reg, color: C_GRAY });
      s.y -= 20;
    }

    s.y -= 10;
  }

  s.y -= 4;
  hRule(s);
  s.y -= 6;

  // ── EMERGENCY CONTACT ──────────────────────────────────────────────────────
  s = section(s, "EMERGENCY CONTACT");
  for (let i = 0; i < allContacts.length; i++) {
    const c = allContacts[i];
    if (allContacts.length > 1) {
      s = ensureY(s, 18);
      s.page.drawText(i === 0 ? "Primary Emergency Contact" : `Emergency Contact ${i + 1}`, {
        x: ML + 20, y: s.y, size: 10, font: bold, color: C_GRAY,
      });
      s.y -= 16;
    }
    s = row2(
      s,
      { label: "Name", value: c.name, req: i === 0 },
      { label: "Phone", value: c.phone, req: i === 0 },
    );
    s.y -= 4;
    s = row1(s, "Relationship", c.relationship, i === 0);
    if (i < allContacts.length - 1) s.y -= 10;
  }

  s.y -= 10;
  hRule(s);
  s.y -= 6;

  // ── CONSENT AND AUTHORIZATION ──────────────────────────────────────────────
  s = section(s, "CONSENT AND AUTHORIZATION");

  s = checkRow(
    s,
    "RPM Consent:",
    "I consent to participate in the Remote Patient Monitoring program and understand that my health data will be monitored and transmitted to my healthcare provider. *",
    consents.rpmConsent,
  );
  s.y -= 4;
  s = checkRow(
    s,
    "HIPAA Authorization:",
    "I authorize the sharing of my protected health information (PHI) for remote patient monitoring purposes. *",
    consents.hipaaConsent,
  );
  s.y -= 4;
  s = checkRow(
    s,
    "Billing Authorization:",
    "I authorize my healthcare provider to bill my insurance for RPM services and understand my financial responsibilities. *",
    consents.billingConsent,
  );
  s.y -= 4;
  s = checkRow(
    s,
    "Information Accuracy:",
    "I certify that all information provided is accurate and complete to the best of my knowledge. *",
    consents.infoAccuracy,
  );

  s.y -= 10;
  hRule(s);
  s.y -= 6;

  // ── SIGNATURES ─────────────────────────────────────────────────────────────
  s = section(s, "SIGNATURES");

  // Signature image + Date on same row
  s = ensureY(s, 80);

  const sigLabelStr = "Patient Signature *  ";
  const slw = bold.widthOfTextAtSize(sigLabelStr, 10);
  s.page.drawText(sigLabelStr, { x: ML, y: s.y, size: 10, font: bold, color: C_DARK });

  const sigAreaW = CW / 2 - 20;

  if (sigUrl) {
    try {
      const b64   = sigUrl.split(",")[1];
      const buf   = Buffer.from(b64, "base64");
      const img   = await doc.embedPng(buf);
      const sigH  = 50;
      const scale = Math.min(sigAreaW / img.width, sigH / img.height, 1);
      const w     = img.width * scale;
      const h     = img.height * scale;
      s.page.drawImage(img, { x: ML + slw, y: s.y - h + 8, width: w, height: h });
    } catch { /* no sig */ }
  }

  // Underline for signature area
  s.page.drawLine({
    start: { x: ML + slw, y: s.y - 54 },
    end:   { x: ML + slw + sigAreaW, y: s.y - 54 },
    thickness: 0.5, color: C_LINE,
  });

  // Date field in right column
  inlineField(s, "Date", form.signatureDate, ML + CW / 2 + 8, CW / 2 - 8, true);

  s.y -= 66;

  // Print Name
  s = row1(s, "Print Name:", form.printName, false, 24);

  // ── Footer ──────────────────────────────────────────────────────────────────
  s.y -= 14;
  hRule(s, 0.8, C_DARK);
  s.y -= 14;
  s.page.drawText(
    "Please complete all required fields marked with (*) and attach all required documents.*",
    { x: ML, y: s.y, size: 9, font: ital, color: C_DARK },
  );
  s.y -= 13;
  s.page.drawText(
    "Return completed form to your healthcare provider or RPM coordinator.",
    { x: ML, y: s.y, size: 9, font: ital, color: C_DARK },
  );

  return doc.save();
}

// ── Route ─────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body     = await req.json() as Record<string, unknown>;
    const folderId = body.folderId as string;

    if (!folderId) {
      return NextResponse.json({ success: false, error: "No folder ID" }, { status: 400 });
    }

    const auth  = getAuth();
    const drive = google.drive({ version: "v3", auth });

    const driveFiles = await listFolder(drive, folderId);
    const pdfBytes   = await buildPdf(body, driveFiles, drive);

    const form    = (body.form ?? {}) as Record<string, string>;
    const refId   = (body.refId ?? "") as string;
    const pdfName = `RPM_Intake_Form_${form.firstName}_${form.lastName}_${refId}.pdf`;

    await drive.files.create({
      requestBody: { name: pdfName, parents: [folderId], mimeType: "application/pdf" },
      media: { mimeType: "application/pdf", body: Readable.from(Buffer.from(pdfBytes)) },
      fields: "id",
    });

    const pdfBase64 = Buffer.from(pdfBytes).toString("base64");
    return NextResponse.json({ success: true, pdfName, pdfBase64 });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
