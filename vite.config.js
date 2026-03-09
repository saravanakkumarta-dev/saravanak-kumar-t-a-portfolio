import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  // base: "/saravanak-kumar-t-a-portfolio/",
  base : "/",
  plugins: [react(), tailwindcss(), cloudflare()],
});