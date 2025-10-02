"use client";

import { site } from "@/lib/seo";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <a
        href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
        className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-black shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
      >
        Call {site.phone}
      </a>
    </div>
  );
}
