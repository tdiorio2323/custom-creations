"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioSlideshowProps {
  images: Array<{ src: string; alt: string }>;
}

export function PortfolioSlideshow({ images }: PortfolioSlideshowProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Auto-advance slideshow every 1 second when not hovered
  React.useEffect(() => {
    if (!isHovered && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // 1 second per image

      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  const scrollPrev = React.useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const scrollNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const scrollTo = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  if (!images.length) {
    return (
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <h2 id="featured-work" className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
          Featured Work
        </h2>
        <div className="card p-6 space-y-3 text-white/70 max-w-2xl mx-auto text-center">
          <p>No portfolio images available.</p>
          <p>To add images, upload them to the <code>public/portfolio</code> directory.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
      <h2 id="featured-work" className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
        Featured Work
      </h2>
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={currentIndex === 0}
          />
          
          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded text-white text-xs font-medium">
            {currentIndex + 1} / {images.length}
          </div>
          
          {/* Pause Indicator */}
          {isHovered && (
            <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-xs font-medium">
              PAUSED
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          aria-label="Previous image"
          className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next image"
          className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="mt-6 bg-white/20 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-100 ease-linear w-full origin-left"
            style={{ transform: `scaleX(${(currentIndex + 1) / images.length})` }}
          />
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
              className={`w-2 h-2 rounded-full transition ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}