import { NextRequest, NextResponse } from "next/server";
import { createWorker } from "tesseract.js";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Please upload a JPG, PNG, or WEBP image" }, { status: 400 });
    }

    const raw = Buffer.from(await file.arrayBuffer());

    const buffer = await sharp(raw)
      .resize({ width: 2400, withoutEnlargement: false })
      .greyscale()
      .normalize()
      .sharpen()
      .toBuffer();

    const worker = await createWorker("eng");
    await worker.setParameters({
      // PSM 4 = single column of text — works better for ID card layouts
      tessedit_pageseg_mode: "4" as never,
    });
    const { data: { text } } = await worker.recognize(buffer);
    await worker.terminate();
    console.log("=== OCR RAW TEXT ===\n", text, "\n===================");
    const parsed = parseDocument(text);
    console.log("=== PARSED ===\n", JSON.stringify(parsed, null, 2));
    return NextResponse.json(parsed);
  } catch (err) {
    console.error("OCR error:", err);
    return NextResponse.json({ error: "Failed to extract document data" }, { status: 500 });
  }
}

function parseDocument(raw: string): { docType: string; fields: Record<string, string> } {
  const upper = raw.toUpperCase();
  const isInsurance = /INSURANCE|MEMBER\s+ID|POLICY|SUBSCRIBER|PAYER|PLAN\s+NAME/.test(upper);
  if (isInsurance) return { docType: "insurance", fields: extractInsuranceFields(raw) };
  return { docType: "id", fields: extractIdFields(raw) };
}

// Street-type words — excludes "LN" (Last Name label) and "ST" (State) to avoid false matches
const STREET_RE = /\b(DRIVE|AVENUE|BOULEVARD|HIGHWAY|COURT|CIRCLE|PLACE|LANE|ROAD|WAY|DR|AVE|BLVD|HWY|CT|CIR|PL|RD)\b/i;

// Common words that appear on DLs but are NOT names
const SKIP_NAMES =
  /DRIVER|LICENSE|IDENTIFICATION|VETERAN|DONOR|NONE|RESTRICTION|CORR|LENS|RSTR|RETR|CLASS|ENDORSEMENT|FEDERAL|EXPIRES|EXPIRATION|RENEWAL|COMMERCIAL|CALIFORNIA|WASHINGTON|TEXAS|FLORIDA|HAIR|EYES|HGT|WGT|SEX|PARK|NONE|CORRECTIVE/;

// 2-letter DL field labels that must not be treated as name/street tokens
const DL_LABELS = new Set(["LN", "FN", "DL", "EXP", "DOB", "SEX", "HGT", "WGT", "DD", "ISS", "END", "RSTR", "USA", "CLASS"]);

