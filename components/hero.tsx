import Image from "next/image";
import { site } from "@/lib/seo";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container py-12 md:py-16">
        <div className="card p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Staten Island’s Auto Body &amp; Paint Protection Experts
            </h1>
            <p className="mt-3 text-white/70">
              Collision repair, insurance claim advocacy, and ceramic + PPF protection with fast turnaround.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href="/estimate">Get Collision Estimate</a>
              <a className="btn" href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>Call {site.phone}</a>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border-2 border-white">
            <Image
              src="/images/stock/hero.svg"
              alt="Custom Creations Staten Island shop"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
