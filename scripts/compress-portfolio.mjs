#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const inDir = path.resolve("public/portfolio");

if (!fs.existsSync(inDir)) {
  console.log("No public/portfolio directory. Skipping.");
  process.exit(0);
}

const files = fs.readdirSync(inDir).filter(f => /\.(jpe?g|png)$/i.test(f));

console.log(`Found ${files.length} images to compress...`);

for (const f of files) {
  const src = path.join(inDir, f);
  const stats = fs.statSync(src);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

  // Skip if already under 500KB
  if (stats.size < 500 * 1024) {
    console.log(`✓ ${f} (${sizeMB}MB) - already optimized, skipping`);
    continue;
  }

  const out = path.join(inDir, f.replace(/\.(png|jpe?g)$/i, ".jpg"));

  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out + ".tmp");

  // Replace original
  fs.renameSync(out + ".tmp", out);

  // Remove original if it was PNG
  if (!/\.jpe?g$/i.test(src) && src !== out) {
    fs.rmSync(src);
  }

  const newStats = fs.statSync(out);
  const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
  const saved = ((1 - newStats.size / stats.size) * 100).toFixed(0);

  console.log(`✓ ${path.basename(out)}: ${sizeMB}MB → ${newSizeMB}MB (saved ${saved}%)`);
}

console.log("✓ Compression complete!");

