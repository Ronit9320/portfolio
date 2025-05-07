import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the generated index.html
const indexPath = path.join(__dirname, 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Remove any hardcoded domain references in asset URLs
indexContent = indexContent.replace(/https:\/\/ronit9320\.github\.io\/Ronit9320\.github\.io\//g, '/');
indexContent = indexContent.replace(/https:\/\/ronit9320\.github\.io\//g, '/');

// Ensure JS module scripts have correct type and path
indexContent = indexContent.replace(
  /<script type="module" crossorigin src=".*\/assets\/([^"]+)"><\/script>/g, 
  '<script type="module" crossorigin src="/assets/$1"></script>'
);

// Fix CSS links
indexContent = indexContent.replace(
  /<link rel="stylesheet" crossorigin href=".*\/assets\/([^"]+)">/g,
  '<link rel="stylesheet" crossorigin href="/assets/$1">'
);

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