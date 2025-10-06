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

export default function FeaturedReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch("/api/mock/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setReviews((data?.items || []).slice(0, 3));
      })
      .catch((error) => {
        useReportError("Failed to fetch featured reviews", { error });
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!reviews.length) return null;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.name + review.vehicle} {...review} />
      ))}
    </div>
  );
}
