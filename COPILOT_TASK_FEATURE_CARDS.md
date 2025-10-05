# 🤖 GITHUB COPILOT AGENT TASK - Feature Cards Auto Image Setup

## 🎯 **MISSION:** Complete end-to-end feature cards setup with automatic image fetching

**Copy and paste this entire prompt to GitHub Copilot Chat for one-shot execution:**

---

## 📋 **COPILOT AGENT INSTRUCTIONS:**

You are acting on this Next.js Custom Creations auto body shop project. Execute the following tasks **end-to-end** and confirm each step with diffs:

### **TASK 1: Create Image Fetching Script**

Create `scripts/fetch-feature-images.ts` that:

- Reads this array of search queries:

```typescript
const queries = [
  { name: "insurance-friendly", q: "car insurance claim repair handshake professional" },
  { name: "oem-paint-match", q: "auto body shop paint technician spectrophotometer color matching" },
  { name: "warranty-included", q: "luxury car service inspection garage professional lighting" }
];
```

- **Primary**: Uses Unsplash API if `UNSPLASH_ACCESS_KEY` environment variable is set
  - Endpoint: `GET https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=1&orientation=portrait`
  - Headers: `Authorization: Client-ID ${UNSPLASH_ACCESS_KEY}`
  - Downloads the first result's `urls.regular`

- **Fallback**: Uses Unsplash Source if no API key
  - URL pattern: `https://source.unsplash.com/1200x1600/?${encodeURIComponent(q)}`

- Downloads images to `public/feature-cards/${name}.jpg`
- Uses only Node.js built-ins: `node:fs/promises`, `node:https`, `node:path`
- Implements retry logic (3 attempts per image)
- Provides clear console logging for success/failure

### **TASK 2: Add NPM Script**

Add to `package.json` scripts:

```json
"images:fetch": "tsx scripts/fetch-feature-images.ts"
```

### **TASK 3: Create Environment Example**

Create `.env.local.example`:

```
# Unsplash API (optional - falls back to source.unsplash.com)
UNSPLASH_ACCESS_KEY=your_access_key_here
```

### **TASK 4: Execute and Verify**

- Run `npm run images:fetch` to download images
- Verify 3 images saved to `public/feature-cards/`
- Test that feature cards component renders correctly
- Confirm Next.js dev server loads images without errors

### **TASK 5: Create Backup Placeholders**

If any downloads fail, create simple colored placeholder images using Node.js Canvas or generate solid color JPEGs as fallbacks.

---

## 🎨 **IMAGE SPECIFICATIONS:**

- **Aspect Ratio:** 3:4 (portrait, e.g., 1200x1600px)
- **Format:** JPG
- **Quality:** High resolution for automotive/professional theme
- **Content Focus:**
  1. **insurance-friendly**: Professional handshake, car, insurance documents
  2. **oem-paint-match**: Technician with paint matching equipment
  3. **warranty-included**: Premium car service/inspection scene

## ✅ **SUCCESS CRITERIA:**

1. ✅ Script created and executable
2. ✅ 3 images downloaded to correct paths
3. ✅ Feature cards component displays images
4. ✅ No console errors in Next.js dev server
5. ✅ Proper error handling and logging

## 🚀 **DELIVERABLES:**

- Working TypeScript fetching script
- Updated package.json with script
- Environment example file
- 3 downloaded feature card images
- Confirmation that website displays correctly

---

**Execute this task completely and provide a summary of what was accomplished, including any issues encountered and how they were resolved.**
