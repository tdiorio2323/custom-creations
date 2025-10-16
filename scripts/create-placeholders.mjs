#!/usr/bin/env node
import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const outputDir = 'public/creation';

// Create output directory
await mkdir(outputDir, { recursive: true });

// Image configurations
const images = [
  // Hero images
  { name: 'hero-1.webp', width: 1920, height: 1080, text: 'COLLISION REPAIR', color: '#1a1a1a' },
  { name: 'hero-2.webp', width: 1920, height: 1080, text: 'CERAMIC COATING', color: '#0d0d0d' },
  { name: 'hero-3.webp', width: 1920, height: 1080, text: 'FLEET SERVICES', color: '#262626' },

  // Before/After images
  { name: 'before-1.webp', width: 800, height: 600, text: 'BEFORE', color: '#333333' },
  { name: 'after-1.webp', width: 800, height: 600, text: 'AFTER', color: '#444444' },
  { name: 'before-2.webp', width: 800, height: 600, text: 'BEFORE', color: '#2a2a2a' },
  { name: 'after-2.webp', width: 800, height: 600, text: 'AFTER', color: '#3a3a3a' },
  { name: 'before-3.webp', width: 800, height: 600, text: 'BEFORE', color: '#1f1f1f' },
  { name: 'after-3.webp', width: 800, height: 600, text: 'AFTER', color: '#2f2f2f' },

  // Review vehicle thumbnails
  { name: 'review-bmw.webp', width: 200, height: 200, text: 'BMW', color: '#1a1a1a' },
  { name: 'review-tesla.webp', width: 200, height: 200, text: 'TESLA', color: '#0d0d0d' },
  { name: 'review-mercedes.webp', width: 200, height: 200, text: 'MB', color: '#262626' },
  { name: 'review-honda.webp', width: 200, height: 200, text: 'HONDA', color: '#333333' },
  { name: 'review-porsche.webp', width: 200, height: 200, text: 'PORSCHE', color: '#1f1f1f' },
  { name: 'review-audi.webp', width: 200, height: 200, text: 'AUDI', color: '#2a2a2a' },
];

// Create SVG and convert to WebP
for (const img of images) {
  const svg = `
    <svg width="${img.width}" height="${img.height}">
      <rect width="100%" height="100%" fill="${img.color}"/>
      <text
        x="50%"
        y="50%"
        font-family="Arial, sans-serif"
        font-size="${img.width > 500 ? '48' : '24'}"
        font-weight="bold"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle"
      >${img.text}</text>
    </svg>
  `;

  const outputPath = join(outputDir, img.name);

  await sharp(Buffer.from(svg))
    .webp({ quality: 80 })
    .toFile(outputPath);

  console.log(`✅ Created ${img.name}`);
}

console.log('\n✨ All placeholder images created successfully!');
console.log('\n📝 Next steps:');
console.log('   1. Replace placeholder images in public/creation/ with actual photos');
console.log('   2. Ensure images are optimized webp format');
console.log('   3. Run pnpm build to test the production build');
