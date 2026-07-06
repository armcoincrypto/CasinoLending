import { blogPosts } from "@/data/blogs";
import { getIndexableCryptoPages } from "@/data/programmatic";
import { getIndexablePaymentPages } from "@/data/programmatic";
import { getIndexableHubPages } from "@/data/programmatic";
import { isPillarReviewSlug } from "@/data/pillar-reviews";
import type { BlogPost } from "@/types";

export const BLOGS_HUB_PATH = "/blogs";

export const FEATURED_REVIEW_SLUGS = [
  "review-stake",
  "review-bc-game",
  "review-roobet",
  "review-bet365",
  "review-rollbit",
  "review-pokerstars-casino",
  "review-888-casino",
] as const;

const REVIEW_CATEGORIES = new Set<BlogPost["category"]>([
  "good-casino",
  "bad-casino",
  "ranking-casino",
]);

export const blogsHubMeta = {
  title: "Casino Reviews & Expert Guides — CasinoPulse",
  description:
    "Server-indexed casino reviews, payment guides, and crypto gambling resources for South Asian players. Pillar reviews for Stake, Bet365, 1xBet, and more.",
};

export const blogsHubIntroSections = [
  {
    heading: "What This Reviews Hub Covers",
    body: "CasinoPulse publishes independent casino reviews, payment method guides, and cryptocurrency gambling explainers for readers in India, Bangladesh, Pakistan, Sri Lanka, and the wider South Asian diaspora. This hub is the editorial entry point: you will find pillar-depth operator reviews, regional payment context, and links to our published methodology. We do not process deposits, operate casinos, or guarantee operator availability — every page emphasises verification inside the official cashier after login.",
  },
  {
    heading: "How We Evaluate Online Casinos",
    body: "Our weighted scoring model covers safety and licensing, payments and withdrawals, bonuses, game selection, user experience, support quality, and complaint themes. Pillar reviews — marked with editorial trust metadata — follow the full template on our [review methodology](/how-we-review) page. Ratings are editorial estimates, not purchased placements. We do not run mystery-shop payout tests on every cycle; we synthesise operator disclosures, terms pages, and recurring player forum themes. When an operator changes payment rails or bonus rules, we prioritise content refresh.",
  },
  {
    heading: "Payment Methods South Asian Players Ask About",
    body: "Indian readers frequently search for UPI, Paytm, PhonePe, and IMPS casino deposits. Bangladeshi readers ask about bKash and Nagad. Pakistani readers ask about JazzCash and bank transfer workarounds. Availability can change when banks or mobile financial services block gambling merchant categories — marketing pages are not proof of support. Start with our [India casino payments hub](/india-casino-payments) and [Bangladesh casino payments hub](/bangladesh-casino-payments), then read method-specific guides: [UPI](/payment/upi), [Paytm](/payment/paytm), [PhonePe](/payment/phonepe), [IMPS](/payment/imps), [bKash](/payment/bkash), and [Nagad](/payment/nagad).",
  },
  {
    heading: "Cryptocurrency Casino Context",
    body: "When local banking rails fail, many players explore Bitcoin, Ethereum, or USDT deposits. Crypto removes some friction but adds wallet security responsibilities — wrong network selection (for example ERC-20 versus TRC-20 for USDT) can lose funds permanently. Our crypto cluster explains chain risks without promising anonymity or legal immunity. Read the [Bitcoin casino guide](/crypto/bitcoin-casino), [Ethereum casino guide](/crypto/ethereum-casino), and [USDT casino guide](/crypto/usdt-casino) before sending a test deposit. Compare crypto-first operators in our [Stake review](/blogs/review-stake), [BC.Game review](/blogs/review-bc-game), and [Rollbit review](/blogs/review-rollbit).",
  },
  {
    heading: "Pillar Reviews Versus Checklist Reviews",
    body: "Not every brand page in this hub carries Review schema. Pillar reviews meet depth, FAQ, trust block, and internal linking thresholds — currently including established names such as Stake, Bet365, PokerStars Casino, and 888 Casino, plus editorial deep dives on high-search operators where complaint themes warrant caution (including 1xBet, Melbet, Mostbet, Parimatch, and 22Bet). Checklist-style pages remain useful for discovery but intentionally omit Review structured data until expanded. Use the [comparison hub](/compare) to shortlist brands before depositing.",
  },
  {
    heading: "Responsible Gambling and Legal Context",
    body: "CasinoPulse promotes informed, age-restricted entertainment only. Online casino access is restricted or legally sensitive across much of South Asia. We do not provide legal advice. Set deposit limits before playing, avoid borrowing to gamble, and stop if losses harm finances or relationships. Read [responsible gambling resources](/responsible-gambling). If you are recovering from problem gambling, do not use this hub to find new operators — seek support first.",
  },
  {
    heading: "Editorial Team and Corrections",
    body: "Content is produced by the [CasinoPulse Editorial Team](/author/casinopulse-editorial-team) under a collective byline. We do not publish fake individual expert credentials. Report outdated cashier screenshots or broken payment references via our [contact page](/contact). Material updates display lastReviewed metadata on pillar reviews.",
  },
  {
    heading: "How to Use This Hub Efficiently",
    body: "Start with your primary question. If you need a payment rail, open the relevant guide first — [UPI](/payment/upi) for India, [bKash](/payment/bkash) for Bangladesh — then shortlist operators on the [comparison hub](/compare) that may support that method in their cashier. If you need an operator overview, read the pillar review for brands you are considering, then cross-check complaint themes on our [blacklist](/blacklist) page. Never deposit based on a single excerpt; read withdrawal and bonus sections on the full review page.",
  },
  {
    heading: "Sportsbook and Casino Crossover Products",
    body: "Many brands in this hub combine sports betting and casino wallets. Bonus rules often differ between verticals: a sports welcome offer may exclude live casino contribution, and vice versa. Track sports and casino bankrolls separately even when balances appear combined. Cricket in-play markets — especially during IPL and World Cup cycles — can lengthen sessions. Use deposit limits and reality checks regardless of product tab.",
  },
  {
    heading: "Mirror Domains and Phishing Hygiene",
    body: "Offshore operators frequently operate multiple domains for geo routing. Clone sites mimic major brands to harvest logins and deposits. Bookmark official URLs from a trusted source, verify SSL certificates, and never install APK files from Telegram channels. CasinoPulse outbound links may use affiliate tracking but should land on operator homepages — still verify the domain character-by-character before entering payment details.",
  },
  {
    heading: "KYC and Withdrawal Planning",
    body: "Assume KYC will be required before meaningful withdrawals, even when marketing suggests anonymous play. Prepare government ID, proof of address, and sometimes payment method screenshots in advance. First cashouts may take longer than marketing copy implies — test with the smallest allowed withdrawal where policy permits. If verification repeats without progress, document support ticket IDs. Operator policies differ; timing may vary by VIP tier, weekends, or internal review queues.",
  },
  {
    heading: "Bonus Literacy for South Asian Players",
    body: "Welcome percentages are not withdrawable cash. Wagering multiples, max bet during bonus play, excluded games, and short expiry windows can void winnings. Some regions restrict or ban welcome advertising altogether — absence of a banner does not mean no promotions exist; check the promotions tab after login. Opt out of bonuses if you prefer simpler cash play without wagering traps. Read our [how we review](/how-we-review) bonus analysis section for the weighting we apply in scores.",
  },
  {
    heading: "Indexation and Content Freshness",
    body: "This /blogs hub is server-rendered so crawlers receive full review excerpts, category links, and guide pathways without JavaScript execution. Pillar reviews display editorial trust blocks with lastReviewed dates. Payment and crypto guides carry dateModified metadata when materially updated. Thin checklist reviews remain indexable for discovery but omit Review structured data until expanded to pillar thresholds — this protects schema quality and aligns with our anti-inflation policy.",
  },
  {
    heading: "Affiliate Disclosure and Independence",
    body: "CasinoPulse may earn affiliate commissions when readers use outbound links. Commercial relationships do not purchase higher review scores or blacklist removal. Scores follow the published weighted model. We reject pay-to-play rating schemes. When a brand scores poorly — including caution pillars for 1xBet, Melbet, Mostbet, Parimatch, and 22Bet — that reflects editorial risk signals, not absence of affiliate contracts. Readers should treat every outbound operator link as a starting point for independent verification, not an endorsement.",
  },
] as const;

