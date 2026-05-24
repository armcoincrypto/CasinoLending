import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 40 Online Casino Reviews for Indian Players | CasinoPulse India",
  description:
    "Compare the top 40 online casinos for Indian players. Expert reviews, best casino bonuses, safe real-money sites, and casinos to avoid — updated for 2026.",
  keywords: [
    "online casino India",
    "casino reviews Indian players",
    "best online casino",
    "top 40 casinos",
    "real money casino",
    "casino bonus India",
    "safe online casino",
  ],
  openGraph: {
    title: "Top 40 Online Casino Reviews | CasinoPulse India",
    description:
      "Expert online casino reviews for Indian players — top 40 rankings, best casinos, and sites to avoid.",
  },
};

export default function CasinosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
