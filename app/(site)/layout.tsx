import type { Metadata } from "next";
import Script from "next/script";
import { metadata as base, site } from "@/lib/seo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileCallBar from "@/components/mobile-call-bar";
import "../globals.css";

const PHONE = process.env.NEXT_PUBLIC_PHONE || "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://customcreationssi.com";
const IG = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";

export const metadata: Metadata = {
  ...base,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    ...base.openGraph,
    type: "website",
    url: SITE_URL,
    title: "Creation Customs | Staten Island Auto Body & Customization",
    description: "Auto body repair, ceramic coating, and paint protection film in Staten Island, NY. Call or text for a free estimate.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Creation Customs Auto Body Shop" }],
  },
  twitter: {
    ...base.twitter,
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh text-white">
        <Header />
        <main className="container py-8 pb-24 lg:pb-8">{children}</main>
        <Footer />
        <MobileCallBar />

        {/* LocalBusiness schema for SEO */}
        <Script id="ld-localbusiness" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoBodyShop",
            name: "Creation Customs",
            url: SITE_URL || site.url,
            telephone: PHONE,
            email: site.email,
            sameAs: IG ? [IG] : [],
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.city,
              addressRegion: site.address.region,
              postalCode: site.address.postal,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: site.address.lat,
              longitude: site.address.lng,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "16:00",
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
