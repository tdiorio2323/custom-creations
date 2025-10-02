import faqs from "@/content/faqs.json";
export const metadata = { title: "FAQ" };
export default function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((f:any, i:number) => (
        <details key={i} className="card p-4">
          <summary className="font-medium">{f.q}</summary>
          <p className="mt-2 text-sm text-black/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
