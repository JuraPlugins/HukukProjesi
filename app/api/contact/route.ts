import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge"; // fast, low-latency

function isEmail(v: string) {
  return /.+@.+\..+/.test(v);
}

export async function POST(req: NextRequest) {
  try {
    const ct = req.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let subject = "";

    if (ct.includes("application/json")) {
      const data = await req.json();
      name = String(data?.name || "").trim();
      email = String(data?.email || "").trim();
      phone = String(data?.phone || "").trim();
      message = String(data?.message || "").trim();
      subject = String(data?.subject || "").trim();
    } else {
      const form = await req.formData();
      name = String(form.get("name") || "").trim();
      email = String(form.get("email") || "").trim();
      phone = String(form.get("phone") || "").trim();
      message = String(form.get("message") || "").trim();
      subject = String(form.get("subject") || "").trim();
    }

    const errors: Record<string, string> = {};
    if (!name || name.length < 2) errors.name = "Lütfen adınızı giriniz.";
    if (!email || !isEmail(email)) errors.email = "Geçerli bir e-posta adresi giriniz.";
    if (!message || message.length < 10) errors.message = "Mesaj en az 10 karakter olmalıdır.";

    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    // Stub: send email or store in DB. For now, we just log.
  console.log("CONTACT_FORM", { name, email, phone, subject, message });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Beklenmeyen bir hata oluştu." }, { status: 500 });
  }
}
