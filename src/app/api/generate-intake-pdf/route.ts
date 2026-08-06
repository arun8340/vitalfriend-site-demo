import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, PDFPage, PDFFont, rgb, StandardFonts } from "pdf-lib";
import { google } from "googleapis";
import { Readable } from "stream";
import { verifyIntakeSession } from "@/lib/intakeAuth";

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
const INDENT = 26;      // indent for numbered list text

const C_DARK  = rgb(0.05, 0.05, 0.05);
const C_GRAY  = rgb(0.55, 0.55, 0.55);
const C_LINE  = rgb(0.70, 0.70, 0.70);
const C_CHECK = rgb(0.17, 0.50, 1.00);
const C_WHITE = rgb(1, 1, 1);

// ── 26 Authorization Terms ────────────────────────────────────────────────────
const TERMS: { text: string; bold: boolean }[] = [
  { text: "I am permitted to use the remote monitoring device(s) (a.k.a. BUDDI).", bold: false },
  { text: "I will use the RPM device(s) as instructed; I will not use the RPM device(s) for any reason other than for my health to be monitored.", bold: false },
  { text: "I will keep the RPM device(s) always sanitized and clean before wearing it.", bold: false },
  { text: "I understand if any rash or skin itchiness has occurred because of sweat and not keeping hygiene standards then I take full 100% responsibility.", bold: false },
  { text: "I will not alter, throw or tamper with the RPM device(s). If the device(s) is not maintained as per the standards, then I understand that VitalFriend Inc. can take back the RPM device(s) and terminate this program.", bold: false },
  { text: "I understand that if I fall or slip and the device(s) breaks, it can hurt my hand as any other wearable.", bold: false },
  { text: "My data will be electronically transmitted from the RPM device(s) to VitalFriend's platform in a safe and secure manner.", bold: false },
  { text: "I will assist the staff or, if doing myself, will ensure that my measurements are taken at least 2 times a day. If I fail to maintain minimum usage requirements, the program administrators will provide an initial reminder. If non-compliance continues, additional follow-up reminders will be issued. Failure to maintain minimum usage requirements for more than 5 consecutive days despite these reminders may result in device(s) retrieval.", bold: false },
  { text: "I permit that my data can be used for additional research and development purposes by VitalFriend Inc. for providing better health statistics, benchmarks, predictive AI etc. for myself. If my data is used for other research, then it has to be in an unidentified manner.", bold: false },
  { text: "A qualified healthcare professional, from VitalFriend Inc. / Equicare / Medical Solutions Consultants LLC (MSC), will view my remote patient monitoring every fifteen (15) days. I may be contacted through a secure communication channel to review and discuss health details, as necessary.", bold: false },
  { text: "The RPM device(s) is not designed for an emergency response unit and is not monitored 24/7. I will call 911 for any medical emergencies. Any delay in seeking emergency care is the sole responsibility of the patient. Alerts and notifications may experience delays and should not be relied upon for immediate emergency response.", bold: true },
  { text: "I may withdraw my consent to participate in the remote monitoring program and stop participating at any time by notifying VitalFriend Inc. Upon doing so, I would ship back the device(s) (a.k.a BUDDI) to VitalFriend Inc. All shipping charges will be incurred by me and not VitalFriend Inc.", bold: false },
  { text: "I understand that the medication reminder feature is provided solely as a convenience tool. This feature does not create any obligation for me to take medication, nor does it transfer any responsibility to VitalFriend Inc. for missed medications. I acknowledge that I should only follow medication instructions as recommended by my healthcare provider, who maintains full responsibility for my medication management.", bold: false },
  { text: "I acknowledge that any readings from this device(s), including elevated or abnormal values, are not diagnostic in nature and do not automatically indicate a need for medication changes. I understand that all device(s) readings must be reviewed by a qualified healthcare professional before making any medical decisions or changes to my treatment plan. VitalFriend Inc. provides monitoring tools only and does not offer medical advice or medication recommendations.", bold: false },
  { text: "I understand that RPM device(s) may experience technical malfunctions, connectivity issues, or measurement inaccuracies. I will not rely solely on RPM device(s) readings for medical decisions and will continue all prescribed treatments and medications as directed by my healthcare provider.", bold: false },
  { text: "I acknowledge that remote patient monitoring supplements but does not replace regular medical care, routine appointments, or direct communication with my healthcare provider. RPM data does not constitute medical advice, diagnosis, or treatment recommendations.", bold: false },
  { text: "I am responsible for ensuring proper device(s) connectivity and will promptly report any technical issues, connectivity problems, or suspected device(s) malfunctions to VitalFriend Inc. I understand that data transmission failures or platform downtime may occur and that VitalFriend Inc. is not liable for such technical interruptions. Inaccurate data due to improper use is not the responsibility of VitalFriend Inc. or Equicare/MSC.", bold: false },
  { text: "I understand that I should contact my primary healthcare provider or seek immediate medical attention if I experience concerning symptoms, regardless of RPM device(s) readings. I will not delay seeking medical care based on RPM data.", bold: true },
  { text: "I acknowledge that while VitalFriend Inc. and its partners strive to provide reliable monitoring services, no medical technology is 100% accurate or foolproof. I understand the limitations of remote monitoring technology and agree not to hold VitalFriend Inc., Equicare/Medical Solutions Consultants LLC, or their employees liable for device(s) limitations, technical failures, or any adverse outcomes related to my participation in this program.", bold: false },
  { text: "I agree to notify VitalFriend Inc. and my healthcare provider within 48 hours of any diagnosis changes, new medical conditions, medication changes, or hospitalizations that may affect remote monitoring protocols.", bold: false },
  { text: "Patient is responsible for maintaining current contact information for themselves, their designated emergency contacts, primary care physician, and authorized caregivers. If VitalFriend Inc. or Equicare/MSC detects critical vital sign anomalies and cannot reach the patient, emergency contacts, or healthcare provider using the contact information on file, the patient assumes full responsibility for any adverse outcomes resulting from the inability to establish contact.", bold: false },
  { text: "Repeated non-compliance with program requirements, including failure to take measurements, failure to update health information, or failure to maintain device(s) properly, may result in termination from the program and device(s) retrieval without refund.", bold: false },
  { text: "Patient acknowledges that their primary care physician and Equicare/MSC providers are responsible for medical decisions and treatment recommendations. VitalFriend Inc. provides technology platform services only and does not provide medical advice or treatment.", bold: false },
  { text: "If any provision of this Agreement is found to be unenforceable or invalid by a court of competent authority, the remaining provisions shall continue in full force and effect.", bold: false },
  { text: "I agree to indemnify and hold harmless VitalFriend Inc., Equicare/Medical Solutions Consultants LLC, and their respective officers, directors, employees, agents, contractors, and affiliates from and against any and all claims, demands, damages, liabilities, costs, expenses or losses (including reasonable attorneys' fees and court costs) arising from my use of the RPM device(s) or participation in the monitoring program, except in cases of gross negligence or willful misconduct. This indemnification obligation shall survive termination of my participation in the program.", bold: false },
  { text: "This Authorization Agreement constitutes the entire agreement between the parties regarding remote patient monitoring services and supersedes all prior discussions, representations, or agreements.", bold: false },
];

