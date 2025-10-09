import Link from "next/link";
import Hero from "@/components/hero";
import FeatureCards from "@/components/feature-cards";
import EstimateMini from "@/components/estimate-mini";
import FeaturedReviews from "@/components/featured-reviews";
import FaqPreview from "@/components/faq-preview";
import MobileCallBar from "@/components/mobile-call-bar";
import { businessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Hero />

      <FeatureCards />

      <section className="container mt-12">
        <EstimateMini />
      </section>

      <section className="container mt-12 space-y-6">
        <div className="card p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-white">Fleet Services Available</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Professional fleet repair and maintenance with certified products. 1-14 day insurance cycle times, networked partners, and flexible scheduling.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fleet" className="btn">
              View Fleet Services
            </Link>
            <Link href="/capabilities.pdf" className="btn" target="_blank" rel="noopener noreferrer">
              Download Capabilities PDF
            </Link>
          </div>
        </div>
      </section>

      <section className="container mt-12 space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold text-white">Featured Reviews</h2>
          <Link href="/reviews" className="text-sm text-white underline">
            See all reviews
          </Link>
        </div>
        <FeaturedReviews />
      </section>

      <section className="container mt-12 space-y-6 pb-24 lg:pb-16">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
          <Link href="/faq" className="text-sm text-white underline">
            View full FAQ
          </Link>
        </div>
        <FaqPreview />
      </section>

      <MobileCallBar />

      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(businessSchema)}</script>
    </>
  );
}
