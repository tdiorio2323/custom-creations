import faqs from "@/content/faqs.json";
export const metadata = { title: "FAQ" };
export default function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((f: any, i: number) => (
        <details key={i} className="card p-4">
          <summary className="font-medium text-white">{f.q}</summary>
          <p className="mt-2 text-sm text-white/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