const AUTH_PARA = "I hereby authorize VitalFriend Inc. and Equicare/Medical Solutions Consultants LLC to provide device(s) and services related to remote monitoring. My provider will direct the details and frequency of the remote monitoring services that have been discussed with me. I further state that I have read and understood the above authorization; and any questions I have on the device(s) or the use of the device(s) for my medical care have been answered to my satisfaction. I have had all the details of remote monitoring explained to me, and I am fully familiar with the contents of this authorization. I understand the device(s), used for the monitoring purpose will be in good working condition, and I agree to use them as instructed. I hereby agree to participate in the remote monitoring program as explained, under the terms as described herein.";

const LOL_LABEL = "LIMITATION OF LIABILITY: ";
const LOL_BODY  = "To the maximum extent permitted by law, VitalFriend Inc. and Equicare/Medical Solutions Consultants LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the remote patient monitoring program, including but not limited to device(s) malfunctions, data transmission errors, or any medical outcomes.";

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

// ── Paragraph / numbered term / signature row (authorization section) ─────────
function drawPara(s: S, text: string, size = 10, isBold = false): S {
  const font  = isBold ? s.bold : s.reg;
  const lines = wrapText(text, font, size, CW);
  s = ensureY(s, lines.length * 13 + 4);
  for (const ln of lines) {
    s.page.drawText(ln, { x: ML, y: s.y, size, font, color: C_DARK });
    s.y -= 13;
  }
  return s;
}

