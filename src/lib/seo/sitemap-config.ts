import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blogs";
import { sampleNews } from "@/data/news";
import { getAllRegistryRoutes } from "@/lib/seo/route-registry";

export function buildStaticSitemapRoutes(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/casinos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/how-we-review`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blacklist`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/responsible-gambling`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}

export function buildProgrammaticSitemapRoutes(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return getAllRegistryRoutes()
    .filter((route) => route.indexable)
    .map((route) => ({
      url: `${base}${route.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.kind === "hub" ? 0.85 : 0.8,
    }));
}

export function buildBlogSitemapRoutes(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return blogPosts.map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
}

export function buildNewsSitemapRoutes(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return sampleNews.map((article) => ({
    url: `${base}/news/${article.id}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "daily" as const,
    priority: 0.75,
  }));
}

export function buildFullSitemap(): MetadataRoute.Sitemap {
  return [
    ...buildStaticSitemapRoutes(),
    ...buildProgrammaticSitemapRoutes(),
    ...buildBlogSitemapRoutes(),
    ...buildNewsSitemapRoutes(),
  ];
}

export function getSitemapPaths(): string[] {
  return buildFullSitemap().map((entry) => {
    const base = siteConfig.url;
    return entry.url.startsWith(base) ? entry.url.slice(base.length) || "/" : entry.url;
  });
}
