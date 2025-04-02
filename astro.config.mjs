// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  adapter: vercel(),

  integrations: [icon(), sitemap()],
  site: "https://minifestbenefico.com/",
});