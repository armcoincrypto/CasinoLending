"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { categoryStyles, formatTimeAgo } from "@/lib/news-utils";
import { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const { locale } = useLocale();
  const styles = categoryStyles(article.category);
  const title = getLocalizedText(article.title, locale);
  const excerpt = getLocalizedText(article.excerpt, locale);

  return (
    <Link
      href={`/news/${article.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:border-brand-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/50"
    >
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${styles.image}`}
      >
        <span className="text-6xl opacity-90 drop-shadow-lg">{styles.icon}</span>
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles.pill}`}>
            {article.category}
          </span>
          <span className="rounded-full bg-black/30 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
            {formatTimeAgo(article.publishedAt, locale)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
          {title}
        </h2>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-700">
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-GB")}
          </time>
          <span className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-300">
            {article.source}
            <svg className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
