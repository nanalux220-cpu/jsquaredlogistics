import type { Config } from "tailwindcss";

// Brand palette: warm paper, deep ink and the signature J Squared red.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#f7f5f1", deep: "#efebe4" },
        ink: { DEFAULT: "#15171a", soft: "#2a2d32", muted: "#5d6168", faint: "#8b8f96" },
        brand: { DEFAULT: "#d4202a", dark: "#b0161f", light: "#fde8e8" },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', "system-ui", "Arial", "sans-serif"],
      },
      maxWidth: { site: "1280px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 40s linear infinite" },
    },
  },
  plugins: [],
} satisfies Config;
