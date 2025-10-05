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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-br from-black via-gray-950 to-black backdrop-blur-xl shadow-2xl">
      <div className="container">
        {/* Desktop Header */}
        <div className="hidden lg:block py-6">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-transform hover:scale-105">
              <Image
                src="/creation-customs-logo.png"
                alt="Creation Customs logo"
                width={320}
                height={85}
                priority
                className="filter brightness-105"
              />
            </Link>
            <div className="flex items-center gap-8">
              <nav className="flex gap-8 text-base text-white/90 font-medium uppercase tracking-wider">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 px-3 py-2"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/8 to-white/3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                ))}
              </nav>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="group relative bg-gradient-to-r from-white to-gray-100 text-black font-semibold text-sm px-6 py-3 uppercase tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <span className="relative z-10 flex items-center">
                  <Phone className="size-4 mr-2" /> Call {site.phone}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden py-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-transform hover:scale-105">
            <Image
              src="/creation-customs-logo.png"
              alt="Creation Customs logo"
              width={200}
              height={53}
              priority
              className="filter brightness-105"
            />
          </Link>          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 text-white bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 shadow-lg backdrop-blur hover:from-white/20 hover:to-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl shadow-2xl">
            <nav className="py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group block mx-4 px-6 py-4 text-lg text-white font-medium uppercase tracking-wider rounded-xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 hover:from-white/15 hover:to-white/5 hover:border-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
              <div className="px-4 pt-4">
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="group flex items-center justify-center w-full bg-gradient-to-r from-white to-gray-100 text-black font-semibold text-base px-6 py-4 uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60 border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative z-10 flex items-center">
                    <Phone className="size-5 mr-3" /> Call {site.phone}
                  </span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
