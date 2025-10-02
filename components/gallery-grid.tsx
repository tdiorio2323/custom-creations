import Image from "next/image";

export type GalleryItem = { src: string; alt?: string };

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (!items.length) return null;

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((item, index) => (
        <div key={`${item.src}-${index}`} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
          <Image
            src={item.src}
            alt={item.alt || `Gallery item ${index + 1}`}
            width={800}
            height={600}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
