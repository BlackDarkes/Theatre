import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/",
  server: {
    port: 3000,
    open: true,
    hmr: true,
    cors: true,
    host: "0.0.0.0",
  },
  preview: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/shared/styles/helpers/index.scss" as *;
          @use "/src/shared/styles/base/variables.scss" as *;
        `,
      }
    }
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./src/app/"),
      "@pages": resolve(__dirname, "./src/pages/"),
      "@widgets": resolve(__dirname, "./src/widgets/"),
      "@features": resolve(__dirname, "./src/features/"),
      "@shared": resolve(__dirname, "./src/shared/"),
    }
  }
});
