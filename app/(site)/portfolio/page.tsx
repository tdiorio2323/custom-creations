import fs from "fs";
import path from "path";
import GalleryGrid from "@/components/gallery-grid";

export const metadata = { title: "Portfolio" };

function loadPortfolioItems() {
  try {
    const directory = path.join(process.cwd(), "public/portfolio");
    const files = fs.readdirSync(directory).filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
    return files.map(file => ({
      src: `/portfolio/${file}`,
      alt: `Custom Creations portfolio vehicle ${file.replace(/[-_]/g, " ")}`
    }));
  } catch (error) {
    return [] as { src: string; alt: string }[];
  }
}

export default function Portfolio() {
  const items = loadPortfolioItems();

  if (!items.length) {
    return (
      <div className="card p-6 space-y-3 text-white/70">
        <h1 className="text-xl font-semibold text-white">Our Work</h1>
        <p>No portfolio images have been uploaded yet.</p>
        <p>To add images, upload them to the <code>public/portfolio</code> directory.</p>
        <a href="/contact" className="btn">Upload Work</a>
      </div>
    );
  }

  return <GalleryGrid items={items} />;
}
