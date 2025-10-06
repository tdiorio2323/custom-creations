#!/usr/bin/env node
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const ORIGIN = process.env.BASE || "http://localhost:3000";
const seen = new Set();
const bad = [];

async function get(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, text: await res.text() };
}
function absolutize(href) {
  if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return null;
  if (href.startsWith("http")) return href.startsWith(ORIGIN) ? href : null;
  if (href.startsWith("#")) return null;
  return ORIGIN + (href.startsWith("/") ? href : `/${href}`);
}
function extractLinks(html) {
  const hrefs = [];
  const rx = /<a[^>]+href\s*=\s*["']([^"']+)["']/gi;
  let m; while ((m = rx.exec(html))) hrefs.push(m[1]);
  return hrefs;
}
async function crawl(path="/") {
  const url = ORIGIN + path;
  if (seen.has(url)) return;
  seen.add(url);
  const { status, text } = await get(url);
  if (status >= 400) bad.push({ url, status });
  for (const href of extractLinks(text)) {
    const abs = absolutize(href);
    if (abs && !seen.has(abs)) {
      const next = abs.replace(ORIGIN, "");
      await crawl(next);
    }
  }
}
const startRoutes = ["/","/about","/blog","/booking","/contact","/estimate","/faq","/insurance-claims","/location","/portfolio","/reviews","/services"];
for (const r of startRoutes) await crawl(r);
if (bad.length) {
  console.log("Broken internal routes:");
  bad.forEach((b,i)=>console.log(`${i+1}. ${b.url} -> ${b.status}`));
  process.exit(1);
}
console.log("✓ No internal 4xx/5xx found from seed routes.");
