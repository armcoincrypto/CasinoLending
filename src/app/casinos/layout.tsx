import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Top 40 Online Casino Reviews for Indian Players",
    description:
      "Compare the top 40 online casinos for Indian players. Expert reviews, best casino bonuses, safe real-money sites, and casinos to avoid — updated for 2026.",
    path: "/casinos",
  }),
  keywords: [
    "online casino India",
    "casino reviews Indian players",
    "best online casino",
    "top 40 casinos",
    "real money casino",
    "casino bonus India",
    "safe online casino",
  ],
};

export default function CasinosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
