# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the site for production (outputs to docs/)
npm run build

# Preview the production build locally
npm run preview
```

## Project Architecture

This is a personal portfolio site built with Astro, Tailwind CSS, and p5.js. It features a responsive design with dark/light theme support, interactive p5.js visualizations, a content-driven blog, and is hosted on GitHub Pages.

### Core Technology Stack

- **Astro**: Static site generator that handles routing, content collection, and overall architecture
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: For type safety throughout the codebase
- **p5.js**: For creating interactive visualizations

### Directory Structure

- `src/`: Source code
  - `assets/`: Static assets
  - `components/`: Reusable UI components
    - `icons/`: SVG icons for the UI
  - `content/`: Content collections (blog posts)
    - `blog/`: Markdown files for blog posts
  - `data/`: Data files (resume info, visualization metadata)
  - `layouts/`: Page layout templates
  - `pages/`: All routes and pages
    - `blog/`: Blog listing and individual post pages
    - `resume/`: Resume page and timeline
    - `visualizations/`: Visualization listing and individual pages
  - `styles/`: Global CSS styles
- `public/`: Static assets served at root level
  - `sketches/`: p5.js visualization scripts
  - `logos/`: Images for certification logos
- `docs/`: Output directory for built site (used for GitHub Pages hosting)

### Key Features and Implementation Details

1. **Content Collection System**:
   - Blog posts are stored as Markdown files in `src/content/blog/`
   - Posts are rendered with Astro's content collections API

2. **Visualization System**:
   - p5.js sketches are defined in `public/sketches/`
   - Metadata in `src/data/sketches.js` connects sketches to routes
   - Visualizations are embedded via iframes using `public/embed.html`

3. **Theming**:
   - Dark/light mode implemented with Tailwind and client-side JS
   - Theme preference persisted in localStorage
   - System preference detection for initial theme

4. **Deployment**:
   - Site is built to the `docs/` folder
   - Hosted on GitHub Pages with custom domain configuration

## Working with this Codebase

### Adding a New Visualization

1. Create a p5.js sketch file in `public/sketches/your-sketch-name.js`
2. Add metadata to `src/data/sketches.js`
3. The visualization will be automatically available at `/visualizations/your-sketch-name`

### Adding a Blog Post

1. Create a new Markdown file in `src/content/blog/my-awesome-post.md`
2. Include required frontmatter (title, description, pubDate, slug)
3. The post will be automatically listed in the blog index and available at `/blog/my-awesome-post`

### Deployment Process

1. Build the site: `npm run build`
2. Commit the changes to the `docs/` folder
3. Push to GitHub where GitHub Pages will serve the content from the `docs/` folder