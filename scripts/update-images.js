const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapping of target filenames to archive source images
const imageMap = {
  // Blog images
  'public/images/blog/bible-school-graduation.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1708960320307-EVX6XKE2TO0C0UNA42ND/BibleSchoolGraduation2.jpg',
  'public/images/blog/holy-cows.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1659017670119-NPAP4MPSKQ1ZFCQI3FR0/holycow-02.jpg',
  'public/images/blog/project-cow-success-may-2022.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1653141205552-MUG9O74H4R7U2D2ABIOX/proj-cow-04.jpeg',
  'public/images/blog/project-jungle.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/780fb6fb-adf8-49a8-9166-d223f749cc9c/projectjungle1.jpg',
  'public/images/blog/warincambodia.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1754337271161-LK52IVM30GHH2PJWN3WT/WarMain.jpg',
  'public/images/blog/baby-sprinkle.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/7f7950a1-075a-43da-898c-a25aaa58fdca/babysprinkle2.jpg',
  'public/images/blog/happy-new-year-2025.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1746276498503-ILHXLWQ95GI7QNYSCLBG/Happy+New+Year+Main.jpg',
  'public/images/blog/the-harvest-is-ripe.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1472475047233-8ZENNPUQ7QBUAOSYO1WE/waiting-for-a-harvest.jpg',
  'public/images/blog/happynewyear.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1746276498503-ILHXLWQ95GI7QNYSCLBG/Happy+New+Year+Main.jpg',
};

let copied = 0;
let skipped = 0;
let notFound = 0;

console.log('Starting image update process...\n');

for (const [target, source] of Object.entries(imageMap)) {
  const targetPath = path.join(__dirname, '..', target);
  const sourcePath = path.join(__dirname, '..', source);

  console.log(`Processing: ${path.basename(target)}`);

  if (!fs.existsSync(sourcePath)) {
    console.log(`  ❌ Source not found: ${source}`);
    notFound++;
    continue;
  }

  const stats = fs.statSync(sourcePath);
  const targetExists = fs.existsSync(targetPath);
  const targetSize = targetExists ? fs.statSync(targetPath).size : 0;

  // Copy if target doesn't exist or is empty
  if (!targetExists || targetSize === 0) {
    try {
      fs.copyFileSync(sourcePath, targetPath);
      const newSize = fs.statSync(targetPath).size;
      console.log(`  ✅ Copied: ${(stats.size / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB`);
      copied++;
    } catch (err) {
      console.log(`  ❌ Error copying: ${err.message}`);
    }
  } else {
    console.log(`  ⏭️  Skipped: Already exists (${(targetSize / 1024).toFixed(1)}KB)`);
    skipped++;
  }
}

console.log('\n' + '='.repeat(50));
console.log(`Summary:`);
console.log(`  ✅ Copied: ${copied}`);
console.log(`  ⏭️  Skipped: ${skipped}`);
console.log(`  ❌ Not found: ${notFound}`);
console.log('='.repeat(50));
