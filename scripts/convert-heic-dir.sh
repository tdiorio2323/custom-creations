#!/bin/bash

# Convert HEIC images to JPG format in a specified directory
# Usage: ./convert-heic-dir.sh <directory>

TARGET_DIR="${1:-.}"
CONVERTED=0
SKIPPED=0

echo "🔄 Converting HEIC images to JPG..."
echo "Looking in: $TARGET_DIR"
echo ""

cd "$TARGET_DIR" || exit 1

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "❌ Error: ImageMagick is not installed"
    echo "Install it with: brew install imagemagick"
    exit 1
fi

# Convert HEIC files
shopt -s nullglob
for file in *.HEIC *.heic; do
    # Skip if no files found
    [ -e "$file" ] || continue

    # Get filename without extension
    basename="${file%.*}"
    output="${basename}.jpg"

    # Skip if JPG already exists
    if [ -f "$output" ]; then
        echo "⏭️  Skipping $file (JPG exists)"
        ((SKIPPED++))
        continue
    fi

    echo "🖼️  Converting: $file → $output"

    # Try magick command first (newer ImageMagick)
    if command -v magick &> /dev/null; then
        magick "$file" -quality 85 "$output"
    else
        convert "$file" -quality 85 "$output"
    fi

    if [ $? -eq 0 ]; then
        ((CONVERTED++))
    else
        echo "❌ Failed to convert $file"
    fi
done

echo ""
echo "✅ Conversion complete!"
echo "   Converted: $CONVERTED files"
echo "   Skipped: $SKIPPED files"
