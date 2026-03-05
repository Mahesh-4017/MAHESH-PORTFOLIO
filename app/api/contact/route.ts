import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
