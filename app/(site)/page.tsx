import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { FeatureStrip } from "@/components/FeatureStrip";
import { EstimateStepper } from "@/components/estimate/EstimateStepper";
import { BeforeAfterSlider } from "@/components/portfolio/BeforeAfterSlider";
import { Testimonials } from "@/components/reviews/Testimonials";
import { FleetStrip } from "@/components/FleetStrip";
import { MapDark } from "@/components/MapDark";
import { FloatingPhone } from "@/components/FloatingPhone";
import { businessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <FeatureStrip />

      <section id="estimate">
        <EstimateStepper />
      </section>

      <FleetStrip />

      <BeforeAfterSlider />

      <Testimonials />

      <MapDark />

      <FloatingPhone />

      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(businessSchema)}</script>
    </>
  );
}
