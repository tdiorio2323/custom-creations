import Hero from "@/components/hero";
import { businessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="container space-y-8 mt-12">
        {/* Auto Body Repair - Image on Left */}
        <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="aspect-square rounded-xl bg-gradient-to-br from-black/5 to-black/0 border border-black/10 md:order-first"></div>
          <div className="md:order-last">
            <h3 className="text-2xl font-semibold">Auto Body Repair</h3>
            <p className="text-black/70 mt-3">Collision repair, dent removal, paint match, and frame straightening. Our expert technicians restore your vehicle to factory condition.</p>
            <a href="/services/auto-body-repair" className="btn mt-4 inline-block">Learn More</a>
          </div>
        </div>

        {/* Ceramic Coating - Image on Right */}
        <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Ceramic Coating</h3>
            <p className="text-black/70 mt-3">Durable gloss and hydrophobic protection. Long-lasting shine with superior resistance to environmental contaminants.</p>
            <a href="/services/ceramic-coating" className="btn mt-4 inline-block">Learn More</a>
          </div>
          <div className="aspect-square rounded-xl bg-gradient-to-br from-black/5 to-black/0 border border-black/10"></div>
        </div>

        {/* PPF - Image on Left */}
        <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="aspect-square rounded-xl bg-gradient-to-br from-black/5 to-black/0 border border-black/10 md:order-first"></div>
          <div className="md:order-last">
            <h3 className="text-2xl font-semibold">Paint Protection Film (PPF)</h3>
            <p className="text-black/70 mt-3">Self-healing film for rock chips and road rash. Invisible protection that keeps your paint looking new for years.</p>
            <a href="/services/paint-protection-film-ppf" className="btn mt-4 inline-block">Learn More</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(businessSchema)}</script>
    </>
  );
}
