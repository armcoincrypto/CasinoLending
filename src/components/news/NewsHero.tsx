"use client";

import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

export default function NewsHero() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            <span className="text-white">{t("newsHeroTitle1")}</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {t("newsHeroTitle2")}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">{t("newsHeroSubtitle")}</p>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              {t("autoNews")}
            </span>
            <span>•</span>
            <span>{t("newsHeroInsight")}</span>
          </p>
        </div>

        <div className="relative mx-auto flex h-56 w-full max-w-md items-center justify-center lg:h-72 lg:max-w-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/30 to-purple-600/20 blur-3xl" />
          <div className="relative flex items-center justify-center gap-4">
            <div className="flex h-48 w-28 flex-col items-center justify-center rounded-3xl border border-white/20 bg-slate-800/80 p-3 shadow-2xl backdrop-blur sm:h-56 sm:w-32">
              <div className="mb-2 text-3xl">🎰</div>
              <div className="h-2 w-full rounded bg-white/20" />
              <div className="mt-2 h-16 w-full rounded-lg bg-gradient-to-b from-brand-500 to-amber-600" />
              <div className="mt-2 grid w-full grid-cols-3 gap-1">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-4 rounded bg-white/15" />
                ))}
              </div>
            </div>
            <div className="hidden flex-col gap-3 sm:flex">
              <span className="animate-bounce text-4xl" style={{ animationDelay: "0.1s" }}>
                🪙
              </span>
              <span className="text-5xl">🎡</span>
              <span className="text-3xl">💎</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
