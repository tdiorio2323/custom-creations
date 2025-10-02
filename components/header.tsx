"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Custom Creations Logo" width={40} height={40} className="rounded-full" />
          <span className="font-semibold tracking-tight text-white">Custom Creations</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-sm text-white/90">
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link href="/reviews" className="hover:text-white transition">Reviews</Link>
          <Link href="/estimate" className="hover:text-white transition">Estimate</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>
        <a href="tel:+17185550123" className="btn"><Phone className="size-4 mr-2" /> Call</a>
      </div>
    </header>
  );
}
