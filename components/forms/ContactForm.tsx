"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-600">Ad Soyad</label>
        <input name="name" required placeholder="Adınız Soyadınız" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600">E-posta</label>
          <input name="email" type="email" required placeholder="ornek@eposta.com" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Telefon</label>
          <input name="phone" placeholder="05xx xxx xx xx" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-600">Konu</label>
        <input name="subject" required placeholder="Kısa konu başlığı" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
      </div>
      <div>
        <label className="block text-sm text-gray-600">Mesaj</label>
        <textarea name="message" required rows={5} placeholder="Kısaca anlatın" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
      </div>
      <div className="pt-2">
        <button disabled={status === "loading"} className="btn btn-primary">
          {status === "loading" ? "Gönderiliyor…" : "Gönder"}
        </button>
        {status === "success" && <span className="ml-3 text-green-600 text-sm">Teşekkürler, en kısa sürede dönüş yapacağız.</span>}
        {status === "error" && <span className="ml-3 text-red-600 text-sm">Bir hata oluştu. Lütfen tekrar deneyin.</span>}
      </div>
    </form>
  );
}
