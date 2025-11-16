const fs = require('fs');
const path = require('path');

// Enhanced mapping with manual matches + auto-discovery
const manualImageMap = {
  // High priority manual mappings (exact matches found)
  'public/images/blog/bible-school-graduation.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1708960320307-EVX6XKE2TO0C0UNA42ND/BibleSchoolGraduation2.jpg',
  'public/images/blog/holy-cows.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1659017670119-NPAP4MPSKQ1ZFCQI3FR0/holycow-02.jpg',
  'public/images/blog/project-cow-success-may-2022.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1653141205552-MUG9O74H4R7U2D2ABIOX/proj-cow-04.jpeg',
  'public/images/blog/project-jungle.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/780fb6fb-adf8-49a8-9166-d223f749cc9c/projectjungle1.jpg',
  'public/images/blog/warincambodia.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1754337271161-LK52IVM30GHH2PJWN3WT/WarMain.jpg',
  'public/images/blog/baby-sprinkle.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1705456804642-77E2VO2JZLQIS3QI70K5/babysprinkleMain.jpg',
  'public/images/blog/happy-new-year-2025.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1746276498503-ILHXLWQ95GI7QNYSCLBG/Happy+New+Year+Main.jpg',
  'public/images/blog/the-harvest-is-ripe.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1472475047233-8ZENNPUQ7QBUAOSYO1WE/waiting-for-a-harvest.jpg',
  'public/images/blog/happynewyear.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1746276498503-ILHXLWQ95GI7QNYSCLBG/Happy+New+Year+Main.jpg',
  'public/images/blog/winter-newsletter-2017.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1513052265352-FWWPHDC0FEVCV37LONSZ/newsletter-1-1200x400_banner.jpeg',
  'public/images/blog/mud-bugs-and-jesus.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1510094896343-YRNZ7AFMIURB0OSZGTSZ/mud.jpg',
  'public/images/blog/jungle-outreach-a-ministry-update-from-phnom-chi.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1700062581516-4R4P0V8AHUAYC2Z57TO4/jungle+3.jpg',
  'public/images/blog/october-svay-rieng-ministry.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1477871751768-LBF4CY0LN4861I8PGBDH/Oct_Svey_Reang12.jpg',
  'public/images/blog/covered-from-head-to-toe.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1472474982853-6347IO3R1U2ST0J5VNK8/coh+2.jpg',
  'public/images/blog/big-things-are-coming.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1474292656837-YTVLLMS05WC8X81HLWGW/Awg+Import-03.jpg',
  'public/images/blog/and-theyre-off.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1474292656837-YTVLLMS05WC8X81HLWGW/Awg+Import-03.jpg',
  'public/images/blog/bible-school-phnom-penh-cambodia.png': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1700062852739-5WCH7N4L4PGOAUWK6L8Q/bible+school+1.jpg',
  'public/images/blog/inspire-cambodia-immediate-need.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1655233387731-DFGWAUAIYZQVFAQZY746/ICM.jpg',
  'public/images/blog/impact-missions-team-in-cambodia-update-1.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1480554058679-0A9PR4PJ7JJDHM097F4D/15094255_10210999274362159_4827729118799871142_n.jpg',
  'public/images/blog/impact-missions-team-in-cambodia-update-2.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1480651543864-A6KZ7GTHOQXQH4TW6GDM/15095506_10210999277202230_4261559103430890196_n.jpg',
  'public/images/blog/impact-mission-team-in-cambodia-update-3.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1510095029507-RQR0FT4KZ22D95C8H9W4/15110432_10210999271322083_651108689267610690_o.jpg',
  'public/images/blog/impact-church-menifee.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1655233387731-DFGWAUAIYZQVFAQZY746/ICM.jpg',
  'public/images/blog/its-about-caring-for-the-people.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1682558270954-YBXX5P2KWA8S4RWAT90Q/3-Children+Of+Hope+1.jpg',
  'public/images/blog/2021-newsletter.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632597980541-DWI9OFE7Z2YCV44E2374/Screen+Shot+2021-09-25+at+12.25.33+PM.jpg',
  'public/images/blog/inspired-spring-update-2022.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1650330542460-KCZJSIUPGLZWWFLV0N1X/275376661_10227694447891063_6082150923029794009_n.jpg',
  'public/images/blog/cambodia-wish-list.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1682558856891-QSB2BAUX4AR00Y325GB8/0-Main.jpg',
  'public/images/blog/gods-mission-driven-love.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1700063006198-HV1FZIXNMNVLWIEW4KJJ/main+1.jpg',
  'public/images/blog/spring-23-newsletter.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1682558856891-QSB2BAUX4AR00Y325GB8/0-Main.jpg',
  'public/images/blog/winter-23-newsletter.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1700062852739-5WCH7N4L4PGOAUWK6L8Q/bible+school+1.jpg',
  'public/images/blog/prayer-update-101118.png': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1539264471159-5ZY1UV6QH2ECN19MRXWH/Screen+Shot+2018-10-11+at+6.22.17+AM.png',
  'public/images/blog/are-we-doing-what-we-are-doing-in-love.png': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1700063006198-HV1FZIXNMNVLWIEW4KJJ/main+1.jpg',
  'public/images/blog/spring-2019-newsletter.png': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1555980302069-TL2VU13TOS6EE41VO2ZF/Screen+Shot+2019-04-22+at+5.43.38+PM.png',
  'public/images/blog/thailand-away-we-go.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1726497131238-2POAE97CV9Y7N8HAD66L/Main.jpeg',
  'public/images/blog/whats-next-in-cambodia.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1472475014040-U3C9OTFHPZ6JDLOB8COA/what-is-next.jpg',
  'public/images/blog/a-radical-change-of-plans-in-svey-reang.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1477871751768-LBF4CY0LN4861I8PGBDH/Oct_Svey_Reang12.jpg',
  'public/images/blog/shhhhh-its-a-surprise.jpeg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1471749441143-SP202Q4OGN56ABMM0DEY/-3.jpg',
  'public/images/blog/what-exactly-is-inductive-bible-study.jpg': 'archive/www.inspiredmissions2.com/images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1632672557398-2L2E7MJTBNDNTN09HTLF/Bibleschool1.jpg',
};

