import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the generated index.html
const indexPath = path.join(__dirname, 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

console.log('Starting path fixes...');

// Remove any hardcoded domain references in asset URLs
indexContent = indexContent.replace(/https:\/\/ronit9320\.github\.io\/Ronit9320\.github\.io\//g, '');
indexContent = indexContent.replace(/https:\/\/ronit9320\.github\.io\//g, '');

// Fix favicon and other static assets
indexContent = indexContent.replace(/<link rel="icon" .*? href="\/([^"]+)">/g, (match, p1) => {
  return match.replace(`/${p1}`, `./${p1}`);
});

indexContent = indexContent.replace(/<link rel="apple-touch-icon" href="\/([^"]+)">/g, (match, p1) => {
  return match.replace(`/${p1}`, `./${p1}`);
});

indexContent = indexContent.replace(/<link rel="manifest" href="\/([^"]+)">/g, (match, p1) => {
  return match.replace(`/${p1}`, `./${p1}`);
});

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
indexContent = indexContent.replace(/src="\/([^"]+)"/g, (match, p1) => {
  // Don't change absolute URLs or URLs that start with http
  if (p1.startsWith('http') || p1.startsWith('//')) {
    return match;
  }
  return `src="./${p1}"`;
});

// Fix meta content paths
indexContent = indexContent.replace(/content="\/([^"]+)"/g, (match, p1) => {
  // Don't change absolute URLs or URLs that start with http
  if (p1.startsWith('http') || p1.startsWith('//')) {
    return match;
  }
  return `content="./${p1}"`;
});

// Fix the main.tsx path in index.html
indexContent = indexContent.replace(
  /<script type="module" src="\.\/src\/main\.tsx"><\/script>/g,
  ''
);

// Update debug.html to use stable asset filenames
const debugPath = path.join(__dirname, 'dist', 'debug.html');
if (fs.existsSync(debugPath)) {
  let debugContent = fs.readFileSync(debugPath, 'utf8');
  
  // Update asset references in the test function
  debugContent = debugContent.replace(
    /const assets = \[\s*{\s*type:\s*'CSS',\s*url:\s*'\.\/assets\/[^']+'\s*},\s*{\s*type:\s*'JavaScript',\s*url:\s*'\.\/assets\/[^']+'\s*},/g,
    `const assets = [\n        { type: 'CSS', url: './assets/index.css' },\n        { type: 'JavaScript', url: './assets/index.js' },`
  );
  
  fs.writeFileSync(debugPath, debugContent);
  console.log('✅ Updated asset paths in dist/debug.html');
}

// Write the fixed content back
fs.writeFileSync(indexPath, indexContent);
console.log('✅ Fixed paths in dist/index.html');

// Also check and fix the site.webmanifest if it's copied to dist
const manifestPath = path.join(__dirname, 'dist', 'site.webmanifest');
if (fs.existsSync(manifestPath)) {
  let manifestContent = fs.readFileSync(manifestPath, 'utf8');
  manifestContent = manifestContent.replace(/https:\/\/ronit9320\.github\.io\/Ronit9320\.github\.io\//g, './');
  manifestContent = manifestContent.replace(/https:\/\/ronit9320\.github\.io\//g, './');
  manifestContent = manifestContent.replace(/"\/([^"]+)"/g, (match, p1) => {
    if (p1.startsWith('http') || p1.startsWith('//')) {
      return match;
    }
    return `"./${p1}"`;
  });
  fs.writeFileSync(manifestPath, manifestContent);
  console.log('✅ Fixed paths in dist/site.webmanifest');
}

// Create a copy of index.html as index-debug.html for testing
fs.copyFileSync(indexPath, path.join(__dirname, 'dist', 'index-debug.html'));
console.log('✅ Created debug copy at dist/index-debug.html');

console.log('All path fixes complete! 🎉'); 