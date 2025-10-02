import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10">
      <div className="container py-8 text-sm text-white/80 space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-white">{site.name}</div>
            <div>{`${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`}</div>
            <div>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {site.email}
              </a>
            </div>
            <div className="mt-3">
              <div className="font-semibold text-xs uppercase tracking-wide text-white/60">Hours</div>
              <ul className="mt-1 space-y-1 text-white/60">
                <li>Mon–Fri: 8am – 6pm</li>
                <li>Sat: 9am – 4pm</li>
                <li>Sun: By appointment</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-2">
            <Link href="/services" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Services</Link>
            <Link href="/estimate" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Estimate</Link>
            <Link href="/booking" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Booking</Link>
            <Link href="/faq" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">FAQ</Link>
          </div>
          <div className="text-white/60 space-y-3">
            <div className="flex gap-3">
              <a href="#" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Instagram</a>
              <a href="#" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Facebook</a>
              <a href="#" className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">YouTube</a>
            </div>
            <div>© <span>{new Date().getFullYear()}</span> {site.name}. All rights reserved.</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/10 p-2 border border-white/10">
              <Image
                src="/logo.png"
                alt="Custom Creations emblem"
                width={72}
                height={72}
                className="rounded-full"
                loading="lazy"
              />
            </div>
            <div>
              <div className="font-semibold text-white">{site.name}</div>
              <div className="text-white/60 text-xs">Precision auto body, ceramic coating, and PPF.</div>
            </div>
          </div>
          <div className="md:justify-self-end w-full">
            <iframe
              title="Custom Creations Map"
              loading="lazy"
              className="w-full md:w-72 h-48 rounded-2xl border border-white/10"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street} ${site.address.city} ${site.address.region} ${site.address.postal}`)}&output=embed`}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