function drawTerm(s: S, num: number, text: string, isBold: boolean): S {
  const font    = isBold ? s.bold : s.reg;
  const numStr  = `${num}.`;
  const lines   = wrapText(text, font, 10, CW - INDENT);
  const totalH  = lines.length * 13 + 5;
  s = ensureY(s, totalH);

  s.page.drawText(numStr, { x: ML, y: s.y, size: 10, font: s.bold, color: C_DARK });
  for (let i = 0; i < lines.length; i++) {
    if (i > 0) s.y -= 13;
    s.page.drawText(lines[i], { x: ML + INDENT, y: s.y, size: 10, font, color: C_DARK });
  }
  s.y -= 13 + 4;
  return s;
}

async function drawSigRow(
  s: S,
  label: string,
  name: string,
  sigUrl: string,
  date: string,
): Promise<S> {
  const SIG_H   = 36; // headroom above the text row reserved for the signature image
  const ROW_GAP = 22;
  s = ensureY(s, SIG_H + 16 + ROW_GAP);

  const slw       = s.bold.widthOfTextAtSize("Signature:  ", 9);
  const nameAreaW = 170;
  const sigAreaW  = 170;
  const dateAreaW = CW - nameAreaW - sigAreaW - 20;
  const nameX     = ML;
  const sigX      = ML + nameAreaW + 10;
  const dateX     = sigX + sigAreaW + 10;

  if (sigUrl) {
    try {
      const b64   = sigUrl.split(",")[1];
      const buf   = Buffer.from(b64, "base64");
      const img   = await s.doc.embedPng(buf);
      const maxW  = sigAreaW - slw - 2;
      const maxH  = SIG_H - 4;
      const scale = Math.min(maxW / img.width, maxH / img.height, 1);
      const w     = img.width * scale;
      const h     = img.height * scale;
      const imgY = s.y - SIG_H + 2;
      s.page.drawImage(img, { x: sigX + slw, y: imgY, width: w, height: h });
    } catch { /* skip */ }
  }

  s.y -= SIG_H;

  s.page.drawText(label + " Name:  ", { x: nameX, y: s.y, size: 9, font: s.bold, color: C_DARK });
  const lw = s.bold.widthOfTextAtSize(label + " Name:  ", 9);
  if (name) s.page.drawText(sanitize(name), { x: nameX + lw, y: s.y, size: 9, font: s.reg, color: C_DARK });
  s.page.drawLine({ start: { x: nameX + lw, y: s.y - 2 }, end: { x: nameX + nameAreaW, y: s.y - 2 }, thickness: 0.5, color: C_LINE });

  s.page.drawText("Signature:  ", { x: sigX, y: s.y, size: 9, font: s.bold, color: C_DARK });
  s.page.drawLine({ start: { x: sigX + slw, y: s.y - 2 }, end: { x: sigX + sigAreaW, y: s.y - 2 }, thickness: 0.5, color: C_LINE });

  s.page.drawText("Date:  ", { x: dateX, y: s.y, size: 9, font: s.bold, color: C_DARK });
  const dw = s.bold.widthOfTextAtSize("Date:  ", 9);
  if (date) s.page.drawText(sanitize(date), { x: dateX + dw, y: s.y, size: 9, font: s.reg, color: C_DARK });
  s.page.drawLine({ start: { x: dateX + dw, y: s.y - 2 }, end: { x: dateX + dateAreaW, y: s.y - 2 }, thickness: 0.5, color: C_LINE });

  s.y -= ROW_GAP;
  return s;
}

// ── Drive helpers ─────────────────────────────────────────────────────────────
async function downloadFile(drive: ReturnType<typeof google.drive>, id: string): Promise<Buffer> {
  const res = await drive.files.get(
    { fileId: id, alt: "media", supportsAllDrives: true },
    { responseType: "arraybuffer" },
  );
  return Buffer.from(res.data as ArrayBuffer);
}

async function listFolder(drive: ReturnType<typeof google.drive>, folderId: string) {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: "files(id, name, mimeType)",
    pageSize: 50,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });
  return (res.data.files ?? []) as { id: string; name: string; mimeType: string }[];
}

// ── Section 1: Patient Intake ──────────────────────────────────────────────────
async function buildIntakeSection(
  s: S,
  body: Record<string, unknown>,
  driveFiles: { id: string; name: string; mimeType: string }[],
  drive: ReturnType<typeof google.drive>,
  includeSignature: boolean,
): Promise<S> {
  const form     = (body.form     ?? {}) as Record<string, string>;
  const consents = (body.consents ?? {}) as Record<string, boolean>;
  const sigUrl   = includeSignature ? ((body.signatureDataUrl ?? "") as string) : "";
  const refId    = (body.refId ?? "") as string;
  const allContacts = (body.emergencyContacts as Array<{ name: string; phone: string; relationship: string }> | undefined)
    ?? [{ name: form.emergencyContactName, phone: form.emergencyContactPhone, relationship: form.emergencyContactRelationship }];

  const { bold, reg, ital } = s;

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
      if (file.mimeType.includes("png")) img = await s.doc.embedPng(buf);
      else img = await s.doc.embedJpg(buf);

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
      const img   = await s.doc.embedPng(buf);
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

  return s;
}

