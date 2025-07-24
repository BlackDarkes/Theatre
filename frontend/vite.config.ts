import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

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
      "@app": "src/app/",
      "@pages": "src/pages/",
      "@widgets": "src/widgets/",
      "@features": "src/features/",
      "@shared": "src/shared/",
    }
  }
});
