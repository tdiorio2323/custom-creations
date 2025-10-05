import ReviewsFeed from "@/components/reviews-feed";

export const metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <section className="container space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-white">Customer Reviews</h1>
        <p className="text-sm text-white/70">Real feedback from Staten Island drivers who trusted Custom Creations.</p>
      </div>
      <ReviewsFeed />
    </section>
  );
}
