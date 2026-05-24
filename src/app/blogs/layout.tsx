import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casino Reviews & Expert Blogs | CasinoPulse India",
  description:
    "In-depth online casino reviews, bonus guides, and daily tips for Indian real-money players. Stake, Bet365, Roobet and more.",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
