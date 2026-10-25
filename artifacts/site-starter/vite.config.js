import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const basePath = process.env.BASE_PATH ?? "/";
const port = Number(process.env.PORT ?? 5173);

export default defineConfig({
  base: basePath,
  plugins: [react()],
  root: import.meta.dirname,
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port,
    strictPort: Boolean(process.env.PORT),
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: port === 5173 ? 4173 : port,
    allowedHosts: true,
  },
});
