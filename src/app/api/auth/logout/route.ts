import { NextResponse } from "next/server";
import { INTAKE_COOKIE } from "@/lib/intakeAuth";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(INTAKE_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
