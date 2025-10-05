import fs from "fs";
import path from "path";
import GalleryGrid from "@/components/gallery-grid";

export const metadata = { title: "Portfolio" };

function loadPortfolioItems() {
  try {
    const directory = path.join(process.cwd(), "public/images/portfolio");
    const files = fs.readdirSync(directory).filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
    return files.map(file => ({
      src: `/images/portfolio/${file}`,
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
        <h1 className="text-xl font-semibold text-white">Portfolio Coming Soon</h1>
        <p>
          TODO: Drop high-quality before/after images into <code>public/images/portfolio</code> using the naming pattern
          <code> service-vehicle-01.jpg</code>.
        </p>
        <p>
          Suggested shots: collision repair, ceramic coating gloss, and PPF installations. Minimum 6 images recommended for launch.
        </p>
      </div>
    );
  }

  return <GalleryGrid items={items} />;
}