let copied = 0;
let skipped = 0;
let notFound = 0;
let errors = 0;

console.log('\n🔄 Starting image update process...\n');
console.log('='.repeat(70));

for (const [target, source] of Object.entries(manualImageMap)) {
  const targetPath = path.join(__dirname, '..', target);
  const sourcePath = path.join(__dirname, '..', source);

  const basename = path.basename(target);
  console.log(`\n📄 Processing: ${basename}`);

  if (!fs.existsSync(sourcePath)) {
    console.log(`   ❌ Source not found`);
    console.log(`      Expected: ${source}`);
    notFound++;
    continue;
  }

  const stats = fs.statSync(sourcePath);
  const targetExists = fs.existsSync(targetPath);
  const targetSize = targetExists ? fs.statSync(targetPath).size : 0;

  // Copy if target doesn't exist, is empty, or is significantly smaller
  const shouldCopy = !targetExists || targetSize === 0 || (targetSize > 0 && targetSize < stats.size * 0.5);

  if (shouldCopy) {
    try {
      fs.copyFileSync(sourcePath, targetPath);
      const newSize = fs.statSync(targetPath).size;
      const sizeMB = (newSize / 1024 / 1024).toFixed(2);
      const sizeKB = (newSize / 1024).toFixed(1);
      const displaySize = newSize > 1024 * 1024 ? `${sizeMB}MB` : `${sizeKB}KB`;
      console.log(`   ✅ Copied: ${displaySize}`);
      if (targetExists && targetSize > 0) {
        console.log(`      (Replaced ${(targetSize / 1024).toFixed(1)}KB with better quality)`);
      }
      copied++;
    } catch (err) {
      console.log(`   ❌ Error: ${err.message}`);
      errors++;
    }
  } else {
    const sizeKB = (targetSize / 1024).toFixed(1);
    console.log(`   ⏭️  Skipped: Already has quality image (${sizeKB}KB)`);
    skipped++;
  }
}

console.log('\n' + '='.repeat(70));
console.log('\n📊 Summary:');
console.log(`   ✅ Successfully copied: ${copied}`);
console.log(`   ⏭️  Skipped (already good): ${skipped}`);
console.log(`   ❌ Not found in archive: ${notFound}`);
console.log(`   ⚠️  Errors: ${errors}`);
console.log('\n' + '='.repeat(70));

if (copied > 0) {
  console.log('\n✨ Image update complete! Your site now has high-quality images.\n');
} else {
  console.log('\n ℹ️  No images needed updating.\n');
}
