"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { parseCasinoFilter, type CasinoFilter } from "@/lib/casino-filter";
import { top40Casinos, goodCasinos, badCasinos } from "@/data/casinos";
import CasinoCategoryBanners from "@/components/CasinoCategoryBanners";
import CasinoArenaHero from "@/components/casinos/CasinoArenaHero";
import CasinoListSection from "@/components/casinos/CasinoListSection";

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
    <div className="min-h-screen bg-navy-950">
      <CasinoArenaHero />

      <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
        <CasinoCategoryBanners activeFilter={filter} onSelectFilter={selectFilter} />

        <div className="flex flex-wrap items-center justify-between gap-3">
          {filter !== "all" && (
            <button
              type="button"
              onClick={() => selectFilter("all")}
              className="text-sm font-medium text-gold-400 hover:text-gold-300"
            >
              ← {t("viewAllCasinos")}
            </button>
          )}
        </div>

        <CasinoListSection
          casinos={casinos}
          listHeading={listHeading}
          showDisclaimer={filter === "bad"}
          disclaimerTitle={filter === "bad" ? t("badCasinosDisclaimerTitle") : undefined}
          disclaimerText={filter === "bad" ? t("badCasinosDisclaimer") : undefined}
        />
      </div>
    </div>
  );
}

export default function CasinosPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-navy-950 text-slate-400">
          Loading casinos...
        </div>
      }
    >
      <CasinosContent />
    </Suspense>
  );
}
