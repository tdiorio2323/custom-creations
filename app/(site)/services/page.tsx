import services from "@/content/services.json";
import Link from "next/link";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="grid-auto">
      {services.map(s => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="card p-6 hover:bg-white">
          <h3 className="font-semibold">{s.title}</h3>
          <p className="text-sm text-black/70 mt-2">{s.summary}</p>
        </Link>
      ))}
    </div>
  );
}
