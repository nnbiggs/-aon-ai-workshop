import { NextResponse } from "next/server";
import { GATE_COOKIE, GATE_TOKEN, SITE_PASSWORD } from "@/lib/gate";

export async function POST(request: Request) {
  let password = "";

  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (password !== SITE_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Incorrect password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(GATE_COOKIE, GATE_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    // 7 days
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
