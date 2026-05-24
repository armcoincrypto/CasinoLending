"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { goodCasinos, badCasinos } from "@/data/casinos";
import CasinoCard from "@/components/CasinoCard";
import CasinoCategoryBanners from "@/components/CasinoCategoryBanners";
import CasinoRankingsTable from "@/components/CasinoRankingsTable";

function CasinosContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "bad" ? "bad" : "good";
  const [tab, setTab] = useState<"good" | "bad">(initialTab);
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const casinos = tab === "good" ? goodCasinos : badCasinos;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <CasinoCategoryBanners activeTab={tab} onSelectTab={setTab} />

        {tab === "bad" && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
            <p className="font-semibold">{t("badCasinosDisclaimerTitle")}</p>
            <p className="mt-2">{t("badCasinosDisclaimer")}</p>
          </div>
        )}

        <div className="space-y-4">
          {casinos.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} variant="list" />
          ))}
        </div>

        <div className="border-t border-gray-200 pt-10 dark:border-gray-700">
          <CasinoRankingsTable />
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