// ── Section 2: Authorization / Release of Liability ───────────────────────────
async function buildAuthorizationSection(
  s: S,
  body: Record<string, unknown>,
  includeSignature: boolean,
): Promise<S> {
  const form         = (body.form         ?? {}) as Record<string, string>;
  const sigUrl       = includeSignature ? ((body.signatureDataUrl    ?? "") as string) : "";
  const poaName      = (body.poaName      ?? "") as string;
  const poaSigUrl    = includeSignature ? ((body.poaSignatureDataUrl ?? "") as string) : "";
  const witnessName  = (body.witnessName  ?? "") as string;
  const witnessSigUrl= includeSignature ? ((body.witnessSignatureDataUrl ?? "") as string) : "";

  const { bold, reg } = s;

  // Start authorization section on a fresh page
  s = newPage(s);

  // ── Title (centred) ─────────────────────────────────────────────────────────
  const title = "REMOTE PATIENT MONITORING (AUTHORIZATION) FORM";
  const tw    = bold.widthOfTextAtSize(title, 13);
  s.page.drawText(title, { x: (PW - tw) / 2, y: s.y, size: 13, font: bold, color: C_DARK });
  s.y -= 22;

  const sub = "AUTHORIZATION AGREEMENT / RELEASE OF LIABILITY";
  const sw  = bold.widthOfTextAtSize(sub, 11);
  s.page.drawText(sub, { x: (PW - sw) / 2, y: s.y, size: 11, font: bold, color: C_DARK });
  s.y -= 22;

  // Intro line
  s.page.drawText("By signing this form, I agree that I have read and understood the following:", {
    x: ML, y: s.y, size: 10, font: reg, color: C_DARK,
  });
  s.y -= 18;

  // ── 26 terms ────────────────────────────────────────────────────────────────
  for (let i = 0; i < TERMS.length; i++) {
    s = drawTerm(s, i + 1, TERMS[i].text, TERMS[i].bold);
  }

  // ── Authorization paragraph ──────────────────────────────────────────────────
  s.y -= 6;
  hRule(s, 0.5, C_LINE);
  s.y -= 14;
  s = drawPara(s, AUTH_PARA);
  s.y -= 10;

  // ── Limitation of Liability ───────────────────────────────────────────────
  const lolLines = wrapText(LOL_LABEL + LOL_BODY, reg, 10, CW);
  s = ensureY(s, lolLines.length * 13 + 10);
  const llw = bold.widthOfTextAtSize(LOL_LABEL, 10);

  // First line: bold label + rest in regular
  const firstRemainder = lolLines[0].slice(LOL_LABEL.length);
  s.page.drawText(LOL_LABEL, { x: ML, y: s.y, size: 10, font: bold, color: C_DARK });
  s.page.drawText(firstRemainder, { x: ML + llw, y: s.y, size: 10, font: reg, color: C_DARK });
  s.y -= 13;
  for (let i = 1; i < lolLines.length; i++) {
    s.page.drawText(lolLines[i], { x: ML, y: s.y, size: 10, font: reg, color: C_DARK });
    s.y -= 13;
  }

  // ── Bottom signature line ────────────────────────────────────────────────────
  s.y -= 16;
  hRule(s, 0.8, C_DARK);
  s.y -= 20;

  const patientName = sanitize(`${form.firstName ?? ""} ${form.lastName ?? ""}`.trim());

  // Consent line: "I, [drawn signature] (patient signature), have read..."
  s = ensureY(s, 80);

  const prefixText = "I, ";
  const prefixW    = reg.widthOfTextAtSize(prefixText, 10);
  s.page.drawText(prefixText, { x: ML, y: s.y, size: 10, font: reg, color: C_DARK });

  const inlineSigW = 140;
  const inlineSigH = 28;
  if (sigUrl) {
    try {
      const b64   = sigUrl.split(",")[1];
      const buf   = Buffer.from(b64, "base64");
      const img   = await s.doc.embedPng(buf);
      const scale = Math.min(inlineSigW / img.width, inlineSigH / img.height, 1);
      const w     = img.width * scale;
      const h     = img.height * scale;
      s.page.drawImage(img, { x: ML + prefixW, y: s.y + 2, width: w, height: h });
    } catch { /* skip */ }
  }
  s.page.drawLine({
    start: { x: ML + prefixW, y: s.y - 3 },
    end:   { x: ML + prefixW + inlineSigW, y: s.y - 3 },
    thickness: 0.5, color: C_LINE,
  });

  const afterSigX  = ML + prefixW + inlineSigW + 4;
  const afterSigW  = ML + CW - afterSigX;
  const restText   = "(patient signature), have read and understood the information above. I hereby consent to participate in the Remote Patient Monitoring Program.";
  const restLines  = wrapText(restText, reg, 10, afterSigW);

  s.page.drawText(restLines[0], { x: afterSigX, y: s.y, size: 10, font: reg, color: C_DARK });
  s.y -= 13;
  for (let i = 1; i < restLines.length; i++) {
    s.page.drawText(restLines[i], { x: ML, y: s.y, size: 10, font: reg, color: C_DARK });
    s.y -= 13;
  }

  // ── Signature block page ──────────────────────────────────────────────────────
  s = newPage(s);

  const poa_note = "If signed by Power of Attorney or legal guardian, signatory affirms they have legal authority to consent on behalf of the patient and agrees to inform patient of all program requirements and responsibilities.";
  s = drawPara(s, poa_note);
  s.y -= 20;

  // Patient row
  s = await drawSigRow(s, "Patient", patientName, sigUrl, form.signatureDate ?? "");
  s.y -= 18;

  // POA row
  s = await drawSigRow(s, "Patient POA", poaName, poaSigUrl, form.signatureDate ?? "");
  s.y -= 18;

  // Witness row
  s = await drawSigRow(s, "Witness", witnessName, witnessSigUrl, form.signatureDate ?? "");

  return s;
}