function extractIdFields(text: string): Record<string, string> {
  const fields: Record<string, string> = {
    firstName: "", lastName: "", dateOfBirth: "", gender: "",
    street: "", city: "", state: "", zip: "",
  };
  const upper = text.toUpperCase();
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

  // ── DOB ──────────────────────────────────────────────────────────────────
  const isBirthYear = (y: string) => { const n = +y; return n >= 1900 && n <= 2010; };

  // Labeled: many variations — DOB, D.O.B, DATE OF BIRTH, BIRTH DATE, BORN, OON/oon (OCR noise)
  const dobLabeled = upper.match(/(?:\bD[O0]B\b|\bD\.O\.B\.?|\bDATE\s+OF\s+BIRTH|\bBIRTH\s*DATE|\bBORN\b|OON)\s*[:\-]?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/);
  if (dobLabeled) {
    fields.dateOfBirth = normDate(dobLabeled[1]);
  } else {
    const mmDdAll  = [...text.matchAll(/\b(\d{2})(\d{2})\/(\d{4})\b/g)];
    const slashAll = [...text.matchAll(/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g)];
    const bareAll  = [...text.matchAll(/\b(\d{2})(\d{2})(\d{4})\b/g)];

    const bMmDd  = mmDdAll.find(m => isBirthYear(m[3]));
    const bSlash = slashAll.find(m => isBirthYear(m[3]));
    const bBare  = bareAll.find(m => isBirthYear(m[3]));

    if      (bMmDd)  fields.dateOfBirth = `${bMmDd[3]}-${bMmDd[1]}-${bMmDd[2]}`;
    else if (bSlash) fields.dateOfBirth = `${bSlash[3]}-${bSlash[1].padStart(2,"0")}-${bSlash[2].padStart(2,"0")}`;
    else if (bBare)  fields.dateOfBirth = `${bBare[3]}-${bBare[1]}-${bBare[2]}`;
  }

  // ── City / State / ZIP ────────────────────────────────────────────────────
  // Use [A-Za-z ] (space only, NOT \s) so we don't cross line boundaries
  const cityStateZip = text.match(/([A-Za-z][A-Za-z ]{2,}),\s*([A-Z]{2})\s+(\d{5})/);
  if (cityStateZip) {
    fields.city  = cityStateZip[1].trim();
    fields.state = cityStateZip[2];
    fields.zip   = cityStateZip[3];
  } else {
    const stateZip = upper.match(/\b([A-Z]{2})\s+(\d{5})\b/);
    if (stateZip) { fields.state = stateZip[1]; fields.zip = stateZip[2]; }
  }

  // ── Street ────────────────────────────────────────────────────────────────
  for (const line of lines) {
    const lineU     = line.toUpperCase();
    const firstTok  = lineU.split(/\s+/)[0];
    if (DL_LABELS.has(firstTok)) continue;       // skip "LN OSHEA" etc.

    // Accept line if it starts with a house number (with or without space before next letter)
    const startsNum = /^\d{1,5}\s*[A-Za-z]/.test(line);
    // Or if it contains a street-type keyword and that keyword is not the first token
    const hasType   = STREET_RE.test(lineU) && !STREET_RE.test(firstTok);

    if (startsNum || hasType) {
      const clean = line
        .replace(/,?\s*[A-Z]{2}\s+\d{5}.*$/i, "")  // strip trailing CITY, ST ZIP
        .replace(/^[^A-Za-z0-9]+/, "")               // strip leading garbage
        .trim();
      if (clean.length > 3) {
        fields.street = clean
          .replace(/^(\d+)([A-Za-z])/, "$1 $2") // "23N" → "23 N"
          .replace(/'/g, " ")                    // apostrophe noise → space
          .replace(/\s{2,}/g, " ")               // collapse double spaces
          .trim();
        break;
      }
    }
  }

  // ── Gender ────────────────────────────────────────────────────────────────
  // Labels tried: SEX, GENDER, S (abbreviated on some DLs)
  // OCR often misreads M as: m, rn, ", 1, |\/|
  const genderLine = lines.find(l => /\b(SEX|GENDER)\b/i.test(l));
  if (genderLine) {
    // Segment between the label and the next known field keyword
    const seg = genderLine.match(/\b(?:SEX|GENDER)\b(.{0,12})(?:HAIR|EYES|HGT|$)/i);
    const between = seg ? seg[1] : genderLine;

    if (/\bFEMALE\b/i.test(between) || /\bf\b/i.test(between)) {
      fields.gender = "Female";
    } else if (/\bMALE\b/i.test(between) || /[Mm]\b/.test(between)) {
      fields.gender = "Male";
    } else if (/rn/i.test(between)) {
      fields.gender = "Male"; // OCR misread of "m"
    } else if (/"/.test(between) && !/[Ff]/.test(between)) {
      fields.gender = "Male"; // OCR misread of "M" as double-quote
    }
  }
  // Fallback: "S M" / "S F" abbreviation (DC-style DLs)
  if (!fields.gender) {
    const genderS = upper.match(/(?:^|\n)\s*S\s+([MF])\s/m);
    if (genderS) fields.gender = genderS[1] === "M" ? "Male" : "Female";
  }
  // Fallback: MALE / FEMALE word anywhere in document
  if (!fields.gender) {
    if (/\bFEMALE\b/.test(upper)) fields.gender = "Female";
    else if (/\bMALE\b/.test(upper)) fields.gender = "Male";
  }

  // ── Names ─────────────────────────────────────────────────────────────────
  // Strategy 1: Short label codes (CA-style: "LN OSHEA", "FN JOSEPH PETER")
  // OCR adds garbage before labels, so search anywhere in text.
  // FN is often misread as RN by OCR.
  const lnMatch = upper.match(/\bLN\s+([A-Z][A-Z'\- ]+?)(?:\n|$)/m);
  const fnMatch = upper.match(/\b[FR]N\s+([A-Z][A-Z'\- ]+?)(?:\n|$)/m);
  if (lnMatch) fields.lastName  = cap(lnMatch[1].trim());
  if (fnMatch) fields.firstName = cap(fnMatch[1].trim().split(/\s+/)[0]);

  // Strategy 2: Full worded labels (many label variations across state DL formats)
  if (!fields.lastName) {
    const m = upper.match(/(?:FAMILY\s*NAME|LAST\s*NAME|SURNAME|LAST)\s*[:\-]?\s+([A-Z][A-Z'\- ]+?)(?:\n|$)/m);
    if (m) fields.lastName = cap(m[1].trim());
  }
  if (!fields.firstName) {
    const m = upper.match(/(?:GIVEN\s*NAMES?|FIRST\s*NAME|FORENAME|FIRST)\s*[:\-]?\s+([A-Z][A-Z'\- ]+?)(?:\n|$)/m);
    if (m) fields.firstName = cap(m[1].trim().split(/\s+/)[0]);
  }

  // Strategy 3: Fallback — standalone ALL-CAPS lines with no digits (DC-style unlabeled DLs)
  if (!fields.lastName || !fields.firstName) {
    const nameLines = lines
      .filter(l => !/\d/.test(l))                             // skip lines that contain any digit
      .map(l => l.replace(/[^A-Za-z\s'\-]/g, "").trim())
      .filter(l => {
        if (!/^[A-Z][A-Z'\- ]{2,24}$/.test(l)) return false; // all-caps, reasonable length
        if (SKIP_NAMES.test(l)) return false;
        const first = l.split(/\s+/)[0];
        if (DL_LABELS.has(first)) return false;
        if (l.split(/\s+/).length > 3) return false;          // names are ≤ 3 words
        return true;
      });

    if (!fields.lastName  && nameLines.length >= 1) fields.lastName  = cap(nameLines[0]);
    if (!fields.firstName && nameLines.length >= 2) fields.firstName = cap(nameLines[1]);
  }

  return fields;
}

function extractInsuranceFields(text: string): Record<string, string> {
  const fields: Record<string, string> = {
    insuranceProvider: "", policyNumber: "", groupNumber: "",
    memberId: "", primaryPolicyHolder: "",
  };
  const upper = text.toUpperCase();
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

  // Provider: first meaningful line
  if (lines.length > 0) fields.insuranceProvider = lines[0];

  // ── Policy Number ─────────────────────────────────────────────────────────
  // Anchor to full POLICY keyword — "POL" alone would match inside "POLICY" itself
  const policyNum = upper.match(
    /\bPOLICY\s*(?:NO\.?|NUMBER|NUM|#|ID)\s*[:\-#]?\s*([()\[A-Z0-9][A-Z0-9\-\/]*)/
  );
  // Capture as-is including OCR noise chars like ( or [ — user can correct the first character in the field
  if (policyNum) fields.policyNumber = policyNum[1];

  // ── Group Number ──────────────────────────────────────────────────────────
  const groupNum = upper.match(
    /\b(?:GROUP\s*(?:NO\.?|NUMBER|NUM|#|ID)|GRP\s*[:\-#]?)\s*[:\-]?\s*([A-Z0-9][A-Z0-9\-]*)/
  );
  if (groupNum) fields.groupNumber = groupNum[1];

  // ── Member ID ─────────────────────────────────────────────────────────────
  // Try labeled patterns (many label variations across carrier types)
  const memberIdPatterns: RegExp[] = [
    /\bMEMBER\s*(?:ID|NO\.?|NUMBER|#)\s*[:\-#]?\s*([A-Z0-9][A-Z0-9\-\/]*)/,
    /\bSUBSCRIBER\s*(?:ID|NO\.?|NUMBER|#)\s*[:\-#]?\s*([A-Z0-9][A-Z0-9\-\/]*)/,
    /\bUSAA\s*#\s*[:\-]?\s*([A-Z0-9][A-Z0-9\-]*)/,
    /\bID\s*#\s*[:\-]?\s*([A-Z0-9][A-Z0-9\-\/]*)/,
    /\bMEDICARE\s*(?:NUMBER|NO\.?|#)[^\n]*\n+\s*([A-Z0-9][A-Z0-9\-]+)/m,
    /\bPLAN\s*(?:ID|NO\.?)\s*[:\-]?\s*([A-Z0-9][A-Z0-9\-\/]*)/,
  ];
  for (const pat of memberIdPatterns) {
    const m = upper.match(pat);
    if (m) { fields.memberId = m[1]; break; }
  }
  // Fallback: standalone X-Y-Z alphanumeric block (e.g. Medicare number format)
  if (!fields.memberId) {
    for (const line of lines) {
      const m = line.trim().match(/^([A-Z0-9]{2,6}-[A-Z0-9]{2,6}-[A-Z0-9]{2,6})/i);
      if (m) { fields.memberId = m[1].toUpperCase(); break; }
    }
  }

  // ── Primary Policy Holder ─────────────────────────────────────────────────
  // "Name/Nombre" (Medicare cards) gives the cleanest name — try it first
  const nameNombre = upper.match(/NAME\/NOMBRE[^\n]*\n+\s*([A-Z][A-Z. ]+?)(?:\n|$)/m);
  if (nameNombre) {
    fields.primaryPolicyHolder = cap(nameNombre[1].trim());
  } else {
    // Standard labels: Insured, Subscriber, Member Name, Policy Holder, Patient Name
    const holderMatch = upper.match(
      /\b(?:INSURED|SUBSCRIBER|MEMBER\s+NAME|POLICY\s+HOLDER|PATIENT\s+NAME)\s*[:\-]?\s*([A-Z][A-Z'. \-]+?)(?:\n|$)/m
    );
    if (holderMatch) {
      // Remove OCR apostrophe artifacts and fix capitalisation
      fields.primaryPolicyHolder = cap(holderMatch[1].trim().replace(/'/g, ""));
    }
  }

  return fields;
}

function normDate(d: string): string {
  const parts = d.split(/[\/\-]/);
  if (parts.length === 3) {
    const [m, day, y] = parts;
    const year = y.length === 2 ? `19${y}` : y;
    return `${year}-${m.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  return d;
}

function cap(s: string): string {
  return s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}
