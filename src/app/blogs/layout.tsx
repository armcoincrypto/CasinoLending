import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Casino Reviews & Expert Blogs",
  description:
    "In-depth online casino reviews, bonus guides, and daily tips for Indian real-money players. Stake, Bet365, Roobet and more.",
  path: "/blogs",
});

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
