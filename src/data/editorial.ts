import { siteConfig } from "@/config/site";

export const AUTHOR_SLUG = "casinopulse-editorial-team";
export const AUTHOR_PATH = `/author/${AUTHOR_SLUG}`;

export type ContentFreshness = {
  datePublished: string;
  dateModified: string;
  lastReviewed: string;
};

export const editorialAuthor = {
  slug: AUTHOR_SLUG,
  name: "CasinoPulse Editorial Team",
  path: AUTHOR_PATH,
  url: `${siteConfig.url}${AUTHOR_PATH}`,
  description:
    "The CasinoPulse Editorial Team produces independent casino reviews, payment guides, and crypto gambling resources for South Asian players. Content follows our published review methodology — no individual credentials are claimed beyond documented editorial process.",
  jobTitle: "Editorial Research Team",
  knowsAbout: [
    "Online casino reviews",
    "Cryptocurrency casino payments",
    "India casino payment methods",
    "Responsible gambling education",
  ],
} as const;

/** ISO date strings — updated when pillar review content materially changes. */
export const pillarReviewFreshness: Record<string, ContentFreshness> = {
  "review-stake": {
    datePublished: "2026-01-01",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "review-bc-game": {
    datePublished: "2026-01-01",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "review-roobet": {
    datePublished: "2026-01-01",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "review-bet365": {
    datePublished: "2026-01-01",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "review-leovegas": {
    datePublished: "2026-01-01",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "review-rollbit": {
    datePublished: "2026-01-15",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "review-cloudbet": {
    datePublished: "2026-01-15",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "review-betway": {
    datePublished: "2026-01-15",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
};

export const cryptoGuideFreshness: Record<string, ContentFreshness> = {
  "bitcoin-casino": {
    datePublished: "2026-05-10",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "ethereum-casino": {
    datePublished: "2026-05-12",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
  "usdt-casino": {
    datePublished: "2026-05-14",
    dateModified: "2026-07-06",
    lastReviewed: "2026-07-06",
  },
};

export function getPillarReviewFreshness(slug: string): ContentFreshness | undefined {
  return pillarReviewFreshness[slug];
}

export function getCryptoGuideFreshness(slug: string): ContentFreshness | undefined {
  return cryptoGuideFreshness[slug];
}

export const authorPageSections = [
  {
    heading: "Who We Are",
    body: "CasinoPulse is produced by a small editorial research team covering South Asia and crypto casino topics. We publish under the collective byline CasinoPulse Editorial Team. We do not claim individual gambling-industry certifications, regulator appointments, or operator employment — our authority comes from documented methodology, transparent corrections policy, and compliance-safe language.",
  },
  {
    heading: "Editorial Process",
    body: "Reviews and guides are assigned based on reader demand, payment-topic gaps, and operators with frequent South Asian player questions. Each pillar casino review follows our weighted scoring model published on [How We Review](/how-we-review). We document licensing caveats, payment limitations, bonus honesty notes, and responsible gambling reminders on every indexable review.",
  },
  {
    heading: "Content Update Process",
    body: "Indexable guides display datePublished, dateModified, and lastReviewed metadata when content is materially updated. Payment menus, operator terms, and crypto network support can change without notice — we re-check pillar reviews on a scheduled editorial cycle and when readers report outdated cashier information via [Contact](/contact).",
  },
  {
    heading: "Payment & Crypto Methodology",
    body: "Payment guides describe how UPI, wallets, IMPS, Bitcoin, Ethereum, and USDT may work at international casinos — not guaranteed availability. We do not run independent payout tests or mystery-shop every operator. Crypto guides emphasise network selection, confirmation timing, and security hygiene. See [India casino payments](/india-casino-payments), [UPI](/payment/upi), [Bitcoin](/crypto/bitcoin-casino), [Ethereum](/crypto/ethereum-casino), and [USDT](/crypto/usdt-casino) hubs.",
  },
  {
    heading: "Fact-Checking Standards",
    body: "We verify operator footers, terms pages, and publicly documented payment menus at review time. Player forum themes inform complaint sections but do not alone determine scores. We do not invent licenses, payout speeds, or bonus guarantees. Corrections are handled through the Contact page with URL and evidence where possible.",
  },
  {
    heading: "Responsible Gambling Commitment",
    body: "CasinoPulse promotes informed, age-restricted entertainment only. We link [responsible gambling resources](/responsible-gambling) on reviews and payment guides. We do not encourage chasing losses, borrowing to gamble, or circumventing local laws. 18+ only.",
  },
] as const;

export const authorPageFaqs = [
  {
    question: "Is CasinoPulse Editorial Team a single person?",
    answer:
      "No. CasinoPulse Editorial Team is our collective byline for research, writing, and fact-checking workflows. We do not publish fake individual expert profiles.",
  },
  {
    question: "How are casino ratings assigned?",
    answer:
      "Ratings use the weighted model on our How We Review page covering safety, payments, bonuses, games, UX, support, and complaints. Scores are editorial estimates — not guarantees.",
  },
  {
    question: "How do I report an outdated payment method?",
    answer:
      "Use the Contact page with the page URL, operator name, and screenshots of the current cashier if available.",
  },
] as const;
