import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

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
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Please upload a JPG, PNG, or WEBP image" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const mediaType = file.type as "image/jpeg" | "image/png" | "image/gif" | "image/webp";

    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "base64", media_type: mediaType, data: base64 },
            },
            { type: "text", text: EXTRACTION_PROMPT },
          ],
        },
      ],
    });

    const raw = response.content[0].type === "text" ? response.content[0].text : "";
    console.log("=== CLAUDE VISION RESPONSE ===\n", raw, "\n==============================");

    const parsed = JSON.parse(raw.trim());
    console.log("=== PARSED ===\n", JSON.stringify(parsed, null, 2));
    return NextResponse.json(parsed);
  } catch (err: unknown) {
    const isAuthError =
      err instanceof Error &&
      (err.message.includes("401") || err.message.toLowerCase().includes("auth") || err.constructor?.name === "AuthenticationError");
    if (isAuthError) {
      return NextResponse.json({ error: "auto-fill-unavailable" }, { status: 200 });
    }
    console.error("Document extraction error:", err);
    return NextResponse.json({ error: "auto-fill-unavailable" }, { status: 200 });
  }
}
