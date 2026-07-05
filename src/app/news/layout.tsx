import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Casino News India",
  description:
    "Latest online casino news for Indian players — payments, regulation, sports betting, crypto, and live casino updates.",
  path: "/news",
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
