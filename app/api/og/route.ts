import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>
    <rect width='100%' height='100%' fill='#fff' />
    <g transform='translate(80,120)'>
      <rect x='0' y='0' width='96' height='96' rx='12' fill='#0B0B0B'/>
      <path d='M14 78L48 18L82 78' stroke='#BFA36F' stroke-width='6' fill='none' transform='translate(0,-8)'/>
      <path d='M22 66H74' stroke='#fff' stroke-width='4' />
      <text x='140' y='60' font-family='Playfair Display, serif' font-size='56' fill='#0B0B0B'>Alkan Hukuk</text>
      <text x='140' y='108' font-family='Inter, sans-serif' font-size='28' fill='#6B7280'>Avukatlık ve Danışmanlık</text>
      <rect x='0' y='128' width='980' height='6' fill='#BFA36F' rx='3'/>
      <text x='0' y='200' font-family='Inter, sans-serif' font-size='36' fill='#111827'>Güven, Şeffaflık ve Sonuç Odaklı Hukuk Hizmetleri</text>
    </g>
  </svg>
  `;

  const svgBuffer = Buffer.from(svg);
  // ImageResponse can accept a Buffer containing an SVG for edge rendering
  return new ImageResponse(svgBuffer as any, { width: 1200, height: 630 });
}
