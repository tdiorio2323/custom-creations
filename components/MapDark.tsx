"use client";

import * as React from "react";
import { MapPin } from "lucide-react";

export function MapDark() {
  const [isVisible, setIsVisible] = React.useState(false);
  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  const mapSrc = isVisible
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.0!2d-74.0830!3d40.6280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM3JzQwLjgiTiA3NMKwMDQnNTguOCJX!5e0!3m2!1sen!2sus!4v1234567890&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d`
    : "";

  return (
    <section
      ref={mapRef}
      className="container mx-auto px-4 sm:px-6 py-16 md:py-20"
    >
      <div className="card overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8 text-center space-y-2 bg-black/40">
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <h2 className="text-xl sm:text-2xl font-bold">Visit Our Shop</h2>
          </div>
          <p className="text-sm sm:text-base text-white/70">75 Thompson St, Staten Island, NY 10304</p>
        </div>

        {/* Reserve height to prevent CLS */}
        <div className="relative w-full" style={{ height: "400px" }}>
          {isVisible ? (
            <iframe
              src={mapSrc}
              width="100%"
              height="400"
              style={{ border: 0, filter: "brightness(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Creation Customs location map"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-black/20 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-white/30" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
