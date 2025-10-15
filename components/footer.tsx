import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/seo";
import { SITE } from "@/src/config/site";
import CTAs from "@/components/cta-buttons";

type LinkItem = { label: string; href: string; external?: boolean };

const nav: LinkItem[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Estimate", href: "/estimate" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

const social: LinkItem[] = [
  { label: "Instagram", href: SITE.SOCIAL.INSTAGRAM, external: !!SITE.SOCIAL.INSTAGRAM },
  { label: "Facebook", href: SITE.SOCIAL.FACEBOOK, external: !!SITE.SOCIAL.FACEBOOK },
  { label: "YouTube", href: SITE.SOCIAL.YOUTUBE, external: !!SITE.SOCIAL.YOUTUBE },
];

const Footer: FC = () => {
  return (
    <footer className="bg-[#0b0b0b] text-zinc-200 border-t border-zinc-800">
      {/* top strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-10 md:grid-cols-12">
        {/* Brand + blurb */}
        <div className="md:col-span-5 space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={site.name}
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="text-lg font-semibold tracking-wide">{site.name}</div>
          </div>
          <p className="text-sm text-zinc-400 leading-6">
            Precision auto body, ceramic coating, and PPF. I-CAR certified. Insurance-friendly
            cycle times without cutting corners.
          </p>

          {/* CTA row */}
          <CTAs compact className="mt-2" />
        </div>

        {/* Quick links */}
        <nav className="md:col-span-3">
          <h3 className="text-sm font-semibold text-zinc-300 mb-3">Navigate</h3>
          <ul className="space-y-2">
            {nav.map((i) => (
              <li key={i.label}>
                <Link
                  href={i.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + Hours */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold text-zinc-300 mb-3">Visit</h3>
          <address className="not-italic text-sm text-zinc-400">
            {site.address.street}, {site.address.city}, {site.address.region} {site.address.postal}
            <br />
            Mon–Fri: 8am–6pm · Sat: 9am–4pm · Sun: Appt only
          </address>

          {/* Social */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold text-zinc-300 mb-2">Social</h4>
            <ul className="flex flex-wrap gap-4">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noreferrer" : undefined}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* map row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-800">
          <iframe
            title="Map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-56 md:h-64"
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street} ${site.address.city} ${site.address.region} ${site.address.postal}`)}&output=embed`}
            allowFullScreen
          />
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-zinc-300">Privacy</Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms" className="hover:text-zinc-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
