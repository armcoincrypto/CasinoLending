import {
  getCryptoPageBySlug,
  getHubPageBySlug,
  getIndexableCryptoPages,
  getIndexableHubPages,
  getIndexablePaymentPages,
  getPaymentPageBySlug,
} from "@/data/programmatic";
import type { RouteRegistryEntry } from "@/types/programmatic";

function cryptoRoutes(): RouteRegistryEntry[] {
  return getIndexableCryptoPages().map((page) => ({
    path: `/crypto/${page.slug}`,
    kind: "crypto",
    slug: page.slug,
    indexable: page.indexable,
  }));
}

function paymentRoutes(): RouteRegistryEntry[] {
  return getIndexablePaymentPages().map((page) => ({
    path: `/payment/${page.slug}`,
    kind: "payment",
    slug: page.slug,
    indexable: page.indexable,
  }));
}

function hubRoutes(): RouteRegistryEntry[] {
  return getIndexableHubPages().map((page) => ({
    path: `/${page.slug}`,
    kind: "hub",
    slug: page.slug,
    indexable: page.indexable,
  }));
}

export function getAllRegistryRoutes(): RouteRegistryEntry[] {
  return [...cryptoRoutes(), ...paymentRoutes(), ...hubRoutes()];
}

export function getRegistryRouteByPath(path: string): RouteRegistryEntry | undefined {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return getAllRegistryRoutes().find((route) => route.path === normalized);
}

export function hasBackingData(entry: RouteRegistryEntry): boolean {
  if (entry.kind === "crypto" && entry.slug) {
    return Boolean(getCryptoPageBySlug(entry.slug));
  }
  if (entry.kind === "payment" && entry.slug) {
    return Boolean(getPaymentPageBySlug(entry.slug));
  }
  if (entry.kind === "hub" && entry.slug) {
    return Boolean(getHubPageBySlug(entry.slug));
  }
  return false;
}

export function getCryptoRegistrySlugs(): string[] {
  return getIndexableCryptoPages().map((page) => page.slug);
}

export function getPaymentRegistrySlugs(): string[] {
  return getIndexablePaymentPages().map((page) => page.slug);
}
