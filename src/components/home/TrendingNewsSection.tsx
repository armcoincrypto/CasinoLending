"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trendingNews } from "@/data/trending-news";
import { formatCompactNumber } from "@/lib/format";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonBadge from "@/components/ui/NeonBadge";

const categoryLabels: Record<string, string> = {
  jackpots: "Jackpots",
  regulations: "Regulations",
  "casino-launches": "Launches",
  "crypto-casinos": "Crypto",
  "esports-betting": "Esports",
  "vip-stories": "VIP",
  scandals: "Scandals",
  "bonus-campaigns": "Bonuses",
};

export default function TrendingNewsSection() {
  return (
    <section className="bg-navy-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Editorial"
          title="Trending Casino News"
          subtitle="Breaking stories ranked by views, engagement, and trend score."
          href="/news"
          linkLabel="Full news desk"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingNews.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/news/${article.id.replace("tn-", "news-")}`}>
                <GlassCard className="group h-full p-5 transition-all hover:border-gold-500/30">
                  <div className="flex items-center justify-between gap-2">
                    <NeonBadge variant="emerald">
                      {categoryLabels[article.category] ?? article.category}
                    </NeonBadge>
                    <span className="text-xs font-bold text-gold-400">
                      {article.trendingScore} trend
                    </span>
                  </div>
                  <h3 className="mt-4 line-clamp-2 text-lg font-semibold text-white group-hover:text-gold-300">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-600">
                    <span>{article.readTime} min read</span>
                    <span>{formatCompactNumber(article.views)} views</span>
                  </div>
                </GlassCard>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
