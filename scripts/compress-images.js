const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
let totalOriginalSize = 0;
let totalCompressedSize = 0;
let filesProcessed = 0;

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  try {
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    totalOriginalSize += originalSize;

    // Read the image
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Skip if already small
    if (originalSize < 100000) {
      console.log(`Skipping ${path.basename(filePath)} (already small: ${(originalSize / 1024).toFixed(1)}KB)`);
      totalCompressedSize += originalSize;
      return;
    }

    // Compress based on file type
    if (ext === '.png') {
      await image
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    } else {
      await image
        .jpeg({ quality: 80, progressive: true })
        .toFile(filePath + '.tmp');
    }

    const newStats = fs.statSync(filePath + '.tmp');
    const newSize = newStats.size;
    totalCompressedSize += newSize;
    filesProcessed++;

    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    // Only replace if we actually saved space
    if (newSize < originalSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(filePath + '.tmp', filePath);
      console.log(`✓ ${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
    } else {
      fs.unlinkSync(filePath + '.tmp');
      console.log(`✗ ${path.basename(filePath)}: No improvement, keeping original`);
    }
  } catch (err) {
    console.error(`Error compressing ${filePath}:`, err.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await compressImage(filePath);
    }
  }
}

async function main() {
  console.log('Starting image compression...\n');
  await processDirectory(imagesDir);

  console.log('\n' + '='.repeat(60));
  console.log('Compression Complete!');
  console.log('='.repeat(60));
  console.log(`Files processed: ${filesProcessed}`);
  console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)}MB (${((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1)}%)`);
}

main().catch(console.error);
