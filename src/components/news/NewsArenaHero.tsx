"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { NEWS_CATEGORIES } from "@/lib/news-utils";

const ORBIT_CATS = NEWS_CATEGORIES.filter((c) => c !== "All News").slice(0, 8);

export default function OrbitingNewsCategories() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,380px)]">
      <div className="absolute inset-[20%] rounded-full border border-emerald-500/20 bg-emerald-500/5" />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_CATS.map((cat, i) => {
          const angle = (360 / ORBIT_CATS.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 44 * Math.cos(rad);
          const y = 50 + 44 * Math.sin(rad);
          return (
            <motion.span
              key={cat}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-navy-900/90 px-3 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md">
                {cat}
              </span>
            </motion.span>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl">📡</span>
      </div>
    </div>
  );
}

export function NewsArenaHero() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-hero-premium py-12 sm:py-16">
      <div className="hero-orb hero-orb-emerald opacity-70" />
      <div className="absolute inset-0 bg-grid-premium opacity-25" />

      <motion.div
        className="border-y border-emerald-500/20 bg-navy-950/60 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.p
          className="mx-auto max-w-7xl truncate px-4 text-center text-sm text-emerald-300"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔴 BREAKING — Live casino news desk · South Asia · Updated hourly
        </motion.p>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              {t("newsHeroInsight")}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              {t("newsHeroTitle1")}{" "}
              <span className="gradient-text-premium">{t("newsHeroTitle2")}</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-400">{t("newsHeroSubtitle")}</p>
            <Link href="/#jackpot-winners" className="btn-premium-primary mt-8 inline-flex">
              {t("trendingNews")} →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <p className="mb-4 text-center text-sm text-slate-500">Live coverage categories</p>
            <OrbitingNewsCategories />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
