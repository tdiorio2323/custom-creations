import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["","/services","/portfolio","/reviews","/estimate","/booking","/about","/contact","/location","/faq"].map(p => ({
    url: base + p, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7
  }));
  return routes;
}
