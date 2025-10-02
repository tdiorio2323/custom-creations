export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="card p-4">
          <summary className="cursor-pointer text-left text-base font-semibold text-black">
            {item.q}
          </summary>
          <p className="mt-2 text-sm text-black/70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
