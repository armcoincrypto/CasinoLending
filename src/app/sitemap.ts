import type { MetadataRoute } from "next";
import { buildFullSitemap } from "@/lib/seo/sitemap-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildFullSitemap();
}
