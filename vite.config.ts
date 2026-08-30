import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    port: 8080,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
