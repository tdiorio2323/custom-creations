import Hero from "@/components/hero";
import { businessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container grid md:grid-cols-3 gap-6 mt-4">
        <div className="card p-6">
          <h3 className="font-semibold">Auto Body Repair</h3>
          <p className="text-sm text-black/70 mt-2">Collision repair, dent removal, paint match.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Ceramic Coating</h3>
          <p className="text-sm text-black/70 mt-2">Gloss and long-term protection.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">PPF</h3>
          <p className="text-sm text-black/70 mt-2">Self-healing film to stop chips.</p>
        </div>
      </section>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(businessSchema)}</script>
    </>
  );
}
