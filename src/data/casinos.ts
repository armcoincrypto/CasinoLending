import { Casino, CasinoType } from "@/types";
import { buildCasinoSummary } from "./casino-seo";

export const top40CasinoNames = [
  "Stake",
  "Bet365",
  "Roobet",
  "BC.Game",
  "Rollbit",
  "LeoVegas",
  "Betway",
  "PokerStars Casino",
  "888 Casino",
  "DraftKings Casino",
  "FanDuel Casino",
  "Cloudbet",
  "Bitcasino",
  "Bovada",
  "1xBet",
  "Parimatch",
  "22Bet",
  "Wild Casino",
  "Mostbet",
  "Pin-Up Casino",
  "Melbet",
  "Betwinner",
  "Vave",
  "Thunderpick",
  "Fairspin",
  "Megapari",
  "7Bit Casino",
  "Casino Extreme",
  "Jackbit",
  "Duelbits",
  "Sportsbet.io",
  "Ignition Casino",
  "Mystake",
  "BetUS",
  "TG Casino",
  "Shuffle",
  "FortuneJack",
  "Gamdom",
  "Rabona",
  "NitroBetting",
];

export const goodCasinoNames = [
  "Stake",
  "Bet365",
  "Roobet",
  "LeoVegas",
  "BC.Game",
  "Rollbit",
  "PokerStars Casino",
  "Betway",
  "888 Casino",
  "DraftKings Casino",
  "FanDuel Casino",
  "Cloudbet",
  "Bitcasino",
  "Sportsbet.io",
  "Duelbits",
  "Shuffle",
  "Gamdom",
  "TG Casino",
  "FortuneJack",
  "Ignition Casino",
];

export const badCasinoNames = [
  "1xBet",
  "Mostbet",
  "Melbet",
  "22Bet",
  "Parimatch",
  "Betwinner",
  "Megapari",
  "Vave",
  "Fairspin",
  "Wild Casino",
  "Casino Extreme",
  "7Bit Casino",
  "NitroBetting",
  "Rabona",
  "Mystake",
  "BC.Game",
  "Rollbit",
  "Roobet",
  "Stake",
  "Bovada",
];

const BAD_COMPLAINT_TOPICS = [
  "KYC verification delays and repeated document requests.",
  "Slow withdrawal processing reported by multiple players.",
  "Strict bonus terms and wagering restrictions.",
  "Account restrictions or blocks without clear explanation.",
  "Inconsistent customer support response times.",
  "Regional access limitations for certain markets.",
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function envKeyFromName(name: string): string {
  return name.toUpperCase().replace(/[^A-Z0-9]/g, "_");
}

function createCasino(name: string, rank: number, type: CasinoType): Casino {
  const slug = slugify(name);
  const isGood = type === "good";
  const isBad = type === "bad";
  const complaintIdx = (rank - 1) % BAD_COMPLAINT_TOPICS.length;

  return {
    id: `${type}-${rank}-${slug}`,
    slug,
    name,
    rank,
    logo: `/casinos/${slug}.svg`,
    summary: buildCasinoSummary(
      name,
      rank,
      type,
      isBad ? BAD_COMPLAINT_TOPICS[complaintIdx] : undefined
    ),
    bonus: isGood
      ? {
          en: "Competitive welcome offers — terms vary by region",
          hi: "प्रतिस्पर्धी स्वागत ऑफर — शर्तें क्षेत्र के अनुसार भिन्न",
        }
      : isBad
        ? {
            en: "Promotional offers with strict wagering — read terms carefully",
            hi: "कड़ी wagering के साथ प्रचार ऑफर — शर्तें ध्यान से पढ़ें",
          }
        : {
            en: "Offers vary — check official site for your region",
            hi: "ऑफर भिन्न — अपने क्षेत्र के लिए आधिकारिक साइट देखें",
          },
    withdrawal: isGood
      ? {
          en: "Generally reported as reliable — speed varies by method",
          hi: "आम तौर पर विश्वसनीय — गति विधि के अनुसार भिन्न",
        }
      : isBad
        ? {
            en: "Withdrawal timelines vary — some players report delays",
            hi: "निकासी समय भिन्न — कुछ खिलाड़ी देरी की रिपोर्ट करते हैं",
          }
        : {
            en: "Processing times depend on payment method and verification",
            hi: "प्रसंस्करण समय भुगतान विधि और सत्यापन पर निर्भर",
          },
    rating: isGood
      ? Math.round((4.3 + ((rank % 5) * 0.1)) * 10) / 10
      : isBad
        ? Math.round((2.5 + ((rank % 4) * 0.2)) * 10) / 10
        : Math.round((3.8 + ((rank % 6) * 0.05)) * 10) / 10,
    type,
    blogSlug: isBad ? `avoid-${slug}` : `review-${slug}`,
    envKey: envKeyFromName(name),
  };
}

export const top40Casinos: Casino[] = top40CasinoNames.map((name, i) =>
  createCasino(name, i + 1, "ranking")
);

export const goodCasinos: Casino[] = goodCasinoNames.map((name, i) =>
  createCasino(name, i + 1, "good")
);

export const badCasinos: Casino[] = badCasinoNames.map((name, i) =>
  createCasino(name, i + 1, "bad")
);

function mergeUniqueCasinos(lists: Casino[][]): Casino[] {
  const bySlug = new Map<string, Casino>();
  const priority: CasinoType[] = ["good", "bad", "ranking"];

  for (const type of priority) {
    for (const list of lists) {
      for (const casino of list) {
        if (casino.type === type && !bySlug.has(casino.slug)) {
          bySlug.set(casino.slug, casino);
        }
      }
    }
  }

  for (const list of lists) {
    for (const casino of list) {
      if (!bySlug.has(casino.slug)) {
        bySlug.set(casino.slug, casino);
      }
    }
  }

  return Array.from(bySlug.values());
}

export const allCasinos: Casino[] = mergeUniqueCasinos([
  goodCasinos,
  badCasinos,
  top40Casinos,
]);

export function getCasinoBySlug(slug: string): Casino | undefined {
  return (
    goodCasinos.find((c) => c.slug === slug) ||
    badCasinos.find((c) => c.slug === slug) ||
    top40Casinos.find((c) => c.slug === slug)
  );
}

export function getCasinoByBlogSlug(blogSlug: string): Casino | undefined {
  return allCasinos.find((c) => c.blogSlug === blogSlug);
}
