"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import GlassCard from "@/components/ui/GlassCard";

export default function TrustPillars() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  const pillars = [
    { title: t("featured1Title"), desc: t("featured1Desc"), icon: "🛡️" },
    { title: t("featured2Title"), desc: t("featured2Desc"), icon: "📊" },
    { title: t("featured3Title"), desc: t("featured3Desc"), icon: "⚡" },
    { title: t("featured4Title"), desc: t("featured4Desc"), icon: "🌏" },
  ];

  return (
    <section className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold text-white">
          {t("featuredTitle")}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="p-6 text-center h-full">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
