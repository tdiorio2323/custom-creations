import LeadForm from "@/components/lead-form";
export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <div className="mt-4 text-sm text-black/70">75 Thompson St, Staten Island, NY 10304</div>
        <div className="mt-1"><a className="badge" href="https://www.google.com/maps/dir/?api=1&destination=75+Thompson+St+Staten+Island+NY+10304">Get Directions</a></div>
        <div className="mt-6"><LeadForm /></div>
      </div>
      <iframe className="w-full aspect-video rounded-2xl border border-black/10"
        src="https://www.google.com/maps?q=75%20Thompson%20St%20Staten%20Island%20NY%2010304&output=embed" />
    </div>
  );
}
