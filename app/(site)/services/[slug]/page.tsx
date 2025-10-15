import Link from "next/link";
import services from "@/content/services.json";
import { notFound } from "next/navigation";

type Service = {
  slug: string;
  title: string;
  summary: string;
  turnaround?: string;
  warranty?: string;
  addons?: string[];
  todo?: string;
  packages?: { name: string; priceFrom?: number; includes?: string[] }[];
};

const typedServices = services as Service[];

type ParamsPromise = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return typedServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ParamsPromise) {
  const resolved = await params;
  const svc = typedServices.find((service) => service.slug === resolved.slug);
  return { title: svc ? svc.title : "Service" };
}

export default async function ServicePage({ params }: ParamsPromise) {
  const resolved = await params;
  const svc = typedServices.find((service) => service.slug === resolved.slug);
  if (!svc) return notFound();

  const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <article className="grid gap-6">
      <header className="card p-6 space-y-3">
        <div>
          <h1 className="text-2xl font-semibold">{svc.title}</h1>
          <p className="text-white/70 mt-2">{svc.summary}</p>
        </div>
        <div className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
          {svc.turnaround ? <p><strong className="text-white">Turnaround:</strong> {svc.turnaround}</p> : null}
          {svc.warranty ? <p><strong className="text-white">Warranty:</strong> {svc.warranty}</p> : null}
        </div>
      </header>

      {svc.packages?.length ? (
        <section className="grid sm:grid-cols-2 gap-4">
          {svc.packages.map(pkg => (
            <div key={pkg.name} className="card p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold">{pkg.name}</h3>
                {typeof pkg.priceFrom === "number" ? (
                  <div className="badge whitespace-nowrap">From {currency.format(pkg.priceFrom)}</div>
                ) : null}
              </div>
              {pkg.includes?.length ? (
                <ul className="mt-1 list-disc pl-5 text-sm text-white/70">
                  {pkg.includes.map(item => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

      {svc.addons?.length ? (
        <section className="card p-5">
          <h2 className="font-semibold">Popular Add-ons</h2>
          <ul className="mt-2 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
            {svc.addons.map(addon => <li key={addon} className="list-disc ml-5">{addon}</li>)}
          </ul>
        </section>
      ) : null}

      {!svc.packages?.length && svc.todo ? (
        <div className="card p-5 text-sm text-white/70">
          TODO: {svc.todo}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Link
          href={`/estimate?service=${svc.slug}`}
          className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          Start an Estimate
        </Link>
        <Link
          href="/booking"
          className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          Book a Consultation
        </Link>
      </div>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Commercial Fleet Services</h2>
        <p className="text-white/70">
          This service is available for commercial fleets. We offer 1-14 day insurance cycle times,
          certified products only, and access to our networked partners. Detailing services available by appointment.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/fleet" className="btn">
            View Fleet Services
          </Link>
          <Link href="/capabilities.pdf" className="btn" target="_blank" rel="noopener noreferrer">
            Download Capabilities PDF
          </Link>
        </div>
      </section>
    </article>
  );
}
