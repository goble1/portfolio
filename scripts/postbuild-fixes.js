import fs from 'fs';
import path from 'path';

const DOCS_DIR = './docs';

// Ensure `.nojekyll` exists
const nojekyllPath = path.join(DOCS_DIR, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

// Add a placeholder to _astro if needed
const astroDir = path.join(DOCS_DIR, '_astro');
const indexPath = path.join(astroDir, 'index.html');

if (!fs.existsSync(astroDir)) {
  fs.mkdirSync(astroDir, { recursive: true });
}

fs.writeFileSync(indexPath, '<!-- placeholder -->');

console.log('✅ postbuild fixes applied');

