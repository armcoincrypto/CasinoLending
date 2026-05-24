"use client";

import Link from "next/link";
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

  if (variant === "list") {
    return (
      <article className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:gap-6 sm:p-7 dark:border-gray-700 dark:bg-gray-800/80">
        <Link
          href={`/go/${casino.slug}`}
          className="flex-shrink-0 transition-transform hover:scale-[1.02]"
          title={t("playNow")}
        >
          <CasinoLogo
            name={casino.name}
            slug={casino.slug}
            logo={casino.logo}
            type={casino.type}
            variant="wide"
          />
        </Link>

        <div className="min-w-0 flex-1 py-0.5">
          <Link href={`/blogs/${casino.blogSlug}`}>
            <h3 className="text-xl font-bold text-brand-600 hover:text-brand-700 sm:text-2xl dark:text-brand-400 dark:hover:text-brand-300">
              {casino.name}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-3 text-base leading-relaxed text-gray-600 sm:text-[1.05rem] dark:text-gray-400">
            {getLocalizedText(casino.summary, locale)}
          </p>
        </div>

        <Link
          href={`/blogs/${casino.blogSlug}`}
          className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 sm:w-auto sm:min-w-[10.5rem]"
        >
          {t("readMore")} →
        </Link>
      </article>
    );
  }

  const isGood = casino.type === "good";
  const isBad = casino.type === "bad";

  const borderClass = isGood
    ? "border-green-200 bg-white hover:border-green-300 dark:border-green-900/50 dark:bg-gray-800/50"
    : isBad
      ? "border-amber-200 bg-white hover:border-amber-300 dark:border-amber-900/50 dark:bg-gray-800/50"
      : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800/50";

  const badgeClass = isGood
    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    : isBad
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";

  return (
    <article
      className={`group flex items-center gap-4 rounded-xl border p-4 transition-all hover:shadow-md ${borderClass}`}
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
            <span className="text-sm font-medium text-gray-500">#{casino.rank}</span>
            <h3 className="truncate font-semibold text-gray-900 dark:text-white">{casino.name}</h3>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badgeClass}`}>
              {casino.rating}/5
            </span>
          </div>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {getLocalizedText(casino.summary, locale)}
        </p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          <span>
            <strong className="text-gray-700 dark:text-gray-300">{t("bonus")}:</strong>{" "}
            {getLocalizedText(casino.bonus, locale)}
          </span>
        </div>
      </div>

      <Link
        href={`/blogs/${casino.blogSlug}`}
        className="flex-shrink-0 rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-400"
      >
        {t("readMore")}
      </Link>
    </article>
  );
}
