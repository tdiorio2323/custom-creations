import fs from "fs";
import path from "path";
import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { FeatureStrip } from "@/components/FeatureStrip";
import { EstimateStepper } from "@/components/estimate/EstimateStepper";
import { PortfolioSlideshow } from "@/components/portfolio/PortfolioSlideshow";
import { Testimonials } from "@/components/reviews/Testimonials";
import { FleetStrip } from "@/components/FleetStrip";
import { MapDark } from "@/components/MapDark";
import { FloatingPhone } from "@/components/FloatingPhone";
import { businessSchema } from "@/lib/schema";

function loadPortfolioImages() {
  try {
    const directory = path.join(process.cwd(), "public/portfolio");
    const files = fs.readdirSync(directory)
      .filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file))
      .slice(0, 20); // Limit to first 20 images for performance
    
    return files.map(file => ({
      src: `/portfolio/${file}`,
      alt: `Custom Creations featured work - ${file.replace(/[-_]/g, " ").replace(/\.(png|jpe?g|webp|gif)$/i, "")}`
    }));
  } catch (error) {
    return [] as { src: string; alt: string }[];
  }
}

export default function HomePage() {
  const portfolioImages = loadPortfolioImages();
  return (
    <>
      <HeroCarousel />

      <FeatureStrip />

      <section id="estimate">
        <EstimateStepper />
      </section>

      <FleetStrip />

      <PortfolioSlideshow images={portfolioImages} />

      <Testimonials />

      <MapDark />

      <FloatingPhone />

      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(businessSchema)}</script>
    </>
  );
}
