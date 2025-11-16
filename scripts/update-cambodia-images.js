const fs = require('fs');
const path = require('path');

// Mapping of images used in about-cambodia page
const cambodiaImages = {
  // Bible School images
  'public/images/about-cambodia/bibleschool1.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632672557398-2L2E7MJTBNDNTN09HTLF/Bibleschool1.jpg',
  'public/images/about-cambodia/bibleschool2.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632672558246-QIZGMQZAJYBRKN7FQDO2/Bibleschool2.jpg',
  'public/images/about-cambodia/bibleschool3.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632672559062-V857RYJHZ8J2GZP3HVV8/Bibleschool3.jpg',
  'public/images/about-cambodia/bibleschool4.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632672563189-9WE5LVUNHPBHX4U7G9LB/Bibleschool4.jpg',
  'public/images/about-cambodia/bibleschool5.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632672564092-QGYKA6XAZJA35OK2XOPQ/Bibleschool5.jpg',
  'public/images/about-cambodia/bibleschool6.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632672566834-EPZPVPXAZEZBKSTKVW19/Bibleschool6.jpg',

  // Children of Hope
  'public/images/about-cambodia/coh.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1682558270954-YBXX5P2KWA8S4RWAT90Q/3-Children+Of+Hope+1.jpg',

  // Project Cow
  'public/images/about-cambodia/projectcow-01.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955276820-5PFSU29P632CJUAK9YXJ/ProjectCow-01.jpg',
  'public/images/about-cambodia/projectcow-02.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955277044-80H6NH8DUJF9ZRA1WH2Q/ProjectCow-02.jpg',
  'public/images/about-cambodia/projectcow-03.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955277587-U8QI70RO0NEGI7LN1DLQ/ProjectCow-03.jpg',
  'public/images/about-cambodia/projectcow-04.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955277772-XQALAASC9GJE2NWI5FJ1/ProjectCow-04.jpg',
  'public/images/about-cambodia/projectcow-05.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955278167-PXOFMA30W8YNMXY2XEEC/ProjectCow-05.jpg',

  // Project Fertilizer
  'public/images/about-cambodia/projectfert-01.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1700062664446-MEH5KZLFGBL0NTXNS13Y/fertilizer+1.jpg',

  // Jungle Ministry
  'public/images/about-cambodia/jm1.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614845360-CS6NO00LHPOANUZZFAE3/Jm1.jpg',
  'public/images/about-cambodia/jm2.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614845361-3NKII5EC5UXBOLSAAN0Y/Jm2.jpg',
  'public/images/about-cambodia/jm3.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614846373-4BZA3KUS2AR9BRTWE09U/Jm3.jpg',
  'public/images/about-cambodia/jm4.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614847003-ELIC5D8BG0K6OSTKZ0OM/Jm4.jpg',
  'public/images/about-cambodia/jm5.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614848266-XVCRKO18GW16MARJ2XJB/Jm5.jpg',
  'public/images/about-cambodia/jm6.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614848391-PXZJICTB30OKSHGKCB0N/Jm6.jpg',
  'public/images/about-cambodia/jm7.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614849329-5OKH0JSL1DJFDH9J9NF3/Jm7.jpg',
  'public/images/about-cambodia/jm8.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614849435-CXASP04VMHNUJX73AHJ8/Jm8.jpg',
  'public/images/about-cambodia/jm9.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1713614850998-7LPHUE6VEEYAEOEOMM8K/Jm9.jpg',

  // Support images
  'public/images/about-cambodia/support-01.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955600602-5773XTSW9M2UDU0T1OE2/Support-01.jpg',
  'public/images/about-cambodia/support-02.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955600839-6AEC15WJQST9NF3OIH7A/Support-02.jpg',
  'public/images/about-cambodia/support-03.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955604153-P2NXVR17QEM67S1QHJ16/Support-03.jpg',
  'public/images/about-cambodia/support-04.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955604086-CJIUSPYO1X8OBGZYN7JV/Support-04.jpg',
  'public/images/about-cambodia/support-05.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1661955605902-41D5VIQBQZML5L9QXCKV/Support-05.jpg',
};

let copied = 0;
let notFound = 0;

console.log('\n🔄 Copying About Cambodia images...\n');
console.log('='.repeat(70));

for (const [target, source] of Object.entries(cambodiaImages)) {
  const targetPath = path.join(__dirname, '..', target);
  const sourcePath = path.join(__dirname, '..', source);

  const basename = path.basename(target);
  console.log(`\n📄 Processing: ${basename}`);

  if (!fs.existsSync(sourcePath)) {
    console.log(`   ❌ Source not found`);
    notFound++;
    continue;
  }

  try {
    fs.copyFileSync(sourcePath, targetPath);
    const stats = fs.statSync(targetPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    const sizeKB = (stats.size / 1024).toFixed(1);
    const displaySize = stats.size > 1024 * 1024 ? `${sizeMB}MB` : `${sizeKB}KB`;
    console.log(`   ✅ Copied: ${displaySize}`);
    copied++;
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}`);
  }
}

console.log('\n' + '='.repeat(70));
console.log(`\n📊 Summary:`);
console.log(`   ✅ Copied: ${copied}`);
console.log(`   ❌ Not found: ${notFound}`);
console.log('\n' + '='.repeat(70));
console.log('\n✨ Images copied! Now updating page.tsx...\n');
