"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { Casino } from "@/types";
import CasinoLogo from "./CasinoLogo";

interface CasinoCardProps {
  casino: Casino;
  variant?: "default" | "list";
}

export default function CasinoCard({ casino, variant = "list" }: CasinoCardProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  const isGood = casino.type === "good";
  const isBad = casino.type === "bad";

  const glowClass = isGood
    ? "hover:border-emerald-500/40 hover:shadow-glow-emerald"
    : isBad
      ? "hover:border-danger-500/40 hover:shadow-glow-danger"
      : "hover:border-gold-500/40 hover:shadow-glow-gold";

  const rankBadge = isGood
    ? "bg-emerald-500/20 text-emerald-300"
    : isBad
      ? "bg-danger-500/20 text-danger-300"
      : "bg-gold-500/20 text-gold-300";

  if (variant === "list") {
    return (
      <motion.article
        whileHover={{ scale: 1.01 }}
        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all sm:flex sm:items-center sm:gap-6 sm:p-7 ${glowClass}`}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/5 blur-2xl transition-opacity group-hover:opacity-100" />

        <Link
          href={`/go/${casino.slug}`}
          className="relative flex-shrink-0 transition-transform group-hover:scale-[1.03]"
          title={t("playNow")}
        >
          <CasinoLogo
            name={casino.name}
            slug={casino.slug}
            rank={casino.rank}
            type={casino.type}
            variant="wide"
          />
        </Link>

        <div className="relative min-w-0 flex-1 py-2 sm:py-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${rankBadge}`}>
              #{casino.rank}
            </span>
            <span className="text-xs text-slate-500">★ {casino.rating}/5</span>
          </div>
          <Link href={`/blogs/${casino.blogSlug}`}>
            <h3 className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-gold-300 sm:text-2xl">
              {casino.name}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-3 text-base leading-relaxed text-slate-400">
            {getLocalizedText(casino.summary, locale)}
          </p>
          <p className="mt-3 text-sm text-slate-500">
            <span className="font-medium text-emerald-400/90">{t("bonus")}:</span>{" "}
            {getLocalizedText(casino.bonus, locale)}
          </p>
        </div>

        <div className="relative mt-4 flex flex-col gap-2 sm:mt-0 sm:flex-shrink-0">
          <Link href={`/go/${casino.slug}`} className="btn-premium-primary text-center sm:min-w-[10rem]">
            {t("playNow")}
          </Link>
          <Link
            href={`/blogs/${casino.blogSlug}`}
            className="rounded-xl border border-white/10 px-6 py-2.5 text-center text-sm font-semibold text-slate-300 transition-colors hover:border-gold-500/40 hover:text-gold-300"
          >
            {t("readMore")} →
          </Link>
        </div>
      </motion.article>
    );
  }

  return (
    <article
      className={`group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all ${glowClass}`}
    >
      <Link href={`/go/${casino.slug}`} className="flex-shrink-0" title={t("playNow")}>
        <CasinoLogo
          name={casino.name}
          slug={casino.slug}
          logo={casino.logo}
          rank={casino.rank}
          type={casino.type}
        />
      </Link>

      <div className="min-w-0 flex-1">
        <Link href={`/go/${casino.slug}`} className="block">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500">#{casino.rank}</span>
            <h3 className="truncate font-semibold text-white">{casino.name}</h3>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${rankBadge}`}>
              {casino.rating}/5
            </span>
          </div>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-slate-400">
          {getLocalizedText(casino.summary, locale)}
        </p>
      </div>

      <Link
        href={`/blogs/${casino.blogSlug}`}
        className="flex-shrink-0 rounded-lg border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-medium text-gold-300"
      >
        {t("readMore")}
      </Link>
    </article>
  );
}
