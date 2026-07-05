import type { ProgrammaticPage } from "@/types/programmatic";

export const hubPages: ProgrammaticPage[] = [
  {
    slug: "india-casino-payments",
    title: "India Casino Payment Methods Guide 2026",
    metaDescription:
      "Complete guide to casino payment methods for Indian players — UPI, Paytm, IMPS, cards, and crypto. Compare speeds, limits, and safe deposit options.",
    h1: "Casino Payment Methods for Indian Players",
    intro:
      "Choosing the right deposit and withdrawal method is critical for Indian casino players. This hub compares UPI, wallets, bank transfers, cards, and cryptocurrency so you can pick fast, reliable options with minimal fees.",
    sections: [
      {
        heading: "UPI and IMPS",
        body: "UPI remains the default for many Indian players when supported. IMPS works well for larger bank transfers. Confirm the casino displays a legitimate UPI ID and never pay unverified personal accounts.",
      },
      {
        heading: "Wallets (Paytm, PhonePe)",
        body: "Wallet availability varies by operator and merchant category. If your wallet blocks gambling, consider bank UPI or crypto alternatives documented in our payment guides.",
      },
      {
        heading: "Cryptocurrency",
        body: "Bitcoin, USDT, and Ethereum offer borderless deposits when traditional rails fail. See our crypto casino guides for chain-specific tips and bonus comparisons.",
      },
      {
        heading: "Withdrawals",
        body: "Prioritize casinos with published withdrawal times, clear KYC steps, and a track record of paying Indian players. Test with a small withdrawal before depositing large amounts.",
      },
    ],
    indexable: true,
    contentQuality: "expanded",
    keywords: ["India casino payments", "UPI casino", "Indian deposit methods"],
  },
  {
    slug: "compare",
    title: "Compare Top Online Casinos for Indian Players",
    metaDescription:
      "Side-by-side comparison of top online casinos for Indian players — bonuses, payments, game counts, withdrawal speed, and trust scores.",
    h1: "Compare Online Casinos",
    intro:
      "Use this comparison hub to evaluate leading casinos on bonuses, payment support for India, game variety, mobile experience, and reputation. Click through to full reviews for detailed scoring.",
    sections: [
      {
        heading: "How We Compare Casinos",
        body: "Our model weights licensing, payout reliability, bonus fairness, payment options for Indian players, mobile UX, and responsible gambling tools. Scores update when operators change terms or support quality shifts.",
      },
      {
        heading: "Quick Comparison Table",
        body: "Stake and BC.Game lead for crypto users. Bet365 and LeoVegas excel for sports and live casino. Cloudbet and Bitcasino specialize in Bitcoin. Check individual reviews for wagering terms and regional availability.",
      },
      {
        heading: "When to Avoid a Site",
        body: "Skip operators with unresolved withdrawal complaints, fake licensing claims, or pressure to deposit via unofficial agents. Our blacklist section flags brands with repeated Indian player issues.",
      },
    ],
    indexable: true,
    contentQuality: "expanded",
    keywords: ["compare online casinos", "casino comparison India", "best casino sites"],
  },
];

export function getHubPageBySlug(slug: string): ProgrammaticPage | undefined {
  return hubPages.find((page) => page.slug === slug);
}

export function getIndexableHubPages(): ProgrammaticPage[] {
  return hubPages.filter(
    (page) => page.indexable && page.contentQuality === "expanded",
  );
}
