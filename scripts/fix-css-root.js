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

// Update CSS references in HTML files
function updateCssReferences(htmlFiles) {
  // Regex to match CSS links to assets directory
  const cssRegex = /<link[^>]*href="https:\/\/craiggoble\.com\/assets\/_slug_\.F5P_0dVk\.css"[^>]*>/g;
  const newCssLink = '<link rel="stylesheet" href="https://craiggoble.com/_slug_.F5P_0dVk.css">';
  
  let updatedFiles = 0;
  
  for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace CSS link
    const updatedContent = content.replace(cssRegex, newCssLink);
    
    if (content !== updatedContent) {
      fs.writeFileSync(file, updatedContent);
      updatedFiles++;
      console.log(`Updated: ${path.relative(docsDir, file)}`);
    }
  }
  
  console.log(`\nUpdated ${updatedFiles} files.`);
}

// Main function
function main() {
  const htmlFiles = getAllHtmlFiles(docsDir);
  updateCssReferences(htmlFiles);
}

main();