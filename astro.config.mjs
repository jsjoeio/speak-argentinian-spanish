import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://speakargentinianspanish.com/",
  experimental: {
    assets: true,
  },
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: "hybrid",
  adapter: vercel(),
});
