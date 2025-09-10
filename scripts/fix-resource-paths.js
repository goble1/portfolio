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

// Update image and resource paths in HTML files
function fixResourcePaths(htmlFiles) {
  // Regex for resources that should be absolute paths
  // This matches <img src="/logos/..." and similar patterns
  const resourceRegex = /(\s(?:src|href)=")\/(?!\/|http|assets\/|#|\?|mailto:)([^"]+)"/g;
  
  let updatedFiles = 0;
  
  for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace relative paths with absolute paths
    const updatedContent = content.replace(resourceRegex, '$1https://craiggoble.com/$2"');
    
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
  fixResourcePaths(htmlFiles);
}

main();