"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("pending");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data?.errors || {});
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600">Ad Soyad</label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Adınız"
            required
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-600">E-posta</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="ornek@mail.com"
            required
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-600">Telefon (opsiyonel)</label>
        <input
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="05xx xxx xx xx"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600">Mesaj</label>
        <textarea
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 min-h-[140px]"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Kısaca anlatın..."
          required
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "pending"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status === "pending" ? "Gönderiliyor..." : "Gönder"}
        </button>
        {status === "success" && <span className="text-sm text-green-700">Mesajınız iletildi. Teşekkürler.</span>}
        {status === "error" && <span className="text-sm text-red-700">Gönderim başarısız. Lütfen tekrar deneyin.</span>}
      </div>
    </form>
  );
}
