import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/saravanak-kumar-t-a-portfolio/",
  plugins: [react(), tailwindcss()],
});
