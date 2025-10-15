"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/src/config/site";

export default function MobileCallBar() {
  const PHONE = SITE.PHONE;

  if (!PHONE) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <a
        href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-100 px-6 py-4 text-base font-bold text-black shadow-2xl border-t border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 active:scale-[0.99] transition"
      >
        <Phone className="size-5" />
        <span>Call {PHONE}</span>
      </a>
    </div>
  );
}
