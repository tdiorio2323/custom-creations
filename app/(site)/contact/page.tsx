import LeadForm from "@/components/lead-form";
import { site } from "@/lib/seo";

export const metadata = { title: "Contact" };

export default function Contact() {
  const encodedAddress = encodeURIComponent(`${site.address.street} ${site.address.city} ${site.address.region} ${site.address.postal}`);
  return (
    <div className="grid lg:grid-cols-2 gap-8 pb-24 lg:pb-8">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <div className="mt-4 text-sm text-black/70">{`${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`}</div>
        <div className="mt-1">
          <a
            className="badge focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
        <div className="mt-6"><LeadForm /></div>
      </div>
      <iframe
        className="w-full aspect-video rounded-2xl border border-black/10"
        src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
        loading="lazy"
        title="Map to Custom Creations"
      />
    </div>
  );
}
