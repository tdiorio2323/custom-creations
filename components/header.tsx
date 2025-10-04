"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { site } from "@/lib/seo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Estimate", href: "/estimate" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container">
        {/* Desktop Header */}
        <div className="hidden lg:block py-6">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
              <Image
                src="/logo.png"
                alt="Custom Creations logo"
                width={180}
                height={180}
                priority
              />
            </Link>
            <div className="flex items-center gap-8">
              <nav className="flex gap-8 text-lg text-white/90 uppercase tracking-wide">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {link.label}
                  </Link>
                ))}
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

        {/* Mobile Header */}
        <div className="lg:hidden py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
            <Image
              src="/logo.png"
              alt="Custom Creations logo"
              width={60}
              height={60}
              priority
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-8" /> : <Menu className="size-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur">
            <nav className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg text-white/90 uppercase tracking-wide hover:text-white hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="block mx-4 mt-4 text-center btn text-base px-6 py-3 uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <Phone className="size-5 mr-2 inline" /> Call {site.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
