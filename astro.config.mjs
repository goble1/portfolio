import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://craiggoble.com',
  base: '/',
  output: 'static',
  outDir: 'docs',
  // Remove the relative paths and let Astro use standard paths
  // This prevents issues with path resolution on GitHub Pages
  integrations: [tailwind()],
  markdown: {
    drafts: true, // optional, lets you draft blog posts
    syntaxHighlight: false // or true if you want highlight.js
  }
});
