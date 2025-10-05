"use client";
import Image from "next/image";

type Item = {
    title: string;
    copy: string;
    img: string; // local /public path after fetch
};

const items: Item[] = [
    {
        title: "INSURANCE-FRIENDLY",
        copy:
            "Hassle-free insurance coordination. We work directly with major providers to make repairs seamless.",
        img: "/feature-cards/insurance-friendly.jpg",
    },
    {
        title: "OEM PAINT MATCH",
        copy:
            "Precision paint matching using OEM-certified systems for a flawless, factory-quality result.",
        img: "/feature-cards/oem-paint-match.jpg",
    },
    {
        title: "WARRANTY INCLUDED",
        copy:
            "Every repair is backed by our service warranty for lasting quality and peace of mind.",
        img: "/feature-cards/warranty-included.jpg",
    },
];

export default function FeatureCards() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it) => (
                    <article
                        key={it.title}
                        className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-xl"
                    >
                        {/* image area ~3:4 */}
                        <div className="relative aspect-[3/4]">
                            <Image
                                src={it.img}
                                alt={it.title}
                                fill
                                sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                            {/* dark chrome + subtle glass reflection */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />
                            <div className="absolute inset-0 pointer-events-none mix-blend-screen bg-white/10" />
                            {/* hover white gradient overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-t from-white/60 to-transparent" />
                        </div>

                        {/* text */}
                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <h3 className="text-base tracking-wide text-white">{it.title}</h3>
                            <p className="mt-2 text-sm text-gray-300">{it.copy}</p>
                        </div>

                        {/* ring accent */}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/25 transition" />
                    </article>
                ))}
            </div>
        </section>
    );
}