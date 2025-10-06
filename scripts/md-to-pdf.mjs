#!/usr/bin/env node
import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

const IN_DIR  = "public/pdfs";
const OUT_DIR = "public/pdfs";

if (!fs.existsSync(IN_DIR)) process.exit(0);

for (const f of fs.readdirSync(IN_DIR)) {
  if (!/\.md$/i.test(f)) continue;
  const base = f.replace(/\.md$/i, "");
  const out = path.join(OUT_DIR, `${base}.pdf`);
  const md = fs.readFileSync(path.join(IN_DIR, f), "utf8");

  const doc = new PDFDocument({ size: "LETTER", margin: 54 });
  const stream = fs.createWriteStream(out);
  doc.pipe(stream);

  // very light MD: # H1, ## H2, bullets
  md.split(/\r?\n/).forEach(line => {
    if (/^#\s+/.test(line)) { doc.moveDown(0.5).fontSize(22).text(line.replace(/^#\s+/, ""), { bold: true }); }
    else if (/^##\s+/.test(line)) { doc.moveDown(0.3).fontSize(16).text(line.replace(/^##\s+/, "")); }
    else if (/^\s*[-*]\s+/.test(line)) { doc.fontSize(12).text("• " + line.replace(/^\s*[-*]\s+/, "")); }
    else { doc.fontSize(12).text(line || " "); }
  });

  doc.end();
  await new Promise(r => stream.on("finish", r));
  console.log(`built: ${out}`);
}
