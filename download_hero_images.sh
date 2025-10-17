#!/bin/bash

# Download Hero Images Script for Custom Creations
# This script downloads high-quality hero images from Unsplash

echo "🖼️  Downloading hero images for Custom Creations..."

# Create backup of current images
echo "📁 Creating backup of current hero images..."
mkdir -p public/creation/backup
cp public/creation/hero-*.webp public/creation/backup/ 2>/dev/null || echo "No existing hero images to backup"

# Download Hero 1: Collision Repair (Automotive Painting)
echo "⬇️  Downloading Hero 1: Collision Repair..."
curl -L "https://unsplash.com/photos/fuoJdzij0tk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8YXV0b21vdGl2ZSUyMHBhaW50aW5nfGVufDB8fHx8MTY5NzU1NDc1Mnww&force=true" \
  -o "public/creation/hero-1-temp.jpg"

# Download Hero 2: Ceramic Coating (Car Detailing)
echo "⬇️  Downloading Hero 2: Ceramic Coating..."
curl -L "https://unsplash.com/photos/LwVJURJz3Ds/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2FyJTIwZGV0YWlsaW5nfGVufDB8fHx8MTY5NzU1NDc1Mnww&force=true" \
  -o "public/creation/hero-2-temp.jpg"

# Download Hero 3: Auto Body Repair Workshop
echo "⬇️  Downloading Hero 3: Auto Body Repair Workshop..."
curl -L "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1920" \
  -o "public/creation/hero-3-temp.jpg"

echo "🔄 Converting images to WebP format..."

# Check if webp tools are available
if command -v cwebp &> /dev/null; then
    # Convert to WebP format with optimization
    cwebp -q 85 -resize 1920 1080 public/creation/hero-1-temp.jpg -o public/creation/hero-1.webp
    cwebp -q 85 -resize 1920 1080 public/creation/hero-2-temp.jpg -o public/creation/hero-2.webp
    cwebp -q 85 -resize 1920 1080 public/creation/hero-3-temp.jpg -o public/creation/hero-3.webp
    
    # Clean up temp files
    rm public/creation/hero-*-temp.jpg
    
    echo "✅ Hero images successfully downloaded and converted to WebP!"
    echo "📊 Image sizes:"
    ls -lh public/creation/hero-*.webp
else
    echo "⚠️  WebP tools not found. Installing via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install webp
        # Retry conversion
        cwebp -q 85 -resize 1920 1080 public/creation/hero-1-temp.jpg -o public/creation/hero-1.webp
        cwebp -q 85 -resize 1920 1080 public/creation/hero-2-temp.jpg -o public/creation/hero-2.webp
        cwebp -q 85 -resize 1920 1080 public/creation/hero-3-temp.jpg -o public/creation/hero-3.webp
        rm public/creation/hero-*-temp.jpg
        echo "✅ Hero images successfully downloaded and converted!"
    else
        echo "⚠️  Please install webp tools manually:"
        echo "   brew install webp"
        echo "📁 JPEG files saved as hero-*-temp.jpg for manual conversion"
    fi
fi

echo ""
echo "🎯 Next steps:"
echo "1. Check the new hero images at http://localhost:3000"
echo "2. If you don't like any image, restore from backup: cp public/creation/backup/hero-*.webp public/creation/"
echo "3. Commit the changes when you're happy: git add public/creation/hero-*.webp"
echo ""
echo "📝 Image details:"
echo "• Hero 1: Professional collision repair (spray painting)"
echo "• Hero 2: Premium ceramic coating application"
echo "• Hero 3: Auto body repair workshop"