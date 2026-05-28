"use client";

import type { CasinoFilter } from "@/lib/casino-filter";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import LoopingBannerText from "@/components/casinos/LoopingBannerText";
import BannerCta from "@/components/casinos/BannerCta";

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
        style={{ backgroundColor: "#378A2E" }}
        className={`group relative overflow-hidden rounded-2xl p-6 text-left shadow-lg transition-all hover:brightness-110 hover:shadow-[0_12px_40px_rgba(55,138,46,0.45)] ${
          activeFilter === "good"
            ? "ring-4 ring-gold-400 ring-offset-2 ring-offset-navy-950"
            : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.22),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/20 text-2xl shadow-inner">
            🏆
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {t("bestCasinosBannerTitle")}
            </h2>
            <LoopingBannerText text={t("bestCasinosBannerDesc")} maskColor="#378A2E" />
          </div>
        </div>

        <BannerCta label={t("viewBestCasinosCta")} variant="green" />
      </button>

      <button
        type="button"
        onClick={() => onSelectFilter("bad")}
        style={{ backgroundColor: "#BF0000" }}
        className={`group relative overflow-hidden rounded-2xl p-6 text-left shadow-lg transition-all hover:brightness-110 hover:shadow-[0_12px_40px_rgba(191,0,0,0.5)] ${
          activeFilter === "bad"
            ? "ring-4 ring-red-200 ring-offset-2 ring-offset-navy-950"
            : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/20 text-2xl shadow-inner">
            ⚠️
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {t("badCasinosBannerTitle")}
            </h2>
            <LoopingBannerText text={t("badCasinosBannerDesc")} maskColor="#BF0000" />
          </div>
        </div>

        <BannerCta label={t("viewBadCasinosCta")} variant="red" />
      </button>
    </div>
  );
}
