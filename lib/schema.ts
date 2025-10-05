import { site } from "./seo";

export const businessSchema = {
  "@context":"https://schema.org",
  "@type":"AutoBodyShop",
  name: "CUSTOM CREATIONS",
  url: site.url,
  telephone: site.phone,
  image: site.url + "/creation-customs-logo.png",
  address: {
    "@type":"PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US"
  },
  geo: {"@type":"GeoCoordinates", latitude: site.address.lat, longitude: site.address.lng},
  openingHoursSpecification: [
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"18:00"}
  ],
  areaServed: ["Staten Island","Brooklyn","NJ"],
};
