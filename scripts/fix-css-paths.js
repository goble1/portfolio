import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name using ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, '..', 'docs');

// Get all HTML files recursively
function getAllHtmlFiles(directory) {
  const files = [];
  
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.name.endsWith('.html')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(directory);
  return files;
}

// Update the HTML files to correctly reference the CSS
function fixCssPaths(htmlFiles) {
  const cssRegex = /<link[^>]*href="[^"]*_slug_\.F5P_0dVk\.css"[^>]*>/g;
  const cssPath = '<link rel="stylesheet" href="/assets/_slug_.F5P_0dVk.css">';
  
  let updatedFiles = 0;
  
  for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all CSS references with the correct one
    const updatedContent = content.replace(cssRegex, '').replace('</head>', `${cssPath}</head>`);
    
    if (content !== updatedContent) {
      fs.writeFileSync(file, updatedContent);
      updatedFiles++;
      console.log(`Updated: ${path.relative(docsDir, file)}`);
    }
  }
  
  console.log(`\nUpdated ${updatedFiles} files.`);
}

// Ensure the CSS file is in the correct location
function ensureCssFileLocation() {
  const sourceCssPath = path.join(docsDir, '_astro', '_slug_.F5P_0dVk.css');
  const targetDir = path.join(docsDir, 'assets');
  const targetCssPath = path.join(targetDir, '_slug_.F5P_0dVk.css');
  
  // Create the assets directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Copy the CSS file to the correct location
  if (fs.existsSync(sourceCssPath)) {
    fs.copyFileSync(sourceCssPath, targetCssPath);
    console.log(`CSS file copied to: assets/_slug_.F5P_0dVk.css`);
  } else {
    console.error(`CSS file not found at: ${sourceCssPath}`);
  }
}

// Main function
function main() {
  const htmlFiles = getAllHtmlFiles(docsDir);
  ensureCssFileLocation();
  fixCssPaths(htmlFiles);
}

main();