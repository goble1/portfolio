import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Removed base: '/portfolio/' for custom domain
  output: 'static',
  outDir: 'docs',
  integrations: [tailwind()],
  markdown: {
    drafts: true, // optional, lets you draft blog posts
    syntaxHighlight: false // or true if you want highlight.js
  }
});
