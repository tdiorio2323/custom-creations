import Link from "next/link";
import { site } from "@/lib/seo";
import { locationHours } from "@/src/config/hours";

export const metadata = { title: "Locations" };

export default function LocationPage() {
  const encodedAddress = encodeURIComponent(`${site.address.street} ${site.address.city} ${site.address.region} ${site.address.postal}`);
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-white mb-3">Service Locations</h1>
        <p className="text-white/70 text-lg">Premium auto body service across the greater New York metro area.</p>
      </div>

      <div className="card p-6 space-y-3 text-sm text-white/70">
        <h2 className="text-xl font-semibold text-white">Visit Our Staten Island Headquarters</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Parking lot entrance on Van Duzer St.</li>
          <li>Customer lounge available; Wi-Fi and coffee stocked daily.</li>
          <li>After-hours key drop located by the front bay door; include VIN on envelope.</li>
        </ul>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open driving directions
        </a>
        <iframe
          title="Map to Custom Creations"
          src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
          loading="lazy"
          className="w-full h-72 rounded-2xl border border-black/10"
        />
      </div>

      <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
        <div className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/0 border-2 border-white md:order-first"></div>
        <div className="md:order-last">
          <h2 className="text-2xl font-semibold text-white">Staten Island</h2>
          <p className="text-white/70 mt-3">Our flagship headquarters with full collision repair, paint correction, and protection film services.</p>
          <div className="mt-4 space-y-2 text-white/60 text-sm">
            <p>📍 75 Thompson St, Staten Island, NY 10304</p>
            <p>📞 (718) 555-0123</p>
            <p>🕐 {locationHours.find(l => l.name === "Staten Island")?.hours}</p>
          </div>
          <div className="flex gap-3 mt-6">
            <Link href="/contact" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Contact Us</Link>
            <Link href="/estimate" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Get Estimate</Link>
          </div>
        </div>
      </div>

      <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-white">Brooklyn & Queens</h2>
          <p className="text-white/70 mt-3">Mobile service with pickup and delivery for borough customers, including detailing and ceramic protection.</p>
          <div className="mt-4 space-y-2 text-white/60 text-sm">
            <p>📍 Mobile Service Available</p>
            <p>📞 (718) 555-0124</p>
            <p>🕐 {locationHours.find(l => l.name === "Brooklyn & Queens")?.hours}</p>
          </div>
          <div className="flex gap-3 mt-6">
            <Link href="/contact" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Schedule Service</Link>
            <Link href="/estimate" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Get Quote</Link>
          </div>
        </div>
        <div className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/0 border-2 border-white"></div>
      </div>

      <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
        <div className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/0 border-2 border-white md:order-first"></div>
        <div className="md:order-last">
          <h2 className="text-2xl font-semibold text-white">Bronx & Manhattan</h2>
          <p className="text-white/70 mt-3">Concierge pickup, repairs, and delivery for business and luxury vehicles in Manhattan and the Bronx.</p>
          <div className="mt-4 space-y-2 text-white/60 text-sm">
            <p>📍 Concierge Service Available</p>
            <p>📞 (718) 555-0125</p>
            <p>🕐 {locationHours.find(l => l.name === "Bronx & Manhattan")?.hours}</p>
          </div>
          <div className="flex gap-3 mt-6">
            <Link href="/contact" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Book Concierge</Link>
            <Link href="/estimate" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Get Estimate</Link>
          </div>
        </div>
      </div>

      <div className="card p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-white">New Jersey</h2>
          <p className="text-white/70 mt-3">Serving northern New Jersey with professional auto body repair and protection film installs.</p>
          <div className="mt-4 space-y-2 text-white/60 text-sm">
            <p>📍 Bergen, Hudson, Essex Counties</p>
            <p>📞 (201) 555-0126</p>
            <p>🕐 {locationHours.find(l => l.name === "New Jersey")?.hours}</p>
          </div>
          <div className="flex gap-3 mt-6">
            <Link href="/contact" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Contact Us</Link>
            <Link href="/estimate" className="btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Get Estimate</Link>
          </div>
        </div>
        <div className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/0 border-2 border-white"></div>
      </div>
    </div>
  );
}
