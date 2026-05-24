"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { goodCasinos } from "@/data/casinos";
import { NewsArticle } from "@/types";
import { categoryStyles } from "@/lib/news-utils";

interface NewsSidebarProps {
  articles: NewsArticle[];
}

export default function NewsSidebar({ articles }: NewsSidebarProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const trending = articles.slice(0, 5);
  const latest = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 4);
  const promos = goodCasinos.slice(0, 4);

  return (
    <aside className="space-y-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t("trendingNews")}</h3>
        <p className="mt-1 text-xs text-gray-500">{t("popularTopics")}</p>
        <ul className="mt-4 space-y-3">
          {trending.map((article, i) => {
            const styles = categoryStyles(article.category);
            return (
              <li key={article.id}>
                <Link
                  href={`/news/${article.id}`}
                  className="group flex gap-3"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${styles.pill}`}>
                      {article.category}
                    </span>
                    <p className="mt-1 line-clamp-2 text-sm font-medium text-gray-800 group-hover:text-brand-600 dark:text-gray-200">
                      {getLocalizedText(article.title, locale)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t("latestUpdates")}</h3>
        <ul className="mt-4 space-y-3">
          {latest.map((article) => (
            <li key={article.id}>
              <Link
                href={`/news/${article.id}`}
                className="block text-sm font-medium text-gray-700 hover:text-brand-600 dark:text-gray-300"
              >
                <span className="line-clamp-2">{getLocalizedText(article.title, locale)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t("topPromotions")}</h3>
        <ul className="mt-4 space-y-3">
          {promos.map((casino) => (
            <li key={casino.id}>
              <Link
                href={`/go/${casino.slug}`}
                className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition hover:border-brand-200 hover:bg-brand-50/50 dark:border-gray-700"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-amber-500 text-xs font-bold text-white">
                  {casino.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                    {casino.name}
                  </p>
                  <p className="text-xs text-gray-500">{t("exclusiveOffers")}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/casinos"
          className="mt-4 block w-full rounded-xl border border-gray-200 py-2.5 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300"
        >
          {t("showMore")}
        </Link>
      </div>
    </aside>
  );
}
