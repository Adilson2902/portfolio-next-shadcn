import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { profile } from "@/lib/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: profile.site,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${profile.site}/blog`,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${profile.site}/llms.txt`,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${profile.site}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
