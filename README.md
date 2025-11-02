# Alkan Hukuk — Next.js + Vercel

Profesyonel, minimalist ve şık bir hukuk sitesi. Next.js (App Router), Tailwind CSS ve Framer Motion ile geliştirilmiştir. Vercel üzerinde yayınlamaya hazır.

## Özellikler
- Hızlı, SEO dostu ve responsive tasarım
- Minimalist tipografi (Playfair Display + Inter)
- İnce animasyonlar (Framer Motion)
- İletişim formu (Vercel Serverless API — stub)
- Sitemap ve robots

## Geliştirme

```powershell
# Bağımlılıkları kurun
npm install

# Geliştirme sunucusu
npm run dev

# Prod build ve çalıştırma
npm run build
npm start
```

Varsayılan olarak http://localhost:3000 adresinde çalışır.

## Dağıtım (Vercel)
1. Bu klasörü yeni bir Git deposu olarak başlatın ve GitHub’a gönderin.
2. Vercel’de proje oluşturup GitHub repo’yu bağlayın.
3. Framework: Next.js, Build: `npm run build`, Output: `.next` (varsayılanlar uygundur).

## İletişim Formu Hakkında
`/api/contact` endpoint’i örnek amaçlıdır ve form verisini yalnızca loglar. E-posta göndermek için aşağıdakilerden birini entegre edin:
- Resend, SendGrid, Mailgun ya da SMTP
- `app/api/contact/route.ts` içinde ilgili SDK/SMTP kodunu ekleyin

## Yapı
- `app/` — App Router sayfaları ve layout
- `components/` — UI bileşenleri
- `public/` — statik dosyalar (favicon ve OG görseli)

## Lisans
Tüm hakları saklıdır. © Alkan Hukuk
