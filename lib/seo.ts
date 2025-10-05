import type { Metadata } from "next";
import { SITE } from "@/src/config/site";

export const site = {
  name: "CUSTOM CREATIONS",
  url: "https://customcreationssi.com",
  phone: SITE.PHONE,
  email: "info@creationcustomsllc.com",
  address: {
    street: "75 Thompson St",
    city: "Staten Island",
    region: "NY",
    postal: "10304",
    lat: 40.6209,
    lng: -74.0819,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s • CUSTOM CREATIONS" },
  description: "Auto body repair, ceramic coating, and PPF in Staten Island, NY.",
  openGraph: {
    type: "website",
    title: site.name,
    description: "Auto body repair, ceramic coating, and PPF in Staten Island, NY.",
    url: site.url,
    images: [
      {
        url: "/creation-customs-logo.png",
        width: 320,
        height: 85,
        alt: "CUSTOM CREATIONS - Auto Body Repair, Ceramic Coating, and PPF"
      }
    ],
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Auto body repair, ceramic coating, and PPF in Staten Island, NY.",
    images: ["/creation-customs-logo.png"],
  },
  alternates: { canonical: site.url },
};
