// Node 18+ (global fetch). No deps.
import { mkdir, writeFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const streamPipeline = promisify(pipeline);

type Q = { name: string; q: string };
const queries: Q[] = [
    { name: "insurance-friendly", q: "car insurance claim repair handshake" },
    { name: "oem-paint-match", q: "auto body shop paint technician spectrophotometer" },
    { name: "warranty-included", q: "luxury car service inspection garage lighting" },
];

const DIR = "public/feature-cards";
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;

async function fetchUnsplash(q: string): Promise<string | null> {
    if (!UNSPLASH_KEY) return null;
    const url = new URL("https://api.unsplash.com/search/photos");
    url.searchParams.set("query", q);
    url.searchParams.set("per_page", "1");
    url.searchParams.set("orientation", "portrait");

    const res = await fetch(url, {
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const first = data?.results?.[0];
    return first?.urls?.regular || first?.urls?.full || null;
}

async function fetchFallback(q: string): Promise<string> {
    // Use specific high-quality images as fallbacks
    const fallbackImages = {
        "car insurance claim repair handshake": "https://living.geico.com/wp-content/uploads/22_883186328_SOC_PHO_GEICO_Living_Auto_Policy_Paperwork_600x400.jpg",
        "auto body shop paint technician spectrophotometer": "https://www.autobody-review.com/images/groups/0/article/MCFvIFtPq0M6sGpXMliI.jpg",
        "luxury car service inspection garage lighting": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=1600&fit=crop&crop=center"
    };

    return fallbackImages[q as keyof typeof fallbackImages] || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=1600&fit=crop&crop=center";
}

async function download(url: string, outPath: string) {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok || !res.body) throw new Error(`Download failed: ${res.status} ${url}`);
    await streamPipeline(res.body as any, createWriteStream(outPath));
}

async function run() {
    await mkdir(DIR, { recursive: true });

    for (const { name, q } of queries) {
        const out = `${DIR}/${name}.jpg`;
        let attempt = 0;
        let lastErr: any;

        while (attempt < 3) {
            try {
                const primary = (await fetchUnsplash(q)) ?? (await fetchFallback(q));
                await download(primary, out);
                console.log(`✓ ${name} -> ${out}`);
                break;
            } catch (err) {
                lastErr = err;
                attempt++;
                await new Promise((r) => setTimeout(r, 300 * attempt));
            }
        }
        if (attempt === 3) {
            console.error(`✗ ${name} failed`, lastErr);
        }
    }

    // optional tiny marker file for cache busting if needed
    await writeFile(`${DIR}/.done`, new Date().toISOString());
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});