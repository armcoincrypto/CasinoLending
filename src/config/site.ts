export const siteConfig = {
  name: "CasinoPulse",
  codename: "CasinoPulse",
  tagline: "Casino Reviews, Crypto Guides & Safety Resources for South Asia",
  description:
    "CasinoPulse publishes independent casino reviews, crypto casino guides, payment guides, an editorial casino blacklist, review methodology, and responsible gambling resources for Bangladesh and South Asia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://casinopuls.site",
  locale: "en",
  regions: ["BD", "IN", "PK", "LK", "GLOBAL"] as const,
  legal: {
    minAge: 18,
    affiliateDisclosure: true,
  },
} as const;

export type SiteRegion = (typeof siteConfig.regions)[number];
