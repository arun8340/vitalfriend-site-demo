import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, ApiError } from "@google/genai";
import sharp from "sharp";
import { verifyIntakeSession } from "@/lib/intakeAuth";

const MODEL = "gemini-2.5-flash";

const client = new GoogleGenAI({
  vertexai: true,
  apiKey: process.env.GOOGLE_VERTEX_API_KEY,
});

const EXTRACTION_PROMPT = `You are a document data extractor. Look at this document image and extract the fields listed below.

Return ONLY a valid JSON object — no prose, no markdown, no explanation.

The document is one of two types:

TYPE 1 — Government-issued ID (driver's license, state ID, passport, military ID):
{
  "docType": "id",
  "fields": {
    "firstName": "",
    "lastName": "",
    "dateOfBirth": "YYYY-MM-DD",
    "gender": "Male or Female",
    "street": "",
    "city": "",
    "state": "",
    "zip": ""
  }
}

TYPE 2 — Insurance or Medicare card:
{
  "docType": "insurance",
  "fields": {
    "insuranceProvider": "",
    "policyNumber": "",
    "groupNumber": "",
    "memberId": "",
    "primaryPolicyHolder": ""
  }
}

Rules:
- Choose the type that best matches the document.
- For dateOfBirth, output in YYYY-MM-DD format. If year is 2-digit, assume 1900s.
- For gender, output exactly "Male" or "Female" or empty string if not shown.
- If a field is not visible or not applicable, use an empty string.
- Do not add any fields not listed above.
- Return only the raw JSON with no backticks and no code fences.`;

export async function POST(req: NextRequest) {
  if (!(await verifyIntakeSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Please upload a JPG, PNG, or WEBP image" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const resized = await sharp(Buffer.from(bytes))
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer();
    const base64 = resized.toString("base64");

    const response = await client.models.generateContent({
      model: MODEL,
      contents: [
        {
          role: "user",
          parts: [
            { inlineData: { mimeType: "image/jpeg", data: base64 } },
            { text: EXTRACTION_PROMPT },
          ],
        },
      ],
      config: {
        maxOutputTokens: 2048,
        responseMimeType: "application/json",
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const raw = response.text ?? "";
    console.log("=== GEMINI VISION RESPONSE ===\n", raw, "\n==============================");

    const parsed = JSON.parse(raw.trim());
    console.log("=== PARSED ===\n", JSON.stringify(parsed, null, 2));
    return NextResponse.json(parsed);
  } catch (err: unknown) {
    const isAuthError = err instanceof ApiError && (err.status === 401 || err.status === 403);
    if (isAuthError) {
      return NextResponse.json({ error: "auto-fill-unavailable" }, { status: 200 });
    }
    console.error("Document extraction error:", err);
    return NextResponse.json({ error: "auto-fill-unavailable" }, { status: 200 });
  }
}
