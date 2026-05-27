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
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-green-600 p-6 text-left shadow-lg transition-all hover:shadow-xl hover:shadow-emerald-500/25 ${
          activeFilter === "good"
            ? "ring-4 ring-emerald-300 ring-offset-2 ring-offset-navy-950"
            : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.25),transparent_50%)]" />
        <div className="pointer-events-none absolute -inset-8 bg-[conic-gradient(from_90deg,rgba(16,185,129,0.0),rgba(16,185,129,0.35),rgba(16,185,129,0.0))] animate-spin-slow" />
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
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-danger-500 via-rose-500 to-red-700 p-6 text-left shadow-lg transition-all hover:shadow-xl hover:shadow-danger-500/25 ${
          activeFilter === "bad"
            ? "ring-4 ring-red-300 ring-offset-2 ring-offset-navy-950"
            : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.22),transparent_55%)]" />
        <div className="pointer-events-none absolute -inset-8 bg-[conic-gradient(from_90deg,rgba(239,68,68,0.0),rgba(239,68,68,0.35),rgba(239,68,68,0.0))] animate-spin-slow" />
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
