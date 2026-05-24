"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { goodCasinos } from "@/data/casinos";
import CasinoCard from "./CasinoCard";

export default function HomeCasinoPreview() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const preview = goodCasinos.slice(0, 5);

  return (
    <section className="bg-gray-50 py-16 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">{t("goodCasinosHeading")}</h2>
            <p className="section-subtitle">{t("goodCasinosDesc")}</p>
          </div>
          <Link href="/casinos?tab=good" className="hidden btn-secondary sm:inline-flex">
            {t("heroCta")}
          </Link>
        </div>
        <div className="mt-8 space-y-3">
          {preview.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} variant="list" />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/casinos?tab=good" className="btn-secondary">
            {t("heroCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
