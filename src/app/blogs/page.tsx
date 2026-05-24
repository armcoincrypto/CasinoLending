"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import type { BlogFilter } from "@/lib/blog-utils";
import { blogPosts } from "@/data/blogs";
import BlogHero from "@/components/blogs/BlogHero";
import BlogCategoryFilter from "@/components/blogs/BlogCategoryFilter";
import BlogCard from "@/components/blogs/BlogCard";
import BlogsTrustBar from "@/components/blogs/BlogsTrustBar";
import BlogNewsletter from "@/components/blogs/BlogNewsletter";

const FEATURED_SLUG = "review-bet365";

export default function BlogsPage() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [filter, setFilter] = useState<BlogFilter>("all");

  const filters: { key: BlogFilter; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "good-casino", label: t("filterGood") },
    { key: "bad-casino", label: t("filterBad") },
    { key: "daily", label: t("filterDaily") },
  ];

  const filtered = useMemo(
    () => (filter === "all" ? blogPosts : blogPosts.filter((b) => b.category === filter)),
    [filter]
  );

  const getCategoryLabel = (category: (typeof blogPosts)[0]["category"]) => {
    if (category === "good-casino") return t("filterGood");
    if (category === "bad-casino") return t("filterBad");
    return t("filterDaily");
  };

  return (
    <div className="bg-gray-50 dark:bg-[#050A12]">
      <BlogHero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">{t("blogsTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">{t("blogsSubtitle")}</p>
        </div>

        <div className="mt-10">
          <BlogCategoryFilter active={filter} onChange={setFilter} labels={filters} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              categoryLabel={getCategoryLabel(post.category)}
              featured={post.slug === FEATURED_SLUG}
            />
          ))}
        </div>
      </section>

      <BlogsTrustBar />
      <BlogNewsletter />
    </div>
  );
}
