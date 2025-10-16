"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "collision-repair",
    image: "/creation/hero-1.webp",
    title: "Expert Collision Repair",
    subtitle: "OEM paint matching, certified products, and insurance-friendly service",
    primaryCTA: { text: "Get Collision Estimate", href: "#estimate" },
    secondaryCTA: { text: "View Portfolio", href: "/portfolio" },
  },
  {
    id: "ceramic-coating",
    image: "/creation/hero-2.webp",
    title: "Premium Ceramic Coating",
    subtitle: "2-5 year protection with manufacturer warranty",
    primaryCTA: { text: "Get Coating Estimate", href: "#estimate" },
    secondaryCTA: { text: "View Portfolio", href: "/portfolio" },
  },
  {
    id: "fleet-work",
    image: "/creation/hero-3.webp",
    title: "Fleet Services",
    subtitle: "Professional fleet repair with 1-14 day cycle times",
    primaryCTA: { text: "Get Fleet Quote", href: "#estimate" },
    secondaryCTA: { text: "View Capabilities", href: "/fleet" },
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay with pause on hover
  React.useEffect(() => {
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  const handleCTAClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      role="region"
      aria-label="Hero carousel"
      aria-live="polite"
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                className="object-cover"
                sizes="100vw"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {slide.primaryCTA.href.startsWith("#") ? (
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={() => handleCTAClick(slide.primaryCTA.href)}
                          aria-label={slide.primaryCTA.text}
                        >
                          {slide.primaryCTA.text}
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={() => (window.location.href = slide.primaryCTA.href)}
                          aria-label={slide.primaryCTA.text}
                        >
                          {slide.primaryCTA.text}
                        </Button>
                      )}
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => (window.location.href = slide.secondaryCTA.href)}
                        aria-label={slide.secondaryCTA.text}
                      >
                        {slide.secondaryCTA.text}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : "false"}
            className={`w-2 h-2 rounded-full transition ${
              selectedIndex === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
