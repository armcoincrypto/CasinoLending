export const siteConfig = {
  name: "CasinoPulse",
  codename: "CasinoPulse",
  tagline: "Premium Casino News, Reviews & Jackpot Intelligence",
  description:
    "Authority casino media for Bangladesh and South Asia — breaking jackpots, trusted reviews, bonus tracking, blacklist alerts, and responsible gambling resources.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://casinopuls.site",
  locale: "en",
  regions: ["BD", "IN", "PK", "LK", "GLOBAL"] as const,
  legal: {
    minAge: 18,
    affiliateDisclosure: true,
  },
} as const;

export type SiteRegion = (typeof siteConfig.regions)[number];
