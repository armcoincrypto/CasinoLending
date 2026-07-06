import {
  getCryptoPageBySlug,
  getCryptoSlugsForStaticParams,
  getIndexableCryptoPages,
  getIndexablePaymentPages,
  getPaymentSlugsForStaticParams,
} from "@/data/programmatic";
import {
  getAllRegistryRoutes,
  getRegistryRouteByPath,
  hasBackingData,
} from "@/lib/seo/route-registry";
import { getSitemapPaths } from "@/lib/seo/sitemap-config";

export interface ValidationIssue {
  code: string;
  message: string;
}

export function validateProgrammaticRoutes(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const sitemapPaths = getSitemapPaths();
  const registryRoutes = getAllRegistryRoutes();

  for (const path of sitemapPaths) {
    const registryMatch = getRegistryRouteByPath(path);
    if (path.startsWith("/crypto/") || path.startsWith("/payment/") || path === "/compare" || path === "/india-casino-payments" || path === "/bangladesh-casino-payments") {
      if (!registryMatch) {
        issues.push({
          code: "SITEMAP_REGISTRY_MISMATCH",
          message: `Sitemap path ${path} has no route registry entry`,
        });
      } else if (!hasBackingData(registryMatch)) {
        issues.push({
          code: "REGISTRY_DATA_MISSING",
          message: `Route registry entry ${path} has no backing programmatic data`,
        });
      }
    }
  }

  for (const route of registryRoutes) {
    if (!hasBackingData(route)) {
      issues.push({
        code: "REGISTRY_DATA_MISSING",
        message: `Route registry entry ${route.path} has no backing programmatic data`,
      });
    }

    const inSitemap = sitemapPaths.includes(route.path);
    if (route.indexable && !inSitemap) {
      issues.push({
        code: "REGISTRY_SITEMAP_MISSING",
        message: `Indexable route ${route.path} is missing from sitemap`,
      });
    }
  }

  const staticCryptoSlugs = getCryptoSlugsForStaticParams();
  const indexableCryptoSlugs = getIndexableCryptoPages().map((page) => page.slug);

  for (const slug of indexableCryptoSlugs) {
    if (!staticCryptoSlugs.includes(slug)) {
      issues.push({
        code: "STATIC_PARAMS_MISSING",
        message: `Crypto slug ${slug} missing from generateStaticParams source`,
      });
    }

    const page = getCryptoPageBySlug(slug);
    if (!page?.indexable) {
      issues.push({
        code: "CRYPTO_NOT_INDEXABLE",
        message: `Crypto slug ${slug} is not indexable`,
      });
    }
    if (page?.contentQuality !== "expanded") {
      issues.push({
        code: "CRYPTO_CONTENT_NOT_EXPANDED",
        message: `Crypto slug ${slug} contentQuality is not expanded`,
      });
    }
  }

  const staticPaymentSlugs = getPaymentSlugsForStaticParams();
  const indexablePaymentSlugs = getIndexablePaymentPages().map((page) => page.slug);

  for (const slug of indexablePaymentSlugs) {
    if (!staticPaymentSlugs.includes(slug)) {
      issues.push({
        code: "STATIC_PARAMS_MISSING",
        message: `Payment slug ${slug} missing from generateStaticParams source`,
      });
    }
  }

  const requiredCryptoSlugs = ["usdt-casino", "bitcoin-casino", "ethereum-casino"];
  for (const slug of requiredCryptoSlugs) {
    const page = getCryptoPageBySlug(slug);
    if (!page) {
      issues.push({
        code: "CRYPTO_SLUG_MISSING",
        message: `Required crypto slug ${slug} is missing from data`,
      });
    } else if (!page.indexable || page.contentQuality !== "expanded") {
      issues.push({
        code: "CRYPTO_SLUG_INVALID",
        message: `Required crypto slug ${slug} must be indexable with expanded content`,
      });
    }
  }

  return issues;
}

export function assertProgrammaticRoutesValid(): void {
  const issues = validateProgrammaticRoutes();
  if (issues.length > 0) {
    const detail = issues.map((issue) => `- [${issue.code}] ${issue.message}`).join("\n");
    throw new Error(`Programmatic route validation failed:\n${detail}`);
  }
}
