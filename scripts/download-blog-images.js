const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BLOG_DIR = path.join(__dirname, '../content/blog');
const IMAGE_DIR = path.join(__dirname, '../public/images/blog');

// Ensure image directory exists
if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Function to create a reasonable filename from URL and post slug
function createFilename(url, postSlug, index = null) {
  const urlParts = new URL(url);
  const pathname = urlParts.pathname;

  // Extract file extension
  let ext = path.extname(pathname).split('?')[0];
  if (!ext) ext = '.jpg'; // default

  // Clean extension
  ext = ext.toLowerCase().replace(/\?.*$/, '');

  // Create base name
  let baseName = postSlug;
  if (index !== null) {
    baseName = `${postSlug}-${index}`;
  }

  return `${baseName}${ext}`;
}

// Function to extract all image URLs from a file
function extractImageUrls(content) {
  const urls = [];

  // Extract frontmatter image
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const imageMatch = frontmatter.match(/image:\s*["']([^"']+)["']/);
    if (imageMatch && imageMatch[1].includes('squarespace')) {
      urls.push({ url: imageMatch[1], type: 'featured' });
    }
  }

  // Extract embedded images
  const markdownImages = content.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g);
  for (const match of markdownImages) {
    const url = match[1];
    if (url.includes('squarespace')) {
      urls.push({ url, type: 'embedded' });
    }
  }

  return urls;
}

// Main function
async function processAllBlogPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  console.log(`\n📁 Processing ${files.length} blog posts...\n`);

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const slug = file.replace('.mdx', '');
    let content = fs.readFileSync(filePath, 'utf8');

    console.log(`\n📝 Processing: ${file}`);

    const imageUrls = extractImageUrls(content);

    if (imageUrls.length === 0) {
      console.log('   No Squarespace images found');
      continue;
    }

    console.log(`   Found ${imageUrls.length} image(s)`);

    let embeddedIndex = 1;
    let updated = false;

    for (const { url, type } of imageUrls) {
      try {
        let filename;

        if (type === 'featured') {
          filename = createFilename(url, slug);
        } else {
          filename = createFilename(url, slug, embeddedIndex);
          embeddedIndex++;
        }

        const localPath = path.join(IMAGE_DIR, filename);
        const relativePath = `/images/blog/${filename}`;

        // Download if doesn't exist
        if (!fs.existsSync(localPath)) {
          await downloadImage(url, localPath);
        } else {
          console.log(`   ⊙ Already exists: ${filename}`);
        }

        // Update content
        content = content.replace(url, relativePath);
        updated = true;

      } catch (error) {
        console.error(`   ✗ Error processing ${url}:`, error.message);
      }
    }

    // Write updated content
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`   ✓ Updated ${file}`);
    }
  }

  console.log('\n✅ All blog posts processed!\n');
}

// Run the script
processAllBlogPosts().catch(console.error);
