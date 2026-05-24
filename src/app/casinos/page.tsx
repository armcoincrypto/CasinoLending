"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { goodCasinos, badCasinos } from "@/data/casinos";
import CasinoCard from "@/components/CasinoCard";
import CasinoRankingsTable from "@/components/CasinoRankingsTable";

function CasinosContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "bad" ? "bad" : "good";
  const [tab, setTab] = useState<"good" | "bad">(initialTab);
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const casinos = tab === "good" ? goodCasinos : badCasinos;

  return (
    <div className="bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="section-title">{t("casinosTitle")}</h1>
          <p className="section-subtitle mx-auto">{t("casinosSubtitle")}</p>
        </div>

        <CasinoRankingsTable />

        <div className="border-t border-gray-200 pt-10 dark:border-gray-700">
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setTab("good")}
              className={`rounded-xl px-8 py-3 text-sm font-semibold transition-all ${
                tab === "good"
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-green-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {t("goodCasinosBtn")}
            </button>
            <button
              type="button"
              onClick={() => setTab("bad")}
              className={`rounded-xl px-8 py-3 text-sm font-semibold transition-all ${
                tab === "bad"
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/25"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-amber-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {t("badCasinosBtn")}
            </button>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {tab === "good" ? t("goodCasinosHeading") : t("badCasinosHeading")}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {tab === "good" ? t("goodCasinosDesc") : t("badCasinosDesc")}
            </p>
          </div>

          {tab === "bad" && (
            <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
              <p className="font-semibold">{t("badCasinosDisclaimerTitle")}</p>
              <p className="mt-2">{t("badCasinosDisclaimer")}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-amber-800 dark:text-amber-300">
                <li>{t("badTopicKyc")}</li>
                <li>{t("badTopicWithdrawals")}</li>
                <li>{t("badTopicBonus")}</li>
                <li>{t("badTopicAccounts")}</li>
                <li>{t("badTopicSupport")}</li>
                <li>{t("badTopicRegional")}</li>
              </ul>
            </div>
          )}

          <div className="mt-8 space-y-3">
            {casinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
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
