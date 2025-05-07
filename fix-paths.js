import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the generated index.html
const indexPath = path.join(__dirname, 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Remove any hardcoded domain references in asset URLs
indexContent = indexContent.replace(/https:\/\/ronit9320\.github\.io\/Ronit9320\.github\.io\//g, '');
indexContent = indexContent.replace(/https:\/\/ronit9320\.github\.io\//g, '');

// Fix asset paths for gh-pages (using relative paths instead of absolute)
// Change from /assets/ to ./assets/
indexContent = indexContent.replace(
  /<script type="module" crossorigin src="\/assets\/([^"]+)"><\/script>/g, 
  '<script type="module" crossorigin src="./assets/$1"></script>'
);

// Also handle already relative paths
indexContent = indexContent.replace(
  /<script type="module" crossorigin src="assets\/([^"]+)"><\/script>/g, 
  '<script type="module" crossorigin src="./assets/$1"></script>'
);

// Fix CSS links
indexContent = indexContent.replace(
  /<link rel="stylesheet" crossorigin href="\/assets\/([^"]+)">/g,
  '<link rel="stylesheet" crossorigin href="./assets/$1">'
);

// Also handle already relative paths
indexContent = indexContent.replace(
  /<link rel="stylesheet" crossorigin href="assets\/([^"]+)">/g,
  '<link rel="stylesheet" crossorigin href="./assets/$1">'
);

// Fix other asset paths (favicons, images, etc.)
indexContent = indexContent.replace(/href="\/([^"]+)"/g, (match, p1) => {
  // Don't change absolute URLs or URLs that start with http
  if (p1.startsWith('http') || p1.startsWith('//')) {
    return match;
  }
  return `href="./${p1}"`;
});

// Fix image paths
indexContent = indexContent.replace(/content="\/([^"]+)"/g, (match, p1) => {
  // Don't change absolute URLs or URLs that start with http
  if (p1.startsWith('http') || p1.startsWith('//')) {
    return match;
  }
  return `content="./${p1}"`;
});

// Write the fixed content back
fs.writeFileSync(indexPath, indexContent);

console.log('✅ Fixed paths in dist/index.html');

// Also check and fix the site.webmanifest if it's copied to dist
const manifestPath = path.join(__dirname, 'dist', 'site.webmanifest');
if (fs.existsSync(manifestPath)) {
  let manifestContent = fs.readFileSync(manifestPath, 'utf8');
  manifestContent = manifestContent.replace(/https:\/\/ronit9320\.github\.io\/Ronit9320\.github\.io\//g, './');
  manifestContent = manifestContent.replace(/https:\/\/ronit9320\.github\.io\//g, './');
  fs.writeFileSync(manifestPath, manifestContent);
  console.log('✅ Fixed paths in dist/site.webmanifest');
}

console.log('All path fixes complete! 🎉'); 