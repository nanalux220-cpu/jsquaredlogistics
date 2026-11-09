import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const base = process.env.BASE_PATH || "/";

// https://vite.dev/config/
export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
  },
  plugins: [react()],
  base,
  build: {
    // Vercel's Vite preset serves the "dist" folder.
    outDir: "dist",
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
