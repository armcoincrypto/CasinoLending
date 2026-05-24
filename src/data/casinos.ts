import { Casino } from "@/types";

const goodCasinoNames = [
  "Parimatch",
  "1xBet",
  "Betway",
  "LeoVegas",
  "Royal Panda",
  "10Cric",
  "Pure Win",
  "ComeOn",
  "Casumo",
  "Dafabet",
  "Melbet",
  "22Bet",
  "Bet365",
  "Spin Casino",
  "Genesis Casino",
  "Rabona",
  "Wildz",
  "PlayOJO",
  "Betwinner",
  "Mostbet",
];

const badCasinoNames = [
  "LuckySpin Casino",
  "GoldenBet Pro",
  "WinMax Palace",
  "RoyalFlush 777",
  "MegaJackpot Hub",
  "DiamondBet Zone",
  "FortuneWheel Casino",
  "CashOut Kings",
  "BetBlitz Arena",
  "SpinMaster Pro",
  "JackpotJungle",
  "QuickWin Casino",
  "EliteBet Lounge",
  "TurboSpin Palace",
  "CashRush Casino",
  "BetStorm Arena",
  "LuckyDice Hub",
  "WinVault Pro",
  "SpinCity Casino",
  "GoldRush Bet",
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function envKeyFromName(name: string): string {
  return name.toUpperCase().replace(/[^A-Z0-9]/g, "_");
}

function createGoodCasino(name: string, rank: number): Casino {
  const slug = slugify(name);
  return {
    id: `good-${rank}`,
    slug,
    name,
    rank,
    logo: `/casinos/${slug}.svg`,
    summary: {
      en: `${name} offers Indian players UPI deposits, fast withdrawals within 24h, and a generous welcome bonus with fair wagering terms.`,
      hi: `${name} भारतीय खिलाड़ियों को UPI जमा, 24 घंटे में तेज़ निकासी, और उचित wagering शर्तों के साथ स्वागत बोनस प्रदान करता है।`,
    },
    bonus: {
      en: "100% up to ₹10,000 + 50 Free Spins",
      hi: "100% ₹10,000 तक + 50 फ्री स्पिन",
    },
    withdrawal: {
      en: "UPI, Paytm, Bank Transfer — 2-24 hours",
      hi: "UPI, Paytm, बैंक ट्रांसफर — 2-24 घंटे",
    },
    rating: Math.round((4.5 + Math.random() * 0.5) * 10) / 10,
    type: "good",
    blogSlug: `review-${slug}`,
    envKey: envKeyFromName(name),
  };
}

function createBadCasino(name: string, rank: number): Casino {
  const slug = slugify(name);
  const reasons = [
    "Delayed withdrawals exceeding 30 days with no support response.",
    "Hidden wagering requirements and unfair bonus terms.",
    "Multiple unresolved player complaints on forums.",
    "No valid gaming license or unverifiable licensing claims.",
    "Account closures without explanation after winning.",
  ];
  const reasonIdx = (rank - 1) % reasons.length;
  return {
    id: `bad-${rank}`,
    slug,
    name,
    rank,
    logo: `/casinos/${slug}.svg`,
    summary: {
      en: `${name}: ${reasons[reasonIdx]} Avoid this platform to protect your funds.`,
      hi: `${name}: ${reasons[reasonIdx]} अपने धन की सुरक्षा के लिए इस प्लेटफॉर्म से बचें।`,
    },
    bonus: {
      en: "Misleading 500% bonus with 80x wagering",
      hi: "80x wagering के साथ भ्रामक 500% बोनस",
    },
    withdrawal: {
      en: "Delayed 15-45 days, frequent rejections",
      hi: "15-45 दिन की देरी, बार-बार अस्वीकृति",
    },
    rating: Math.round((1.0 + Math.random() * 1.5) * 10) / 10,
    type: "bad",
    blogSlug: `avoid-${slug}`,
    envKey: envKeyFromName(name),
  };
}

export const goodCasinos: Casino[] = goodCasinoNames.map((name, i) =>
  createGoodCasino(name, i + 1)
);

export const badCasinos: Casino[] = badCasinoNames.map((name, i) =>
  createBadCasino(name, i + 1)
);

export const allCasinos: Casino[] = [...goodCasinos, ...badCasinos];

export function getCasinoBySlug(slug: string): Casino | undefined {
  return allCasinos.find((c) => c.slug === slug);
}

export function getCasinoByBlogSlug(blogSlug: string): Casino | undefined {
  return allCasinos.find((c) => c.blogSlug === blogSlug);
}
