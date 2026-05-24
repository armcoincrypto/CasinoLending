"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

export default function BlogHero() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="relative overflow-hidden bg-[#050A12]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(242,101,34,0.25),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,_rgba(242,101,34,0.12),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-400/60"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            <span className="text-white">{t("blogsHeroTitle1")}</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              {t("blogsHeroTitle2")}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-400">{t("blogsHeroSubtitle")}</p>
          <Link
            href="/casinos"
            className="mt-8 inline-flex rounded-full bg-brand-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-600/40 transition hover:bg-brand-500 hover:shadow-brand-500/50"
          >
            {t("blogsHeroCta")}
          </Link>
        </div>

        <div className="relative mx-auto flex h-64 w-full max-w-lg items-center justify-center lg:h-80">
          <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="relative flex items-end justify-center gap-3">
            <div className="flex h-52 w-32 flex-col items-center rounded-3xl border border-white/10 bg-[#0B121C] p-4 shadow-2xl sm:h-60 sm:w-36">
              <span className="mb-2 rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold text-white">
                NEWS
              </span>
              <div className="text-4xl">🎰</div>
              <div className="mt-3 h-2 w-full rounded bg-white/10" />
              <div className="mt-2 h-20 w-full rounded-xl bg-gradient-to-b from-brand-500 to-amber-600" />
            </div>
            <div className="mb-8 hidden flex-col gap-4 sm:flex">
              <span className="text-4xl drop-shadow-lg">🪙</span>
              <span className="text-5xl drop-shadow-lg">🎡</span>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -right-2 top-4 text-3xl sm:right-4">🃏</div>
          </div>
        </div>
      </div>
    </section>
  );
}
