"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { goodCasinos, badCasinos } from "@/data/casinos";
import CasinoCard from "@/components/CasinoCard";

function CasinosContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "bad" ? "bad" : "good";
  const [tab, setTab] = useState<"good" | "bad">(initialTab);
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const casinos = tab === "good" ? goodCasinos : badCasinos;

  return (
    <div className="bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="section-title">{t("casinosTitle")}</h1>
          <p className="section-subtitle mx-auto">{t("casinosSubtitle")}</p>
        </div>

        <div className="mt-10 flex justify-center gap-4">
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
                ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                : "border border-gray-300 bg-white text-gray-700 hover:border-red-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
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

        <div className="mt-8 space-y-3">
          {casinos.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} />
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
