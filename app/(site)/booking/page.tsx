import { site } from "@/lib/seo";

export const metadata = { title: "Booking" };

export default function Booking() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL || process.env.CAL_URL;

  if (calUrl) {
    return (
      <div className="card p-6">
        <iframe
          title="Schedule with Custom Creations"
          src={calUrl}
          loading="lazy"
          className="w-full h-[720px] rounded-2xl border border-black/10"
        />
      </div>
    );
  }

  return (
    <div className="card p-6 space-y-3">
      <h1 className="text-xl font-semibold text-white">Booking Widget Pending</h1>
      <p className="text-sm text-white/70">
        TODO: Add your Cal.com or Calendly embed URL to <code>NEXT_PUBLIC_CAL_URL</code> to publish the live scheduler.
      </p>
      <p className="text-sm text-white/70">
        Until then, direct visitors to the estimate form or phone line for appointments.
      </p>
      <a
        className="btn inline-flex w-fit"
        href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
      >
        Call {site.phone}
      </a>
    </div>
  );
}
