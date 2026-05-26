"use client";

import type { CasinoFilter } from "@/lib/casino-filter";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

interface CasinoCategoryBannersProps {
  activeFilter: CasinoFilter;
  onSelectFilter: (filter: "good" | "bad") => void;
}

export default function CasinoCategoryBanners({
  activeFilter,
  onSelectFilter,
}: CasinoCategoryBannersProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <button
        type="button"
        onClick={() => onSelectFilter("good")}
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 p-6 text-left shadow-lg transition-all hover:shadow-xl hover:shadow-emerald-500/20 ${
          activeFilter === "good"
            ? "ring-4 ring-emerald-300 ring-offset-2 ring-offset-navy-950"
            : ""
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl">
            🏆
          </span>
          <div>
            <h2 className="text-lg font-bold text-white">{t("bestCasinosBannerTitle")}</h2>
            <p className="mt-1 text-sm text-emerald-50">{t("bestCasinosBannerDesc")}</p>
          </div>
        </div>
        <span className="mt-5 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition group-hover:bg-emerald-50">
          {t("viewBestCasinos")} →
        </span>
      </button>

      <button
        type="button"
        onClick={() => onSelectFilter("bad")}
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 p-6 text-left shadow-lg transition-all hover:shadow-xl hover:shadow-red-500/20 ${
          activeFilter === "bad"
            ? "ring-4 ring-red-300 ring-offset-2 ring-offset-navy-950"
            : ""
        }`}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl">
            ⚠️
          </span>
          <div>
            <h2 className="text-lg font-bold text-white">{t("badCasinosBannerTitle")}</h2>
            <p className="mt-1 text-sm text-red-50">{t("badCasinosBannerDesc")}</p>
          </div>
        </div>
        <span className="mt-5 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition group-hover:bg-red-50">
          {t("viewBadCasinos")} →
        </span>
      </button>
    </div>
  );
}
