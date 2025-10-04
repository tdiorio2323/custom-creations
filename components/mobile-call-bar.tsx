"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/seo";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <a
        href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-base font-bold text-black shadow-2xl border-t border-amber-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
      >
        <Phone className="size-5" />
        <span>Call {site.phone}</span>
      </a>
    </div>
  );
}
