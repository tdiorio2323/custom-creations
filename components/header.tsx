"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container py-6">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Custom Creations Logo" width={160} height={160} className="rounded-full" />
          </Link>
          <div className="flex items-center gap-8">
            <nav className="flex gap-8 text-lg text-white/90 uppercase tracking-wide">
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
              <Link href="/reviews" className="hover:text-white transition">Reviews</Link>
              <Link href="/estimate" className="hover:text-white transition">Estimate</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </nav>
            <a href="tel:+17185550123" className="btn text-base px-6 py-3 uppercase"><Phone className="size-6 mr-2" /> Call</a>
          </div>
        </div>
      </div>
    </header>
  );
}
