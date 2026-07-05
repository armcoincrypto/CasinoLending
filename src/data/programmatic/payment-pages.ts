import type { ProgrammaticPage } from "@/types/programmatic";

export const paymentPages: ProgrammaticPage[] = [
  {
    slug: "paytm",
    title: "Paytm Casino Deposits for Indian Players",
    metaDescription:
      "Guide to Paytm-friendly online casinos for Indian players. Learn deposit limits, alternatives when Paytm blocks gambling, UPI workarounds, and safe payment tips.",
    h1: "Paytm Online Casino Payments",
    intro:
      "Paytm remains one of India's most popular wallets, but gambling merchants are often restricted. This page explains how Indian players use Paytm-linked flows, what to expect from operators, and safer alternatives when direct Paytm casino deposits are unavailable.",
    sections: [
      {
        heading: "Can You Deposit with Paytm?",
        body: "Many international casinos cannot process Paytm directly due to RBI and wallet merchant category rules. Some operators route payments through third-party gateways — always verify the merchant name on your Paytm statement and avoid unlicensed intermediaries.",
      },
      {
        heading: "Limits and Verification",
        body: "Wallet KYC tiers cap monthly transaction volumes. Casinos may also require identity verification before your first withdrawal. Plan deposits within your verified limits and keep screenshots of successful transactions.",
      },
      {
        heading: "Alternatives When Paytm Is Blocked",
        body: "UPI via supported banks, IMPS, and cryptocurrency are common fallbacks for Indian players. Compare fees, processing time, and operator reputation before switching methods.",
      },
      {
        heading: "Safety Tips",
        body: "Never share OTPs or Paytm PINs with casino support. Use official apps only, enable app lock, and withdraw winnings promptly to your bank once verified.",
      },
    ],
    indexable: true,
    contentQuality: "expanded",
    keywords: ["Paytm casino", "Paytm gambling India", "UPI casino", "Indian casino payments"],
  },
];

export function getPaymentPageBySlug(slug: string): ProgrammaticPage | undefined {
  return paymentPages.find((page) => page.slug === slug);
}

export function getIndexablePaymentPages(): ProgrammaticPage[] {
  return paymentPages.filter(
    (page) => page.indexable && page.contentQuality === "expanded",
  );
}

export function getPaymentSlugsForStaticParams(): string[] {
  return getIndexablePaymentPages().map((page) => page.slug);
}
