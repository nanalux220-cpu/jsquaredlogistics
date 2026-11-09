import type { Config } from "tailwindcss";

// Palette matched to jsquaredlogistics.co.uk: white page, deep charcoal bands, signature red.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#ffffff", deep: "#f6f7f8" },
        ink: { DEFAULT: "#25292f", soft: "#31363b", muted: "#525659", faint: "#6f7275" },
        brand: { DEFAULT: "#d61d22", dark: "#bb0916", light: "#ffdeda" },
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
