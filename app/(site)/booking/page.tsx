import { hasCalUrl, env } from "@/lib/env";
import { SetupCallout } from "@/components/SetupCallout";

export const metadata = { title: "Booking" };

export default function Booking() {
  if (hasCalUrl) {
    return (
      <div className="card p-6">
        <iframe
          title="Schedule with Custom Creations"
          src={env.NEXT_PUBLIC_CAL_URL}
          loading="lazy"
          className="w-full h-[720px] rounded-2xl border border-black/10"
        />
      </div>
    );
  }

  return <SetupCallout text="Set NEXT_PUBLIC_CAL_URL to enable booking." />;
}
