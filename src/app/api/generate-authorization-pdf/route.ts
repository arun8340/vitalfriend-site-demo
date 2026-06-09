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

// ── Layout ────────────────────────────────────────────────────────────────────
const PW = 612;
const PH = 792;
const ML = 52;
const CW = PW - ML * 2;
const INDENT = 26; // indent for numbered list text

const C_DARK  = rgb(0.05, 0.05, 0.05);
const C_GRAY  = rgb(0.55, 0.55, 0.55);
const C_LINE  = rgb(0.70, 0.70, 0.70);
const C_WHITE = rgb(1, 1, 1);
const C_CHECK = rgb(0.17, 0.50, 1.00);

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
  { text: "A qualified healthcare professional, from VitalFriend Inc. / Equicare / Medical Solutions Consultants LLC (MSC), will view my remote patient monitoring every seven (15) days. I may be contacted through a secure communication channel to review and discuss health details, as necessary.", bold: false },
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
  const safe = sanitize(text) || " ";
  const words = safe.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const attempt = cur ? `${cur} ${w}` : w;
    if (font.widthOfTextAtSize(attempt, size) > maxW) {
      if (cur) lines.push(cur);
      let chunk = w;
      while (chunk.length > 1 && font.widthOfTextAtSize(chunk, size) > maxW) {
        chunk = chunk.slice(0, -1);
      }
      cur = chunk;
    } else {
      cur = attempt;
    }
  }
  if (cur) lines.push(cur);
  return lines.length ? lines : [" "];
}

interface S { doc: PDFDocument; page: PDFPage; bold: PDFFont; reg: PDFFont; ital: PDFFont; y: number }

function newPage(s: S): S {
  const page = s.doc.addPage([PW, PH]);
  return { ...s, page, y: PH - ML };
}

function ensureY(s: S, h: number): S {
  return s.y - h < ML + 24 ? newPage(s) : s;
}

function hRule(s: S, thick = 0.7, color = C_LINE) {
  s.page.drawLine({ start: { x: ML, y: s.y }, end: { x: PW - ML, y: s.y }, thickness: thick, color });
}

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

// ── Numbered term ─────────────────────────────────────────────────────────────
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

// ── Signature block row ───────────────────────────────────────────────────────
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

  // ── Signature image drawn FIRST, in the headroom above the text row ──────────
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
      // Bottom of image sits just above where the underline will be drawn
      // The text row will be at (s.y - SIG_H); underline at (s.y - SIG_H - 2)
      // So image bottom = s.y - SIG_H + 2
      const imgY = s.y - SIG_H + 2;
      s.page.drawImage(img, { x: sigX + slw, y: imgY, width: w, height: h });
    } catch { /* skip */ }
  }

  // ── Step down to text row ────────────────────────────────────────────────────
  s.y -= SIG_H;

  // ── Name | Signature | Date labels + underlines ──────────────────────────────
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

// ── Build auth PDF ────────────────────────────────────────────────────────────
async function buildAuthPdf(body: Record<string, unknown>): Promise<Uint8Array> {
  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const ital = await doc.embedFont(StandardFonts.HelveticaOblique);

  const form         = (body.form         ?? {}) as Record<string, string>;
  const sigUrl       = (body.signatureDataUrl    ?? "") as string;
  const poaName      = (body.poaName      ?? "") as string;
  const poaSigUrl    = (body.poaSignatureDataUrl ?? "") as string;
  const witnessName  = (body.witnessName  ?? "") as string;
  const witnessSigUrl= (body.witnessSignatureDataUrl ?? "") as string;

  let s: S = { doc, page: doc.addPage([PW, PH]), bold, reg, ital, y: PH - ML };

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
  const sigLinePart1 = `I, ${patientName}`;
  const sigLinePart2 = " (patient signature), have read and understood the information above. I hereby consent to participate in the Remote Patient Monitoring Program.";
  const combined     = sigLinePart1 + sigLinePart2;
  const combLines    = wrapText(combined, reg, 10, CW);

  s = ensureY(s, combLines.length * 13 + 70);

  const p1w = reg.widthOfTextAtSize(sigLinePart1, 10);
  s.page.drawText(sigLinePart1, { x: ML, y: s.y, size: 10, font: bold, color: C_DARK });
  // underline the name part
  s.page.drawLine({ start: { x: ML, y: s.y - 2 }, end: { x: ML + p1w, y: s.y - 2 }, thickness: 0.5, color: C_LINE });
  // rest of first line after the name
  const restFirstLine = combLines[0].slice(sigLinePart1.length);
  s.page.drawText(restFirstLine, { x: ML + p1w, y: s.y, size: 10, font: reg, color: C_DARK });
  s.y -= 13;
  for (let i = 1; i < combLines.length; i++) {
    s.page.drawText(combLines[i], { x: ML, y: s.y, size: 10, font: reg, color: C_DARK });
    s.y -= 13;
  }

  // ── Page 3: Signature block ──────────────────────────────────────────────────
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

    const pdfBytes = await buildAuthPdf(body);

    const form    = (body.form ?? {}) as Record<string, string>;
    const refId   = (body.refId ?? "") as string;
    const pdfName = `RPM_Authorization_${form.firstName}_${form.lastName}_${refId}.pdf`;

    await drive.files.create({
      requestBody: { name: pdfName, parents: [folderId], mimeType: "application/pdf" },
      media: { mimeType: "application/pdf", body: Readable.from(Buffer.from(pdfBytes)) },
      fields: "id",
    });

    const pdfBase64 = Buffer.from(pdfBytes).toString("base64");
    return NextResponse.json({ success: true, pdfName, pdfBase64 });
  } catch (err) {
    console.error("Auth PDF generation error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
