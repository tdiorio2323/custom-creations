"use client";

import { useEffect, useState } from "react";
import { useReportError } from "@/lib/hooks/useReportError";
import FaqAccordion, { FaqItem } from "./faq-accordion";

export default function FaqPreview() {
  const [items, setItems] = useState<FaqItem[]>([]);

  useEffect(() => {
    let active = true;
    fetch("/api/mock/faqs")
      .then((res) => res.json())
      .then((data) => {
        if (active) setItems(data?.items || []);
      })
      .catch((error) => useReportError("Failed to fetch FAQs", { error }));
    return () => {
      active = false;
    };
  }, []);

  return <FaqAccordion items={items.slice(0, 6)} />;
}
