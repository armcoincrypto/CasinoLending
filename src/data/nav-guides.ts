export type NavGuideLink = {
  href: string;
  label: string;
  group: "Regional Hubs" | "Payment Methods" | "Crypto Guides";
};

export const navGuideLinks: NavGuideLink[] = [
  { href: "/india-casino-payments", label: "India Payments", group: "Regional Hubs" },
  { href: "/bangladesh-casino-payments", label: "Bangladesh Payments", group: "Regional Hubs" },
  { href: "/pakistan-casino-payments", label: "Pakistan Payments", group: "Regional Hubs" },
  { href: "/payment/upi", label: "UPI", group: "Payment Methods" },
  { href: "/payment/bkash", label: "bKash", group: "Payment Methods" },
  { href: "/payment/nagad", label: "Nagad", group: "Payment Methods" },
  { href: "/payment/jazzcash", label: "JazzCash", group: "Payment Methods" },
  { href: "/payment/easypaisa", label: "Easypaisa", group: "Payment Methods" },
  { href: "/crypto/usdt-casino", label: "USDT", group: "Crypto Guides" },
  { href: "/crypto/bitcoin-casino", label: "Bitcoin", group: "Crypto Guides" },
  { href: "/crypto/ethereum-casino", label: "Ethereum", group: "Crypto Guides" },
];

export const navGuideGroups = [
  "Regional Hubs",
  "Payment Methods",
  "Crypto Guides",
] as const;
