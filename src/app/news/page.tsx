import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { fetchNewsArticles } from "@/lib/news-service";
import NewsListingClient from "./NewsListingClient";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Casino News India",
  description:
    "Latest online casino news for Indian players — payments, regulation, sports betting, crypto, and live casino updates.",
  path: "/news",
});

export default async function NewsPage() {
  const articles = await fetchNewsArticles();
  const hasBriefUpdates = articles.some((article) => article.indexable === false);

  return (
    <>
      {hasBriefUpdates && (
        <p className="mx-auto max-w-7xl px-4 pt-6 text-sm text-slate-500 sm:px-6 lg:px-8">
          Expanded reports appear first. Items in <strong className="text-slate-400">Brief updates</strong>{" "}
          are short notes labeled <strong className="text-slate-400">Brief update</strong> — not indexed in
          search.
        </p>
      )}
      <NewsListingClient initialArticles={articles} />
    </>
  );
}
