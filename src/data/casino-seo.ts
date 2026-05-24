/** SEO-friendly summary templates — rotated by rank for variety */

const TOP40_EN = [
  (name: string, rank: number) =>
    `${name} review for Indian players — ranked #${rank} in our top 40 online casino list. Compare bonuses, slots, live dealer games, and safe real-money payouts.`,
  (name: string, rank: number) =>
    `Looking for a trusted ${name} online casino? Our #${rank} pick covers welcome bonuses, UPI/crypto payments, and honest ratings for Indian players worldwide.`,
  (name: string, rank: number) =>
    `${name} is a popular real-money online casino (#${rank} globally). Read expert reviews on games, mobile play, withdrawal speed, and exclusive offers for Indians.`,
  (name: string, rank: number) =>
    `Complete ${name} casino guide for Indian players — ranked #${rank} among the best international betting sites for slots, sports betting, and secure deposits.`,
];

const TOP40_HI = [
  (name: string, rank: number) =>
    `भारतीय खिलाड़ियों के लिए ${name} समीक्षा — हमारी शीर्ष 40 ऑनलाइन कैसीनो सूची में #${rank}। बोनस, स्लॉट और सुरक्षित निकासी की तुलना करें।`,
  (name: string, rank: number) =>
    `${name} ऑनलाइन कैसीनो — भारतीय खिलाड़ियों के लिए #${rank} रैंक। स्वागत बोनस, भुगतान विकल्प और ईमानदार रेटिंग पढ़ें।`,
];

const GOOD_EN = [
  (name: string) =>
    `${name} is among the best online casinos for Indian players — trusted reviews, fast withdrawals, strong welcome bonuses, and thousands of slots & live games.`,
  (name: string) =>
    `Top-rated ${name} casino review: safe real-money play, competitive bonuses, and reliable payouts make it a favourite for Indian players abroad.`,
  (name: string) =>
    `Why Indian players choose ${name}: licensed platform, popular slots, sports betting options, and positive reputation in our best casino list.`,
];

const GOOD_HI = [
  (name: string) =>
    `${name} भारतीय खिलाड़ियों के लिए सर्वश्रेष्ठ ऑनलाइन कैसीनो में है — तेज़ निकासी, बोनस और विश्वसनीय समीक्षाएं।`,
  (name: string) =>
    `टॉप-रेटेड ${name} कैसीनो: सुरक्षित रियल-मनी गेमिंग और भारतीय खिलाड़ियों के लिए प्रतिस्पर्धी ऑफर।`,
];

const BAD_EN = [
  (name: string, topic: string) =>
    `${name} casino review for Indian players — research reported issues (${topic}) before depositing. Not on our recommended list.`,
  (name: string, topic: string) =>
    `Should you play at ${name}? Our honest review covers complaints about ${topic} — read before signing up for real money.`,
];

const BAD_HI = [
  (name: string, topic: string) =>
    `${name} समीक्षा — भारतीय खिलाड़ियों के लिए ${topic} पर रिपोर्ट देखें। जमा करने से पहले पढ़ें।`,
];

export function buildCasinoSummary(
  name: string,
  rank: number,
  type: "good" | "bad" | "ranking",
  complaintTopic?: string
): { en: string; hi: string } {
  const i = (rank - 1) % 4;

  if (type === "good") {
    const gi = (rank - 1) % GOOD_EN.length;
    return { en: GOOD_EN[gi](name), hi: GOOD_HI[gi % GOOD_HI.length](name) };
  }
  if (type === "bad" && complaintTopic) {
    const bi = (rank - 1) % BAD_EN.length;
    const topicShort = complaintTopic.replace(/\.$/, "").toLowerCase();
    return {
      en: BAD_EN[bi](name, topicShort),
      hi: BAD_HI[bi % BAD_HI.length](name, topicShort),
    };
  }
  const ti = i % TOP40_EN.length;
  return { en: TOP40_EN[ti](name, rank), hi: TOP40_HI[ti % TOP40_HI.length](name, rank) };
}
