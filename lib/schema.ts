import { site, BUSINESS } from "./seo";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: BUSINESS.name,
  alternateName: "CUSTOM CREATIONS",
  url: site.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: site.url + "/creation-customs-logo.png",
  logo: site.url + "/creation-customs-logo.png",
  description: "Professional auto body repair, ceramic coating, and paint protection film (PPF) services in Staten Island, NY. Fleet services available with 1-14 day insurance cycle times.",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.addressLine1,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.postalCode,
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  areaServed: [
    {
      "@type": "City",
      "name": "Staten Island",
      "containedIn": {
        "@type": "State",
        "name": "New York"
      }
    },
    {
      "@type": "City",
      "name": "Brooklyn",
      "containedIn": {
        "@type": "State",
        "name": "New York"
      }
    }
  ],
  priceRange: "$$",
  sameAs: [
    BUSINESS.socials.instagram,
    BUSINESS.socials.facebook,
    BUSINESS.socials.youtube
  ].filter(url => url && !url.includes("instagram.com/______")),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "name": "Auto Body Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auto Body Repair",
          "description": "Collision repair, paintless dent removal, and paint matching with lifetime warranty"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Coating",
          "description": "Professional ceramic coating with 2-7 year manufacturer warranty"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paint Protection Film",
          "description": "Self-healing PPF installation with 10-year warranty"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fleet Services",
          "description": "Commercial fleet repair and maintenance with 1-14 day insurance cycle times"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Detailing Services",
          "description": "Professional detailing services available by appointment only"
        }
      }
    ]
  }
};
