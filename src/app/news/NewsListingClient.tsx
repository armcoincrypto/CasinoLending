"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import type { NewsCategory } from "@/lib/news-utils";
import { NewsArticle } from "@/types";
import { NewsArenaHero } from "@/components/news/NewsArenaHero";
import NewsCategoryFilter from "@/components/news/NewsCategoryFilter";
import NewsCard from "@/components/news/NewsCard";
import NewsSidebar from "@/components/news/NewsSidebar";
import NewsTrustBar from "@/components/news/NewsTrustBar";

export default function NewsListingClient() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<NewsCategory>("All News");

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (category === "All News") return articles;
    return articles.filter((a) => a.category === category);
  }, [articles, category]);

  return (
    <div className="min-h-screen bg-navy-950">
      <NewsArenaHero />
      <NewsCategoryFilter active={category} onChange={setCategory} />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            {loading ? (
              <div className="py-20 text-center text-slate-500">{t("loadingNews")}</div>
            ) : filtered.length === 0 ? (
              <div className="py-20 text-center text-slate-500">{t("noNewsInCategory")}</div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((article, i) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  >
                    <NewsCard article={article} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <NewsSidebar articles={articles} />
        </div>
      </div>

      <NewsTrustBar />
    </div>
  );
}
