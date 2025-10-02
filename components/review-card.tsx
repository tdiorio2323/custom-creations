interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  vehicle?: string;
}

export default function ReviewCard({ name, rating, text, vehicle }: ReviewCardProps) {
  const stars = "★".repeat(Math.round(Math.min(5, Math.max(0, rating)))) + "☆".repeat(Math.max(0, 5 - Math.round(rating)));
  return (
    <article className="card bg-white/5 border-white/10 text-white p-5 space-y-3">
      <header className="flex items-center justify-between">
        <span className="font-semibold">{name}{vehicle ? ` • ${vehicle}` : ""}</span>
        <span className="text-amber-500" aria-label={`${rating} star review`}>
          {stars}
        </span>
      </header>
      <p className="text-sm text-white/80">{text}</p>
    </article>
  );
}
