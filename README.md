# Craig Goble's Portfolio

Welcome to my personal site built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [p5.js](https://p5js.org)! It features:

- A responsive portfolio with dark/light theme support
- Interactive p5.js visualizations
- A content-driven blog
- Hosted on GitHub Pages

---

## 🚀 Running Locally

1. **Clone the repository:**
```bash
git clone https://github.com/goble1/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the dev server:**
```bash
npm run dev
```

4. **Visit:** [http://localhost:4321](http://localhost:4321)

---

## 🎨 Adding a New Visualization

Visualizations live in `public/sketches/` and are listed in `src/data/sketches.js`.

### 1. Create your sketch file:
```bash
public/sketches/your-sketch-name.js
```

Use p5.js syntax. Example:
```js
function setup() {
  createCanvas(600, 400);
  background(200);
}
function draw() {
  ellipse(mouseX, mouseY, 50, 50);
}
```

### 2. Add it to the visualizations list:

Edit `src/data/sketches.js`:
```js
{
  slug: "your-sketch-name",
  title: "My Sketch Title",
  description: "Short description here."
}
```

### 3. Done! View at:
```
/visualizations/your-sketch-name
```

---

## ✍️ Adding a Blog Post

Blog posts live in `src/content/blog/` as Markdown files.

### 1. Create a new file:
```bash
src/content/blog/my-awesome-post.md
```

### 2. Use this frontmatter:
```md
---
title: "My Awesome Blog Post"
description: "What this post is about."
pubDate: "2025-04-10"
slug: "my-awesome-post"
---

Write your post in Markdown here.
```

### 3. View it at:
```
/blog/my-awesome-post
```

---

## 🌍 Deploying to GitHub Pages

We use the `docs/` folder and `base: '/portfolio/'` in `astro.config.mjs`.

### 1. Build the site:
```bash
npm run build
```

### 2. Commit changes:
```bash
git add docs
git commit -m "deploy: updated site"
git push origin main
```

### 3. GitHub Pages Settings:
- Branch: `main`
- Folder: `/docs`

Visit: [https://goble1.github.io/portfolio](https://goble1.github.io/portfolio)

---

## 📦 Technologies Used
- [Astro](https://astro.build) — static site builder
- [Tailwind CSS](https://tailwindcss.com) — styling
- [p5.js](https://p5js.org) — creative coding
- [GitHub Pages](https://pages.github.com) — hosting

---

## 📋 TODO / Ideas
- Add recent posts section
- Visual preview thumbnails
- GitHub Actions deploy
- Project showcase
- RSS feed for blog
- create url

---

Made with ❤️ by [Craig Goble](https://craiggoble.com)


