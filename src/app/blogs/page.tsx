"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { blogPosts } from "@/data/blogs";
import { BlogPost } from "@/types";

type Filter = "all" | BlogPost["category"];

export default function BlogsPage() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? blogPosts : blogPosts.filter((b) => b.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "good-casino", label: t("filterGood") },
    { key: "bad-casino", label: t("filterBad") },
    { key: "daily", label: t("filterDaily") },
  ];

  return (
    <div className="bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="section-title">{t("blogsTitle")}</h1>
          <p className="section-subtitle mx-auto">{t("blogsSubtitle")}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f.key
                  ? "bg-brand-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="card group hover:border-brand-300 dark:hover:border-brand-700"
            >
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  post.category === "good-casino"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : post.category === "bad-casino"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                }`}
              >
                {post.category === "good-casino"
                  ? t("filterGood")
                  : post.category === "bad-casino"
                    ? t("filterBad")
                    : t("filterDaily")}
              </span>
              <h2 className="mt-3 font-semibold text-gray-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                {getLocalizedText(post.title, locale)}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                {getLocalizedText(post.excerpt, locale)}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>
                  {post.readTime} {t("minRead")}
                </span>
                <time>
                  {new Date(post.publishedAt).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN")}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}