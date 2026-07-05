"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { categoryStyles, formatTimeAgo } from "@/lib/news-utils";
import { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
  variant?: "featured" | "brief";
}

export default function NewsCard({ article, variant = "featured" }: NewsCardProps) {
  const { locale } = useLocale();
  const styles = categoryStyles(article.category);
  const title = getLocalizedText(article.title, locale);
  const excerpt = getLocalizedText(article.excerpt, locale);
  const isBrief = variant === "brief" || article.indexable === false;

  return (
    <Link href={`/news/${article.id}`} className="group block h-full">
      <motion.article
        whileHover={{ scale: 1.02, y: -4 }}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:shadow-glow-emerald"
      >
        <div
          className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${styles.image} opacity-90`}
        >
          <motion.span
            className="text-6xl drop-shadow-lg"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {styles.icon}
          </motion.span>
          <div className="absolute left-3 top-3 flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles.pill}`}>
              {article.category}
            </span>
            {isBrief && (
              <span className="rounded-full border border-slate-500/40 bg-navy-950/70 px-2.5 py-1 text-xs font-semibold text-slate-300 backdrop-blur">
                Brief update
              </span>
            )}
            <span className="rounded-full border border-white/20 bg-navy-950/60 px-2 py-0.5 text-xs font-medium text-slate-200 backdrop-blur">
              {formatTimeAgo(article.publishedAt, locale)}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h2 className="line-clamp-2 text-lg font-bold leading-snug text-white group-hover:text-emerald-300">
            {title}
          </h2>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">
            {excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-GB")}
            </time>
            <span className="font-medium text-emerald-400/90">{article.source}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
