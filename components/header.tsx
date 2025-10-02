"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Custom Creations</Link>
        <nav className="hidden md:flex gap-5 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/estimate">Estimate</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a href="tel:+17185550123" className="btn"><Phone className="size-4 mr-2" /> Call</a>
      </div>
    </header>
  );
}
