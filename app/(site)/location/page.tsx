export const metadata = { title: "Location" };
export default function Location() {
  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Our Location</h1>
        <p className="text-sm text-black/70 mt-2">75 Thompson St, Staten Island, NY 10304</p>
      </div>
      <iframe className="w-full aspect-video rounded-2xl border border-black/10"
        src="https://www.google.com/maps?q=75%20Thompson%20St%20Staten%20Island%20NY%2010304&output=embed" />
    </div>
  );
}
