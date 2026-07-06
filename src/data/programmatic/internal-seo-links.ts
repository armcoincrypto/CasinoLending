export const internalSeoLinks = [
  {
    href: "/crypto/usdt-casino",
    title: "Best USDT Casinos",
    description:
      "Compare trusted USDT casino sites, crypto payments, payout speed, and player safety.",
    category: "Crypto Casinos",
    footerLabel: "USDT Casinos",
    cta: "Read guide",
  },
  {
    href: "/crypto/bitcoin-casino",
    title: "Bitcoin Casino Guide",
    description:
      "Learn how Bitcoin casinos work, what to check before depositing, and how to compare BTC sites.",
    category: "Crypto Casinos",
    footerLabel: "Bitcoin Casinos",
    cta: "Read guide",
  },
  {
    href: "/crypto/ethereum-casino",
    title: "Ethereum Casino Guide",
    description:
      "Explore Ethereum casino payments, wallet safety, fees, and withdrawal considerations.",
    category: "Crypto Casinos",
    footerLabel: "Ethereum Casinos",
    cta: "Read guide",
  },
  {
    href: "/payment/paytm",
    title: "Paytm Casino Payment Guide",
    description:
      "Understand Paytm casino payment options, availability, safety checks, and alternatives.",
    category: "Payment Guides",
    footerLabel: "Paytm Payments",
    cta: "View payment guide",
  },
  {
    href: "/payment/upi",
    title: "UPI Casino Payment Guide",
    description:
      "How UPI casino deposits work for Indian players — speed, limits, security, and alternatives.",
    category: "Payment Guides",
    footerLabel: "UPI Payments",
    cta: "View payment guide",
  },
  {
    href: "/payment/phonepe",
    title: "PhonePe Casino Payment Guide",
    description:
      "PhonePe casino deposits — availability, speed, security, and how it compares to UPI.",
    category: "Payment Guides",
    footerLabel: "PhonePe Payments",
    cta: "View payment guide",
  },
  {
    href: "/payment/imps",
    title: "IMPS Casino Payment Guide",
    description:
      "IMPS bank transfers for casino deposits — timing, safety, and withdrawal expectations.",
    category: "Payment Guides",
    footerLabel: "IMPS Payments",
    cta: "View payment guide",
  },
  {
    href: "/india-casino-payments",
    title: "India Casino Payment Methods",
    description:
      "Compare popular casino payment methods for Indian players, including crypto and local options.",
    category: "Payment Guides",
    footerLabel: "India Payments",
    cta: "View payment guide",
  },
  {
    href: "/bangladesh-casino-payments",
    title: "Bangladesh Casino Payment Methods",
    description:
      "Compare bKash, Nagad, bank transfer, and crypto options for Bangladeshi casino players.",
    category: "Payment Guides",
    footerLabel: "Bangladesh Payments",
    cta: "View payment guide",
  },
  {
    href: "/payment/bkash",
    title: "bKash Casino Payment Guide",
    description:
      "How bKash casino deposits may work — speed, security, limits, and alternatives for Bangladeshi players.",
    category: "Payment Guides",
    footerLabel: "bKash Payments",
    cta: "View payment guide",
  },
  {
    href: "/payment/nagad",
    title: "Nagad Casino Payment Guide",
    description:
      "Nagad casino deposits — wallet flow, security, withdrawal notes, and honest alternatives.",
    category: "Payment Guides",
    footerLabel: "Nagad Payments",
    cta: "View payment guide",
  },
  {
    href: "/compare",
    title: "Compare Online Casinos",
    description:
      "Compare casino brands by trust, bonuses, payments, speed, and player safety factors.",
    category: "Comparisons",
    footerLabel: "Compare Casinos",
    cta: "Compare options",
  },
] as const;

export type InternalSeoLink = (typeof internalSeoLinks)[number];

export function getInternalSeoHrefs(): string[] {
  return internalSeoLinks.map((link) => link.href);
}
