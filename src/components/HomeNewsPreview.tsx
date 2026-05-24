"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { sampleNews } from "@/data/news";

export default function HomeNewsPreview() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const preview = sampleNews.slice(0, 3);

  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">{t("newsTitle")}</h2>
            <p className="section-subtitle">{t("newsSubtitle")}</p>
          </div>
          <Link href="/news" className="btn-secondary hidden sm:inline-flex">
            {t("heroSecondary")}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {preview.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="card group hover:border-brand-300 dark:hover:border-brand-700"
            >
              <span className="inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                {article.category}
              </span>
              <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                {getLocalizedText(article.title, locale)}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {getLocalizedText(article.excerpt, locale)}
              </p>
              <time className="mt-3 block text-xs text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN")}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
