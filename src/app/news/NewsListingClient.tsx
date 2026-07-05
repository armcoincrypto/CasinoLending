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

function sortByDateDesc(a: NewsArticle, b: NewsArticle) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

interface NewsListingClientProps {
  initialArticles: NewsArticle[];
}

export default function NewsListingClient({ initialArticles }: NewsListingClientProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<NewsCategory>("All News");

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (data.articles?.length) {
          setArticles(data.articles);
        }
      })
      .catch(() => undefined);
  }, []);

  const filtered = useMemo(() => {
    if (category === "All News") return articles;
    return articles.filter((a) => a.category === category);
  }, [articles, category]);

  const featuredArticles = useMemo(
    () => filtered.filter((a) => a.indexable !== false).sort(sortByDateDesc),
    [filtered]
  );

  const briefArticles = useMemo(
    () => filtered.filter((a) => a.indexable === false).sort(sortByDateDesc),
    [filtered]
  );

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
              <div className="space-y-12">
                {featuredArticles.length > 0 && (
                  <section>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {featuredArticles.map((article, i) => (
                        <motion.div
                          key={article.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: Math.min(i * 0.05, 0.3) }}
                        >
                          <NewsCard article={article} variant="featured" />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {briefArticles.length > 0 && (
                  <section>
                    <h2 className="mb-2 text-lg font-semibold text-white">Brief updates</h2>
                    <p className="mb-6 text-sm text-slate-500">
                      Short editorial notes — not full reports. These pages are not indexed in search.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {briefArticles.map((article, i) => (
                        <motion.div
                          key={article.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: Math.min(i * 0.05, 0.3) }}
                        >
                          <NewsCard article={article} variant="brief" />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}
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
