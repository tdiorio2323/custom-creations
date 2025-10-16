"use client";

import { Phone } from "lucide-react";

export function FloatingPhone() {
  return (
    <a
      href="tel:+17187998345"
      aria-label="Call Creation Customs at 1-718-799-8345"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:shadow-white/20"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
