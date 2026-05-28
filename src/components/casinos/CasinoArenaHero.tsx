"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import SlotMachine from "./SlotMachine";
import OrbitingCasinos from "./OrbitingCasinos";

export default function CasinoArenaHero() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-hero-premium py-12 sm:py-16">
      <div className="hero-orb hero-orb-gold opacity-80" />
      <div className="hero-orb hero-orb-emerald opacity-60" />
      <div className="absolute inset-0 bg-grid-premium opacity-30" />

      {/* Floating chips */}
      {["♠", "♥", "♦", "♣"].map((suit, i) => (
        <motion.span
          key={suit}
          className="pointer-events-none absolute text-4xl text-gold-500/20 sm:text-5xl"
          style={{
            left: `${10 + i * 22}%`,
            top: `${15 + (i % 2) * 60}%`,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {suit}
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              {t("casinosArenaEyebrow")}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              {t("casinosTitle")}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-400">{t("casinosSubtitle")}</p>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { label: t("casinosStatReviews"), value: "40+" },
                { label: t("casinosStatLive"), value: "24/7" },
                { label: t("casinosStatTrust"), value: "★ 4.8" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-gold-400">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Slot "screen" with scanline effect */}
            <div className="slot-video-screen relative rounded-2xl border border-white/10 bg-navy-950/80 p-4 backdrop-blur-sm sm:p-6">
              <div className="slot-scanlines pointer-events-none absolute inset-0 rounded-2xl opacity-30" />
              <SlotMachine />
              <p className="mt-4 text-center text-xs text-slate-500">
                {t("casinosSlotDisclaimer")}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-14 overflow-visible"
        >
          <p className="mb-8 text-center text-sm font-medium text-slate-400 sm:text-base">
            {t("casinosOrbitLabel")}
          </p>
          <OrbitingCasinos />
        </motion.div>
      </div>
    </section>
  );
}
