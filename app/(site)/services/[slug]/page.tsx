import services from "@/content/services.json";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (services as any[]).map(s => ({ slug: s.slug }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const svc = (services as any[]).find(s => s.slug === params.slug);
  return { title: svc ? svc.title : "Service" };
}

export default async function ServicePage(props: Props) {
  const params = await props.params;
  const svc = (services as any[]).find(s => s.slug === params.slug);
  if (!svc) return notFound();

  return (
    <article className="grid gap-6">
      <header className="card p-6">
        <h1 className="text-2xl font-semibold">{svc.title}</h1>
        <p className="text-black/70 mt-2">{svc.summary}</p>
      </header>
      {svc.packages?.length ? (
        <section className="grid md:grid-cols-2 gap-4">
          {svc.packages.map((p:any) => (
            <div key={p.name} className="card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <div className="badge">From ${p.priceFrom}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-black/70">
                {p.includes.map((i:string) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </section>
      ) : null}
      <a href="/estimate" className="btn w-fit">Request an Estimate</a>
    </article>
  );
}
