"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { NewsArticle } from "@/types";

export default function NewsPage() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="section-title">{t("newsTitle")}</h1>
          <p className="section-subtitle mx-auto">{t("newsSubtitle")}</p>
          <p className="mt-2 text-xs text-gray-500">{t("autoNews")}</p>
        </div>

        {loading ? (
          <div className="mt-12 text-center text-gray-500">Loading news...</div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="card group hover:border-brand-300 dark:hover:border-brand-700"
              >
                <span className="inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  {article.category}
                </span>
                <h2 className="mt-3 font-semibold text-gray-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                  {getLocalizedText(article.title, locale)}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                  {getLocalizedText(article.excerpt, locale)}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{article.source}</span>
                  <time>
                    {new Date(article.publishedAt).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN")}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
