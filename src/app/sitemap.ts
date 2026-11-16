import type { MetadataRoute } from "next";
import { profile } from "@/lib/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  // The blog contains example articles; exclude it until editorial review.
  return [{ url: profile.site, changeFrequency: "monthly", priority: 1 }];
}
