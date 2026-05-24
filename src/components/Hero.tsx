"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

export default function Hero() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  const words = t("heroTitle").split(" ");
  const highlight = words.slice(-2).join(" ");
  const main = words.slice(0, -2).join(" ");

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
            {t("trustedBy")}
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {main} <span className="gradient-text">{highlight}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/casinos?tab=good" className="btn-primary">
              {t("heroCta")}
            </Link>
            <Link href="/news" className="btn-secondary">
              {t("heroSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
