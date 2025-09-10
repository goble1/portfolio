import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://craiggoble.com',
  base: '/',
  output: 'static',
  outDir: 'docs',
  build: {
    assets: 'assets',
    assetsPrefix: ''
  },
  // CSS is served from site root with no prefix needed
  integrations: [tailwind()],
  markdown: {
    drafts: true, // optional, lets you draft blog posts
    syntaxHighlight: false // or true if you want highlight.js
  }
});
