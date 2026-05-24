"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { parseCasinoFilter, type CasinoFilter } from "@/lib/casino-filter";
import { top40Casinos, goodCasinos, badCasinos } from "@/data/casinos";
import CasinoCard from "@/components/CasinoCard";
import CasinoCategoryBanners from "@/components/CasinoCategoryBanners";

function CasinosContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialFilter = parseCasinoFilter(searchParams.get("tab"));
  const [filter, setFilter] = useState<CasinoFilter>(initialFilter);
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  const casinos = useMemo(() => {
    if (filter === "good") return goodCasinos;
    if (filter === "bad") return badCasinos;
    return top40Casinos;
  }, [filter]);

  const selectFilter = (next: CasinoFilter) => {
    setFilter(next);
    const query = next === "all" ? "" : `?tab=${next}`;
    router.replace(`/casinos${query}`, { scroll: false });
  };

  const listHeading =
    filter === "good"
      ? t("listHeadingBest")
      : filter === "bad"
        ? t("listHeadingBad")
        : t("listHeadingAll");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            {t("casinosTitle")}
          </h1>
          <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-400">{t("casinosSubtitle")}</p>
        </header>

        <CasinoCategoryBanners activeFilter={filter} onSelectFilter={selectFilter} />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{listHeading}</h2>
          {filter !== "all" && (
            <button
              type="button"
              onClick={() => selectFilter("all")}
              className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              ← {t("viewAllCasinos")}
            </button>
          )}
        </div>

        {filter === "bad" && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
            <p className="font-semibold">{t("badCasinosDisclaimerTitle")}</p>
            <p className="mt-2">{t("badCasinosDisclaimer")}</p>
          </div>
        )}

        <div className="space-y-5">
          {casinos.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} variant="list" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CasinosPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <CasinosContent />
    </Suspense>
  );
}
