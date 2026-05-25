import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allCasinos } from "@/data/casinos";
import { blogPosts } from "@/data/blogs";
import { sampleNews } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/casinos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const newsRoutes = sampleNews.map((article) => ({
    url: `${base}/news/${article.id}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "daily" as const,
    priority: 0.75,
  }));

  const casinoRoutes = allCasinos.map((casino) => ({
    url: `${base}/go/${casino.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [...staticRoutes, ...blogRoutes, ...newsRoutes, ...casinoRoutes];
}
