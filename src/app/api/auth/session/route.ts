import { NextRequest, NextResponse } from "next/server";
import { getIntakeSession } from "@/lib/intakeAuth";

export async function GET(req: NextRequest) {
  const session = await getIntakeSession(req);
  if (!session) return NextResponse.json({ authenticated: false }, { status: 401 });
  return NextResponse.json({ authenticated: true });
}
