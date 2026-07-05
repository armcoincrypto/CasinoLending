import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import NewsListingClient from "./NewsListingClient";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Casino News India",
  description:
    "Latest online casino news for Indian players — payments, regulation, sports betting, crypto, and live casino updates.",
  path: "/news",
});

export default function NewsPage() {
  return <NewsListingClient />;
}
