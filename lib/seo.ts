import type { Metadata } from "next";

export const site = {
  name: "CUSTOM CREATIONS",
  url: "https://customcreationssi.com",
  phone: "+1-718-555-0123",
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
  openGraph: { type: "website", title: site.name, url: site.url, images: ["/creation-customs-logo.png"] },
  alternates: { canonical: site.url },
};
