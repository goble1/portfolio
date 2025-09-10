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

// Fix paths in HTML files
function fixHtmlPaths(htmlFiles) {
  // Regex patterns for different types of resource references
  const patterns = [
    // Fix CSS references
    {
      regex: /<link[^>]*href="\/assets\/([^"]+)"[^>]*>/g,
      replacement: '<link rel="stylesheet" href="https://craiggoble.com/assets/$1">'
    },
    // Fix image references with absolute paths
    {
      regex: /(\s(?:src|href)=")\/(?!https:|http:|\/|#|\?|mailto:)([^"]+)"/g,
      replacement: '$1https://craiggoble.com/$2"'
    },
    // Fix internal link references (excluding external links, anchors, and protocols)
    {
      regex: /(\shref=")\/(?!https:|http:|\/|#|\?|mailto:)([^"]+)"/g,
      replacement: '$1https://craiggoble.com/$2"'
    }
  ];
  
  let updatedFiles = 0;
  
  for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let updated = false;
    
    // Apply each pattern
    for (const pattern of patterns) {
      const updatedContent = content.replace(pattern.regex, pattern.replacement);
      if (content !== updatedContent) {
        content = updatedContent;
        updated = true;
      }
    }
    
    if (updated) {
      fs.writeFileSync(file, content);
      updatedFiles++;
      console.log(`Updated: ${path.relative(docsDir, file)}`);
    }
  }
  
  console.log(`\nUpdated ${updatedFiles} files.`);
}

// Main function
function main() {
  const htmlFiles = getAllHtmlFiles(docsDir);
  fixHtmlPaths(htmlFiles);
}

main();