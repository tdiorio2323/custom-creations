#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
const slug = process.argv[2];
if (!slug) { console.error("usage: gen-service <slug>"); process.exit(1); }
const dir = join("app","(site)","services",slug);
mkdirSync(dir,{recursive:true});
const file = join(dir,"page.tsx");
if (existsSync(file)) { console.log("exists:", file); process.exit(0); }
const tpl = `export const metadata = { title: "${slug.replace(/-/g," ")}" };
export default function Page() {
  return (
    <main className="px-6 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold capitalize">${slug.replace(/-/g," ")}</h1>
        <p className="text-black/70 max-w-2xl">Premium service overview.</p>
      </header>
      <section className="grid md:grid-cols-2 gap-6">
        <ul className="list-disc pl-5 space-y-1">
          <li>Benefit one</li><li>Benefit two</li><li>Benefit three</li>
        </ul>
        <div className="card p-6">FAQ coming soon.</div>
      </section>
      <a href="/contact" className="btn">Book now</a>
    </main>
  );
}`;
writeFileSync(file, tpl);
console.log("created:", file);
