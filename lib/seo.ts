import type { Metadata } from "next";
import { SITE } from "@/src/config/site";

export const BUSINESS = {
  name: "Creation Customs",
  phone: SITE.PHONE,
  email: "info@creationcustomsllc.com",
  addressLine1: "75 Thompson St",
  city: "Staten Island",
  state: "NY",
  postalCode: "10304",
  hours: [
    { day: "Mon-Fri", open: "08:00", close: "18:00" },
    { day: "Sat", open: "09:00", close: "16:00" },
    { day: "Sun", open: null, close: null }
  ],
  socials: {
    instagram: SITE.SOCIAL.INSTAGRAM || "https://instagram.com/creationcustoms",
    facebook: SITE.SOCIAL.FACEBOOK || "https://facebook.com/creationcustoms",
    youtube: SITE.SOCIAL.YOUTUBE || "https://youtube.com/@creationcustoms"
  }
};

export const site = {
  name: "CUSTOM CREATIONS",
  url: "https://creationcustoms.tdstudiosny.com",
  phone: SITE.PHONE,
  email: BUSINESS.email,
  address: {
    street: BUSINESS.addressLine1,
    city: BUSINESS.city,
    region: BUSINESS.state,
    postal: BUSINESS.postalCode,
    lat: 40.6209,
    lng: -74.0819,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://creationcustoms.tdstudiosny.com"),
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
        width: 1200,
        height: 630,
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
