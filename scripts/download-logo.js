const fs = require('fs');
const path = require('path');
const https = require('https');

const logoUrl = 'https://images.squarespace-cdn.com/content/v1/57203f5c37013b324b5169ba/1475027295453-9TWXWIXEHEMSDA39ROYP/Im+logo2.png?format=1500w';
const outputPath = path.join(__dirname, '../public/images/logo.png');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log('📥 Downloading logo...');

https.get(logoUrl, (response) => {
  if (response.statusCode === 200) {
    const file = fs.createWriteStream(outputPath);
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('✅ Logo downloaded successfully to /public/images/logo.png');
    });
  } else {
    console.error(`❌ Failed to download logo: ${response.statusCode}`);
  }
}).on('error', (err) => {
  console.error('❌ Error downloading logo:', err.message);
});
