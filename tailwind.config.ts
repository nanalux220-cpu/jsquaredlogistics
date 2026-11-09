/** @type {import('tailwindcss').Config} */
const scale = (role: string) => {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return Object.fromEntries(steps.map((s) => [s, `oklch(var(--${role}-${s}) / <alpha-value>)`]));
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: scale("background"),
        accent: scale("accent"),
        primary: scale("primary"),
        secondary: scale("secondary"),
        foreground: scale("foreground"),
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        display: ["var(--font-heading)"],
        serif: ["var(--font-heading)"],
        label: ["var(--font-label)"],
      },
    },
  },
  plugins: [],
};