import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config();

const API_URL = process.env.VITE_API_URL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: API_URL,
        changeOrigin: true,
        secure: process.env.NODE_ENV === "production",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
