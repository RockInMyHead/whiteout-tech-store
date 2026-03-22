import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// Set VITE_BASE=/repo-name/ for GitHub Pages (see .github/workflows/deploy-pages.yml).
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
