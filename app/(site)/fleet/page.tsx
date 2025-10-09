import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fleet Services",
  description: "Commercial fleet repair, maintenance, and detailing services for businesses in Staten Island. Certified products, networked partners, 1-14 day insurance cycle times.",
};

export default function FleetPage() {
  return (
    <main className="container py-12 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Fleet Services</h1>
        <p className="text-lg text-white/80 max-w-3xl">
          Professional fleet repair and maintenance for commercial vehicles. We work with businesses of all sizes to keep your vehicles on the road with minimal downtime.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Our Fleet Solutions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Collision Repair</h3>
            <p className="text-white/70">
              Full collision repair services with certified technicians and OEM-quality parts. Fast turnaround times to minimize fleet downtime.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Insurance Coordination</h3>
            <p className="text-white/70">
              Streamlined insurance process with 1-14 day cycle times. We handle all paperwork and communication with your insurance provider.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Detailing Services</h3>
            <p className="text-white/70">
              Professional detailing services available by appointment only. Keep your fleet looking its best with certified products and techniques.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Ceramic Coating</h3>
            <p className="text-white/70">
              Protect your fleet investment with long-lasting ceramic coating. Reduces maintenance costs and keeps vehicles looking professional.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Paint Protection Film</h3>
            <p className="text-white/70">
              Shield high-wear areas from road debris and scratches. Self-healing PPF extends the life of your fleet's appearance.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Networked Partners</h3>
            <p className="text-white/70">
              Access to our network of certified partners for specialized services and expedited repairs when you need them most.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Why Choose Us for Fleet Services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Certified Products Only</h3>
            <p className="text-white/70">
              We use only certified, professional-grade products from trusted manufacturers to ensure quality and longevity.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
            <p className="text-white/70">
              1-14 day insurance cycle times keep your vehicles in service. We understand downtime costs you money.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Flexible Scheduling</h3>
            <p className="text-white/70">
              Detailing services available by appointment to work around your fleet schedule and minimize disruption.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Commercial Expertise</h3>
            <p className="text-white/70">
              Experience working with fleets of all sizes, from small businesses to large commercial operations.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Get Started</h2>
        <div className="card p-8 space-y-6">
          <p className="text-white/80">
            Ready to discuss your fleet needs? Download our capabilities overview or contact us directly to set up a consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/capabilities.pdf" className="btn" target="_blank" rel="noopener noreferrer">
              Download Capabilities PDF
            </Link>
            <Link href="/estimate" className="btn">
              Request Fleet Estimate
            </Link>
            <Link href="/contact" className="btn">
              Contact Us
            </Link>
          </div>
          <div className="pt-4 border-t border-white/10 space-y-2">
            <p className="text-white/70">
              <strong className="text-white">Phone:</strong> {BUSINESS.phone}
            </p>
            <p className="text-white/70">
              <strong className="text-white">Email:</strong> {BUSINESS.email}
            </p>
            <p className="text-white/70">
              <strong className="text-white">Hours:</strong> Mon-Fri 8am-6pm, Sat 9am-4pm
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
