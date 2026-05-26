"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import SlotMachine from "@/components/casinos/SlotMachine";
import { goodCasinos } from "@/data/casinos";

const ORBIT = goodCasinos.slice(0, 12);

export default function BlogArenaHero() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-hero-premium py-12 sm:py-16">
      <div className="hero-orb hero-orb-gold" />
      <div className="absolute inset-0 bg-grid-premium opacity-25" />

      {["📖", "✍️", "🎯", "💡"].map((icon, i) => (
        <motion.span
          key={icon}
          className="pointer-events-none absolute text-3xl opacity-20"
          style={{ left: `${8 + i * 24}%`, top: `${20 + (i % 2) * 50}%` }}
          animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity }}
        >
          {icon}
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Expert Reviews
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              {t("blogsHeroTitle1")}{" "}
              <span className="gradient-text-premium">{t("blogsHeroTitle2")}</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-400">{t("blogsHeroSubtitle")}</p>
            <Link href="/casinos" className="btn-premium-primary mt-8 inline-flex">
              {t("blogsHeroCta")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative slot-video-screen rounded-2xl border border-white/10 bg-navy-950/80 p-4 backdrop-blur-sm sm:p-6"
          >
            <div className="slot-scanlines pointer-events-none absolute inset-0 rounded-2xl opacity-20" />
            <SlotMachine />
            <p className="mt-3 text-center text-xs text-slate-500">
              40+ casino reviews · daily updates · South Asia focus
            </p>
          </motion.div>
        </div>

        <div className="relative mt-14 h-32 overflow-hidden">
          <p className="mb-4 text-center text-sm text-slate-500">Featured review brands</p>
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...ORBIT, ...ORBIT].map((casino, i) => (
              <Link
                key={`${casino.slug}-${i}`}
                href={`/blogs/${casino.blogSlug}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-navy-900/80 px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                <span className="text-gold-400">★</span>
                {casino.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
