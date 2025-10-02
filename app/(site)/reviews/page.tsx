import testimonials from "@/content/testimonials.json";
export const metadata = { title: "Reviews" };
export default function Reviews() {
  return (
    <div className="grid-auto">
      {testimonials.map((t:any, i:number) => (
        <div key={i} className="card p-6">
          <div className="font-semibold">{t.name}</div>
          <div className="mt-2 text-sm text-black/70">{t.text}</div>
        </div>
      ))}
    </div>
  );
}
