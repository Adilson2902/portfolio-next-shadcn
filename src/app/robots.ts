import type { MetadataRoute } from "next";
import { profile } from "@/lib/portfolio";

const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "*",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: AI_AND_SEARCH_BOTS.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: ["/api/", "/admin/"],
    })),
    sitemap: `${profile.site}/sitemap.xml`,
    host: profile.site,
  };
}
