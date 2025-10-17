# Hero Image Downloads - Custom Creations

## 🎯 **3 Professional Hero Images for Your Homepage**

### **Hero 1: Collision Repair** 
**Replace**: `public/creation/hero-1.webp`
**Unsplash Photo ID**: `fuoJdzij0tk`
**Direct Link**: https://unsplash.com/photos/fuoJdzij0tk
**Description**: Professional mechanic spray painting car parts in protective gear
**Perfect for**: Expert collision repair messaging

**Manual Download Steps**:
1. Visit: https://unsplash.com/photos/fuoJdzij0tk
2. Click "Download free" → Select "Original size" 
3. Save as `hero-1.jpg` to your Downloads folder
4. Use an image converter to resize to 1920x1080 and convert to WebP
5. Replace `/public/creation/hero-1.webp`

---

### **Hero 2: Ceramic Coating**
**Replace**: `public/creation/hero-2.webp`
**Unsplash Photo ID**: `LwVJURJz3Ds`
**Direct Link**: https://unsplash.com/photos/LwVJURJz3Ds
**Description**: Professional car detailing - worker polishing vehicle with microfiber cloth
**Perfect for**: Premium ceramic coating messaging

**Manual Download Steps**:
1. Visit: https://unsplash.com/photos/LwVJURJz3Ds
2. Click "Download free" → Select "Original size"
3. Save as `hero-2.jpg` to your Downloads folder
4. Use an image converter to resize to 1920x1080 and convert to WebP
5. Replace `/public/creation/hero-2.webp`

---

### **Hero 3: Fleet Services**
**Replace**: `public/creation/hero-3.webp`
**Unsplash Photo ID**: `_aPqIbFw470`
**Direct Link**: https://unsplash.com/photos/_aPqIbFw470
**Description**: Professional truck driver standing in front of modern truck fleet
**Perfect for**: Commercial fleet services messaging

**Manual Download Steps**:
1. Visit: https://unsplash.com/photos/_aPqIbFw470
2. Click "Download free" → Select "Original size"
3. Save as `hero-3.jpg` to your Downloads folder  
4. Use an image converter to resize to 1920x1080 and convert to WebP
5. Replace `/public/creation/hero-3.webp`

---

## 🛠️ **Quick Image Processing Tips**

### **Option 1: Online Converter (Easiest)**
1. Download JPEGs from Unsplash links above
2. Go to: https://convertio.co/jpg-webp/
3. Upload each image
4. Set quality to 85%
5. Download converted WebP files
6. Rename to `hero-1.webp`, `hero-2.webp`, `hero-3.webp`
7. Replace files in `/public/creation/`

### **Option 2: Using Mac Preview (Built-in)**
1. Download JPEGs from Unsplash
2. Open each in Preview app
3. Tools → Adjust Size → Set to 1920x1080
4. File → Export → Format: WebP, Quality: 85%
5. Save to `/public/creation/` with correct names

### **Option 3: Using Terminal (Advanced)**
```bash
# Install webp tools
brew install webp

# Convert and resize each image
cwebp -q 85 -resize 1920 1080 ~/Downloads/hero-1.jpg -o public/creation/hero-1.webp
cwebp -q 85 -resize 1920 1080 ~/Downloads/hero-2.jpg -o public/creation/hero-2.webp  
cwebp -q 85 -resize 1920 1080 ~/Downloads/hero-3.jpg -o public/creation/hero-3.webp
```

---

## 🎨 **Alternative Image Suggestions** (Backup Options)

If the above images don't match your brand, try these alternatives:

### **Collision Repair Alternatives**:
- `XWfcWEx8dko` - Car detailing with sandpaper prep work
- `kUbOatYhsiE` - Mechanic working with automotive tools

### **Ceramic Coating Alternatives**:
- `HbGRew5BTZ8` - Hand polishing luxury white car hood
- `PyKbJjZa8bA` - Car wash with foam and high-pressure spray

### **Fleet Services Alternatives**:
- `CHlrfK4c0wA` - New and pre-owned semi trucks for sale
- `IuhWU2Q-5G0` - Multiple big rig trucks in parking lot

---

## ✅ **Verification Checklist**

After downloading and replacing:
- [ ] Images are 1920x1080 resolution (16:9 aspect ratio)  
- [ ] File size between 50-200KB each (current are only 6-7KB)
- [ ] Images are in WebP format
- [ ] Files are named exactly: `hero-1.webp`, `hero-2.webp`, `hero-3.webp`
- [ ] Files are in `/public/creation/` directory
- [ ] Dev server shows new images at http://localhost:3000
- [ ] Images match your brand messaging

---

## 📞 **Need Help?**

If you have trouble with the image processing:
1. Download the JPEGs from Unsplash first
2. Use the online converter (Option 1) - it's the simplest
3. Make sure to maintain 16:9 aspect ratio (1920x1080)
4. Test on your dev server before finalizing

All images are royalty-free from Unsplash and perfect for commercial use!