export function getCasinoReviewPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => REVIEW_CATEGORIES.has(post.category) && post.indexable !== false)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getLatestReviewPosts(limit = 12): BlogPost[] {
  const pillarFirst = getCasinoReviewPosts().sort((a, b) => {
    const aPillar = isPillarReviewSlug(a.slug) ? 1 : 0;
    const bPillar = isPillarReviewSlug(b.slug) ? 1 : 0;
    if (aPillar !== bPillar) return bPillar - aPillar;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
  return pillarFirst.slice(0, limit);
}

export function getFeaturedReviewPosts(): BlogPost[] {
  return FEATURED_REVIEW_SLUGS.map((slug) => blogPosts.find((p) => p.slug === slug)).filter(
    (p): p is BlogPost => Boolean(p),
  );
}

export function getPaymentGuideLinks() {
  return getIndexablePaymentPages().map((page) => ({
    href: `/payment/${page.slug}`,
    label: page.h1,
    description: page.metaDescription,
  }));
}

export function getCryptoGuideLinks() {
  return getIndexableCryptoPages().map((page) => ({
    href: `/crypto/${page.slug}`,
    label: page.h1,
    description: page.metaDescription,
  }));
}

export function getComparisonHubLinks() {
  return getIndexableHubPages()
    .filter((page) => page.slug === "compare" || page.slug.includes("payments"))
    .map((page) => ({
      href: `/${page.slug}`,
      label: page.h1,
      description: page.metaDescription,
    }));
}
