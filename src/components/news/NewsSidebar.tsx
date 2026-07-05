"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { goodCasinos } from "@/data/casinos";
import { NewsArticle } from "@/types";
import { categoryStyles } from "@/lib/news-utils";
import GlassCard from "@/components/ui/GlassCard";

interface NewsSidebarProps {
  articles: NewsArticle[];
}

export default function NewsSidebar({ articles }: NewsSidebarProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const indexableArticles = articles.filter((article) => article.indexable !== false);
  const trending = indexableArticles.slice(0, 5);
  const latest = [...indexableArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4);
  const promos = goodCasinos.slice(0, 4);

  return (
    <aside className="space-y-6">
      <GlassCard className="p-5">
        <h3 className="text-lg font-bold text-white">{t("trendingNews")}</h3>
        <p className="mt-1 text-xs text-slate-500">{t("popularTopics")}</p>
        <ul className="mt-4 space-y-3">
          {trending.map((article, i) => {
            const styles = categoryStyles(article.category);
            return (
              <li key={article.id}>
                <Link href={`/news/${article.id}`} className="group flex gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-sm font-bold text-emerald-300">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${styles.pill}`}>
                      {article.category}
                    </span>
                    <p className="mt-1 line-clamp-2 text-sm font-medium text-slate-300 group-hover:text-emerald-300">
                      {getLocalizedText(article.title, locale)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </GlassCard>

      <GlassCard className="p-5">
        <h3 className="text-lg font-bold text-white">{t("latestUpdates")}</h3>
        <ul className="mt-4 space-y-3">
          {latest.map((article) => (
            <li key={article.id}>
              <Link
                href={`/news/${article.id}`}
                className="block text-sm font-medium text-slate-400 hover:text-emerald-300"
              >
                <span className="line-clamp-2">{getLocalizedText(article.title, locale)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </GlassCard>

      <GlassCard glow="gold" className="p-5">
        <h3 className="text-lg font-bold text-white">{t("topPromotions")}</h3>
        <ul className="mt-4 space-y-3">
          {promos.map((casino) => (
            <li key={casino.id}>
              <Link
                href={`/go/${casino.slug}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 p-3 transition hover:border-gold-500/40"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 text-xs font-bold text-navy-950">
                  {casino.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{casino.name}</p>
                  <p className="text-xs text-slate-500">{t("exclusiveOffers")}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/casinos"
          className="mt-4 block w-full rounded-xl border border-white/10 py-2.5 text-center text-sm font-semibold text-gold-400 hover:border-gold-500/40"
        >
          {t("showMore")}
        </Link>
      </GlassCard>
    </aside>
  );
}