// ── Build combined PDF ─────────────────────────────────────────────────────────
async function buildPdf(
  body: Record<string, unknown>,
  driveFiles: { id: string; name: string; mimeType: string }[],
  drive: ReturnType<typeof google.drive>,
  includeSignature: boolean,
): Promise<Uint8Array> {
  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const ital = await doc.embedFont(StandardFonts.HelveticaOblique);

  let s: S = { doc, page: doc.addPage([PW, PH]), bold, reg, ital, y: PH - ML };

  s = await buildIntakeSection(s, body, driveFiles, drive, includeSignature);
  s = await buildAuthorizationSection(s, body, includeSignature);

  return doc.save();
}

// ── Route ─────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!(await verifyIntakeSession(req))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body     = await req.json() as Record<string, unknown>;
    const folderId = body.folderId as string;

    if (!folderId) {
      return NextResponse.json({ success: false, error: "No folder ID" }, { status: 400 });
    }

    const auth  = getAuth();
    const drive = google.drive({ version: "v3", auth });

    const driveFiles   = await listFolder(drive, folderId);
    const pdfBytes      = await buildPdf(body, driveFiles, drive, true);
    const pdfBytesNoSig = await buildPdf(body, driveFiles, drive, false);

    const form    = (body.form ?? {}) as Record<string, string>;
    const refId   = (body.refId ?? "") as string;
    const pdfName      = `RPM_Form_${form.firstName}_${form.lastName}_${refId}.pdf`;
    const pdfNameNoSig = `RPM_Form_NoSignature_${form.firstName}_${form.lastName}_${refId}.pdf`;

    await drive.files.create({
      requestBody: { name: pdfName, parents: [folderId], mimeType: "application/pdf" },
      media: { mimeType: "application/pdf", body: Readable.from(Buffer.from(pdfBytes)) },
      fields: "id",
      supportsAllDrives: true,
    });

    await drive.files.create({
      requestBody: { name: pdfNameNoSig, parents: [folderId], mimeType: "application/pdf" },
      media: { mimeType: "application/pdf", body: Readable.from(Buffer.from(pdfBytesNoSig)) },
      fields: "id",
      supportsAllDrives: true,
    });

    const pdfBase64      = Buffer.from(pdfBytes).toString("base64");
    const pdfBase64NoSig = Buffer.from(pdfBytesNoSig).toString("base64");
    return NextResponse.json({ success: true, pdfName, pdfBase64, pdfNameNoSig, pdfBase64NoSig });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
