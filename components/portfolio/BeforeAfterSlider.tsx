"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}

const BeforeAfterItem = ({ beforeSrc, afterSrc, alt }: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    },
    []
  );

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = React.useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", () => setIsDragging(false));
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", () => setIsDragging(false));
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", () => setIsDragging(false));
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <Image
        src={afterSrc}
        alt={`${alt} - After`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`${alt} - Before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-black absolute left-1" />
          <ChevronRight className="w-4 h-4 text-black absolute right-1" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-xs font-medium">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded text-white text-xs font-medium">
        AFTER
      </div>

      {/* Range Input for Accessibility */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        aria-label={`Slider to compare before and after of ${alt}`}
        className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
      />
    </div>
  );
};

const portfolioItems = [
  {
    beforeSrc: "/creation/before-1.webp",
    afterSrc: "/creation/after-1.webp",
    alt: "Front bumper collision repair",
  },
  {
    beforeSrc: "/creation/before-2.webp",
    afterSrc: "/creation/after-2.webp",
    alt: "Side panel dent removal",
  },
  {
    beforeSrc: "/creation/before-3.webp",
    afterSrc: "/creation/after-3.webp",
    alt: "Rear fender repair and paint",
  },
];

export function BeforeAfterSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
      <h2 id="featured-work" className="text-3xl font-bold text-white mb-8 text-center">
        Featured Work
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {portfolioItems.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                <BeforeAfterItem {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          aria-label="Previous work"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next work"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to work ${index + 1}`}
              aria-current={selectedIndex === index ? "true" : "false"}
              className={`w-2 h-2 rounded-full transition ${
                selectedIndex === index ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
