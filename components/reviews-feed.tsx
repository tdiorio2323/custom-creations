"use client";

import { useEffect, useState } from "react";
import { useReportError } from "@/lib/hooks/useReportError";
import ReviewCard from "./review-card";

type Review = {
  name: string;
  rating: number;
  text: string;
  vehicle?: string;
};

export default function ReviewsFeed() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch("/api/mock/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setReviews(data?.items || []);
      })
      .catch((error) => useReportError("Failed to fetch reviews", { error }));
    return () => {
      mounted = false;
    };
  }, []);

  if (!reviews.length) {
    return <p className="text-sm text-white/70">Reviews are loading…</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.name + review.vehicle} {...review} />
      ))}
    </div>
  );
}
