"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import type { BlogFilter } from "@/lib/blog-utils";
import { blogPosts } from "@/data/blogs";
import BlogArenaHero from "@/components/blogs/BlogArenaHero";
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
    { key: "ranking-casino", label: t("filterRanked") },
    { key: "daily", label: t("filterDaily") },
  ];

  const filtered = useMemo(
    () => (filter === "all" ? blogPosts : blogPosts.filter((b) => b.category === filter)),
    [filter]
  );

  const getCategoryLabel = (category: (typeof blogPosts)[0]["category"]) => {
    if (category === "good-casino") return t("filterGood");
    if (category === "bad-casino") return t("filterBad");
    if (category === "ranking-casino") return t("filterRanked");
    return t("filterDaily");
  };

  return (
    <div className="min-h-screen bg-navy-950">
      <BlogArenaHero />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{t("blogsTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">{t("blogsSubtitle")}</p>
        </div>

        <div className="mt-10">
          <BlogCategoryFilter active={filter} onChange={setFilter} labels={filters} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.04, 0.35) }}
            >
              <BlogCard
                post={post}
                categoryLabel={getCategoryLabel(post.category)}
                featured={post.slug === FEATURED_SLUG}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <BlogsTrustBar />
      <BlogNewsletter />
    </div>
  );
}
