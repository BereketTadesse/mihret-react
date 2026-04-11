/**
 * compress-images.cjs
 * Compresses all PNG/JPG/JPEG images in the public folder using sharp.
 * Originals are overwritten with compressed versions.
 * Run with: node compress-images.cjs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');

function getAllImages(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllImages(fullPath, results);
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function compress(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = fs.statSync(filePath).size;
  const tmpPath = filePath + '.tmp';

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();

    // Resize if wider than 1920px (keeps aspect ratio)
    const resized = meta.width > 1920 ? img.resize(1920) : img;

    if (ext === '.png') {
      await resized.png({ quality: 80, compressionLevel: 9 }).toFile(tmpPath);
    } else {
      await resized.jpeg({ quality: 80, mozjpeg: true }).toFile(tmpPath);
    }

    fs.renameSync(tmpPath, filePath);
    const newSize = fs.statSync(filePath).size;
    const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
    console.log(`✓ ${path.relative(PUBLIC_DIR, filePath).padEnd(40)} ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB  (-${saved}%)`);
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    console.error(`✗ ERROR on ${filePath}: ${err.message}`);
  }
}

async function main() {
  const images = getAllImages(PUBLIC_DIR);
  console.log(`\nFound ${images.length} image(s) to compress...\n`);
  let totalBefore = 0;
  let totalAfter = 0;
  for (const img of images) {
    totalBefore += fs.statSync(img).size;
    await compress(img);
    totalAfter += fs.statSync(img).size;
  }
  console.log(`\n✅ Done! Total: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (saved ${((totalBefore-totalAfter)/1024/1024).toFixed(1)}MB)\n`);
}

main();
