"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/seo";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container py-6">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full">
            <div className="rounded-full p-1 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 shadow-xl">
              <Image
                src="/logo.png"
                alt="Custom Creations logo"
                width={160}
                height={160}
                className="rounded-full"
                loading="lazy"
              />
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <nav className="flex gap-8 text-lg text-white/90 uppercase tracking-wide">
              <Link href="/services" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Services</Link>
              <Link href="/portfolio" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Portfolio</Link>
              <Link href="/reviews" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Reviews</Link>
              <Link href="/estimate" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Estimate</Link>
              <Link href="/location" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Location</Link>
              <Link href="/contact" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Contact</Link>
            </nav>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="btn text-base px-6 py-3 uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <Phone className="size-6 mr-2" /> Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
