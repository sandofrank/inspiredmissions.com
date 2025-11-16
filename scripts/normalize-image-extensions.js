const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');
const IMAGE_DIR = path.join(__dirname, '../public/images/blog');

console.log('📁 Normalizing image file extensions...\n');

// Find all .JPG files
const uppercaseFiles = fs.readdirSync(IMAGE_DIR).filter(f => f.endsWith('.JPG'));

console.log(`Found ${uppercaseFiles.length} files with uppercase .JPG extension\n`);

for (const file of uppercaseFiles) {
  const oldPath = path.join(IMAGE_DIR, file);
  const newFile = file.replace('.JPG', '.jpg');
  const newPath = path.join(IMAGE_DIR, newFile);

  // Rename the file
  fs.renameSync(oldPath, newPath);
  console.log(`✓ Renamed: ${file} → ${newFile}`);

  // Update references in MDX files
  const oldUrl = `/images/blog/${file}`;
  const newUrl = `/images/blog/${newFile}`;

  const mdxFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  for (const mdxFile of mdxFiles) {
    const mdxPath = path.join(BLOG_DIR, mdxFile);
    let content = fs.readFileSync(mdxPath, 'utf8');

    if (content.includes(oldUrl)) {
      content = content.replace(new RegExp(oldUrl, 'g'), newUrl);
      fs.writeFileSync(mdxPath, content, 'utf8');
      console.log(`  → Updated ${mdxFile}`);
    }
  }
}

console.log('\n✅ Image extensions normalized!\n');
