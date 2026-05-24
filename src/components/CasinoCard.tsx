"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { Casino } from "@/types";
import CasinoLogo from "./CasinoLogo";

interface CasinoCardProps {
  casino: Casino;
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const isGood = casino.type === "good";

  return (
    <article
      className={`group flex items-center gap-4 rounded-xl border p-4 transition-all hover:shadow-md ${
        isGood
          ? "border-green-200 bg-white hover:border-green-300 dark:border-green-900/50 dark:bg-gray-800/50 dark:hover:border-green-800"
          : "border-red-200 bg-white hover:border-red-300 dark:border-red-900/50 dark:bg-gray-800/50 dark:hover:border-red-800"
      }`}
    >
      <Link
        href={`/go/${casino.slug}`}
        className="flex-shrink-0 transition-transform group-hover:scale-105"
        title={t("playNow")}
      >
        <CasinoLogo name={casino.name} rank={casino.rank} type={casino.type} />
      </Link>

      <div className="min-w-0 flex-1">
        <Link href={`/go/${casino.slug}`} className="block">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-semibold text-gray-900 dark:text-white">{casino.name}</h3>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                isGood
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {casino.rating}/5
            </span>
          </div>
        </Link>

        <Link href={`/go/${casino.slug}`} className="mt-1 block">
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
            {getLocalizedText(casino.summary, locale)}
          </p>
        </Link>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          <span>
            <strong className="text-gray-700 dark:text-gray-300">{t("bonus")}:</strong>{" "}
            {getLocalizedText(casino.bonus, locale)}
          </span>
          <span className="hidden sm:inline">
            <strong className="text-gray-700 dark:text-gray-300">{t("withdrawal")}:</strong>{" "}
            {getLocalizedText(casino.withdrawal, locale)}
          </span>
        </div>
      </div>

      <Link
        href={`/blogs/${casino.blogSlug}`}
        className="flex-shrink-0 rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400 dark:hover:bg-brand-900/50"
      >
        {t("readMore")}
      </Link>
    </article>
  );
}
