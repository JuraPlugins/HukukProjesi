import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  const fontSize = 72;
  // ImageResponse expects a React element; cast to `any` to avoid strict typing issues in this environment.
  return new ImageResponse(
    (<div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#ffffff",
          padding: "64px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#0B0B0B",
              position: "relative",
            }}
          >
            <svg width="64" height="64" viewBox="0 0 48 48" style={{ position: "absolute" }}>
              <rect x="2" y="2" width="44" height="44" rx="8" fill="#0B0B0B" />
              <path d="M14 34L24 14L34 34" stroke="#BFA36F" strokeWidth="3" fill="none" />
              <path d="M18 30H30" stroke="#ffffff" strokeWidth="2.5" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize, fontWeight: 700, color: "#0B0B0B", fontFamily: "serif" }}>Alkan Hukuk</div>
            <div style={{ fontSize: 28, color: "#4B5563" }}>Avukatlık ve Danışmanlık</div>
          </div>
        </div>
        <div style={{ marginTop: 28, width: "100%", height: 4, background: "#BFA36F" }} />
        <div style={{ marginTop: 28, fontSize: 36, color: "#111827", maxWidth: 1000, lineHeight: 1.2 }}>
          Güven, Şeffaflık ve Sonuç Odaklı Hukuk Hizmetleri
        </div>
      </div>
    ) as any,
    {
      width: 1200,
      height: 630,
    }
  );
}
