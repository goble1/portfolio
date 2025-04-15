import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};

