import type { ProgrammaticPage } from "@/types/programmatic";

const cryptoPageTemplate = (
  slug: string,
  coin: string,
  symbol: string,
): ProgrammaticPage => ({
  slug,
  title: `Best ${coin} Casinos for Indian Players (${symbol})`,
  metaDescription: `Compare trusted ${coin} (${symbol}) online casinos for Indian players. Fast crypto deposits, bonus offers, withdrawal speeds, and safety tips for ${symbol} gambling.`,
  h1: `${coin} Casinos for Indian Players`,
  intro: `${coin} (${symbol}) casinos give Indian players fast deposits, borderless withdrawals, and strong privacy compared to traditional banking. This guide covers how ${symbol} gambling works, what to look for in a site, and our current top picks for ${coin} casino play.`,
  sections: [
    {
      heading: `Why ${coin} for Online Casinos?`,
      body: `${coin} transactions settle quickly on-chain, often within minutes depending on network congestion. For Indian players facing UPI or bank restrictions on gambling merchants, ${symbol} offers a practical alternative with transparent fees and global access.`,
    },
    {
      heading: "How to Deposit with Crypto",
      body: `Create a wallet or exchange account, buy ${symbol}, copy the casino's deposit address, and send only the supported network (e.g. ERC-20 vs native chain). Always start with a small test deposit and confirm the address character-by-character before sending larger amounts.`,
    },
    {
      heading: "Bonuses and Wagering",
      body: `Crypto welcome packages often match 100–200% of your first deposit. Read wagering requirements, game weighting, and max bet rules before claiming. ${coin} bonuses may exclude certain live tables or sports bets — check terms on the operator site.`,
    },
    {
      heading: "Safety Checklist",
      body: "Choose licensed or well-established brands with provably fair or audited games, 2FA on your account, and clear KYC/withdrawal policies. Avoid sites with vague ownership, unrealistic bonus promises, or no responsible gambling tools.",
    },
    {
      heading: "Top Casinos Accepting Crypto",
      body: "Stake, BC.Game, Cloudbet, Bitcasino, Rollbit, and FortuneJack consistently rank well for crypto users. Compare withdrawal limits, supported chains, and INR-friendly onboarding before you sign up.",
    },
  ],
  indexable: true,
  contentQuality: "expanded",
  keywords: [`${symbol} casino`, `${coin} gambling`, "crypto casino India", "bitcoin casino", "USDT casino"],
});

export const cryptoPages: ProgrammaticPage[] = [
  cryptoPageTemplate("usdt-casino", "USDT", "USDT"),
  cryptoPageTemplate("bitcoin-casino", "Bitcoin", "BTC"),
  cryptoPageTemplate("ethereum-casino", "Ethereum", "ETH"),
];

export function getCryptoPageBySlug(slug: string): ProgrammaticPage | undefined {
  return cryptoPages.find((page) => page.slug === slug);
}

export function getIndexableCryptoPages(): ProgrammaticPage[] {
  return cryptoPages.filter(
    (page) => page.indexable && page.contentQuality === "expanded",
  );
}

export function getCryptoSlugsForStaticParams(): string[] {
  return getIndexableCryptoPages().map((page) => page.slug);
}
