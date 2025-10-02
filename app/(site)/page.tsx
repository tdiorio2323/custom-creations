import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import TrustBadges from "@/components/trust-badges";
import EstimateMini from "@/components/estimate-mini";
import FeaturedReviews from "@/components/featured-reviews";
import FaqPreview from "@/components/faq-preview";
import MobileCallBar from "@/components/mobile-call-bar";
import { businessSchema } from "@/lib/schema";

const SERVICES = [
  {
    title: "Collision Repair",
    description: "Frame straightening, precision paint match, and insurance paperwork handled start to finish.",
    image: "/images/stock/repair.svg",
    href: "/services/auto-body-repair",
    cta: "Get Collision Estimate",
  },
  {
    title: "Ceramic Coating",
    description: "Multi-year ceramic coating packages with correction, hydrophobic gloss, and maintenance plans.",
    image: "/images/stock/ceramic.svg",
    href: "/services/ceramic-coating",
    cta: "Protect My Paint",
  },
  {
    title: "Paint Protection Film",
    description: "Self-healing film coverage for bumpers, hood, fenders, mirrors, and track pack upgrades.",
    image: "/images/stock/ppf.svg",
    href: "/services/paint-protection-film-ppf",
    cta: "See PPF Packages",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container">
        <TrustBadges />
      </section>

      <section className="container mt-12 space-y-8">
        {SERVICES.map((service, index) => (
          <article key={service.title} className="card p-6 md:p-8">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className={`overflow-hidden rounded-xl border border-black/10 bg-white ${index % 2 === 1 ? "md:order-last" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className={`${index % 2 === 1 ? "md:order-first" : ""}`}>
                <h2 className="text-2xl font-semibold text-black">{service.title}</h2>
                <p className="text-sm text-black/70 mt-3">{service.description}</p>
                <Link href={service.href} className="btn mt-4 inline-flex">
                  {service.cta}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container mt-12">
        <EstimateMini />
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

      <section className="container mt-12 space-y-6 pb-16">
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
