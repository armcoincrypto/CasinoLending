"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { NewsArticle } from "@/types";

interface NewsDetailProps {
  article: NewsArticle;
}

function renderInlineContent(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link
          key={index}
          href={linkMatch[2]}
          className="font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          {linkMatch[1]}
        </Link>
      );
    }
    return part;
  });
}

export default function NewsDetail({ article }: NewsDetailProps) {
  const { locale } = useLocale();
  const content = getLocalizedText(article.content, locale);

  return (
    <article className="mt-6">
      <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
        {article.category}
      </span>

      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
        {getLocalizedText(article.title, locale)}
      </h1>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <span>{article.source}</span>
        <span>·</span>
        <time>{new Date(article.publishedAt).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN")}</time>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {getLocalizedText(article.excerpt, locale)}
      </p>

      <div className="mt-6 space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={i} className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("- ")) {
            return (
              <ul key={i} className="list-disc space-y-1 pl-6">
                {paragraph.split("\n").map((line, j) => (
                  <li key={j}>{renderInlineContent(line.replace("- ", ""))}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{renderInlineContent(paragraph)}</p>;
        })}
      </div>
    </article>
  );
}
