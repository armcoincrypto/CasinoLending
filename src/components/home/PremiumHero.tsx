"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import JackpotTicker from "./JackpotTicker";
import { isFeatureEnabled } from "@/config/features";

const ctas = [
  { href: "/casinos?tab=good", key: "heroCta" as const, primary: true },
  { href: "/#jackpot-winners", key: "heroCtaJackpots" as const, primary: false },
  { href: "/#bonus-tracker", key: "heroCtaBonuses" as const, primary: false },
  { href: "/#blacklist", key: "heroCtaSafety" as const, primary: false },
];

export default function PremiumHero() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <>
      {isFeatureEnabled("jackpotTicker") && <JackpotTicker />}
      <section className="relative overflow-hidden bg-hero-premium">
        <div className="hero-orb hero-orb-gold" />
        <div className="hero-orb hero-orb-emerald" />
        <div className="absolute inset-0 bg-grid-premium opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {t("trustedBy")}
            </div>

            <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("heroTitleMain")}{" "}
              <span className="gradient-text-premium">{t("heroTitleHighlight")}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              {t("heroSubtitle")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {ctas.map((cta, i) => (
                <motion.div
                  key={cta.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <Link
                    href={cta.href}
                    className={
                      cta.primary
                        ? "btn-premium-primary"
                        : "btn-premium-secondary"
                    }
                  >
                    {t(cta.key)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3"
          >
            {[
              { label: t("heroStatJackpots"), value: "$12.4M", sub: t("heroStatJackpotsSub") },
              { label: t("heroStatCasinos"), value: "40+", sub: t("heroStatCasinosSub") },
              { label: t("heroStatReaders"), value: "120K+", sub: t("heroStatReadersSub") },
            ].map((stat) => (
              <div key={stat.label} className="glass-card floating-card p-5 text-center">
                <p className="text-2xl font-bold text-gold-400">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
