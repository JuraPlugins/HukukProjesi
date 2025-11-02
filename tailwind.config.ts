import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#BFA36F",
          dark: "#0B0B0B",
          light: "#F7F6F3"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        }
      }
    },
  },
  plugins: [typography],
};
export default config;
