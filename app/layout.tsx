import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alkanhukuk.com"),
  title: {
    default: "Alkan Hukuk | Avukatlık ve Danışmanlık",
    template: "%s | Alkan Hukuk",
  },
  description: "Alkan Hukuk: Dürüstlük ve şeffaflığa dayalı, sonuç odaklı avukatlık ve danışmanlık hizmetleri.",
  keywords: ["Alkan Hukuk", "avukat", "hukuk bürosu", "danışmanlık", "İstanbul avukat"],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    type: "website",
    url: "https://www.alkanhukuk.com",
    title: "Alkan Hukuk | Avukatlık ve Danışmanlık",
    description: "Dürüstlük ve şeffaflığa dayalı, sonuç odaklı hukuk hizmetleri.",
    images: [{ url: "/api/og", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Alkan Hukuk",
    description: "Sonuç odaklı avukatlık ve danışmanlık",
    images: ["/api/og"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/* Initial theme to avoid FOUC */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => { try { const s = localStorage.getItem('theme'); const m = window.matchMedia('(prefers-color-scheme: dark)').matches; const d = s ? s === 'dark' : m; const el = document.documentElement; el.classList.toggle('dark', d); } catch(_){} })();`}
        </Script>
      </head>
      <body className="min-h-dvh flex flex-col bg-white text-black dark:bg-[#0B0B0B] dark:text-gray-100 selection:bg-brand-gold/20 selection:text-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
