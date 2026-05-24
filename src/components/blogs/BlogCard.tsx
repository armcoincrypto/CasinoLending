"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { blogCategoryStyle } from "@/lib/blog-utils";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  categoryLabel: string;
  featured?: boolean;
}

export default function BlogCard({ post, categoryLabel, featured }: BlogCardProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const styles = blogCategoryStyle(post.category);

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md dark:bg-[#0B121C] dark:shadow-none dark:hover:border-brand-500/50 ${
        featured
          ? "border-brand-500 ring-2 ring-brand-500/40 shadow-lg shadow-brand-500/10 dark:ring-brand-500/60"
          : "border-gray-200 dark:border-gray-800"
      }`}
    >
      <span className={`inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-semibold ${styles.pill}`}>
        {categoryLabel}
      </span>

      <h2 className="mt-4 text-lg font-bold leading-snug text-gray-900 sm:text-xl dark:text-white">
        {getLocalizedText(post.title, locale)}
      </h2>

      <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {getLocalizedText(post.excerpt, locale)}
      </p>

      <Link
        href={`/blogs/${post.slug}`}
        className="mt-6 block w-full rounded-xl bg-brand-600 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-500"
      >
        {t("readFullReview")}
      </Link>
    </article>
  );
}
