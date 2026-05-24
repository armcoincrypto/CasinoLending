"use client";

import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

export default function FeaturedSection() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  const features = [
    { title: t("featured1Title"), desc: t("featured1Desc"), icon: "✓" },
    { title: t("featured2Title"), desc: t("featured2Desc"), icon: "🎁" },
    { title: t("featured3Title"), desc: t("featured3Desc"), icon: "⚡" },
  ];

  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          {t("featuredTitle")}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-2xl dark:bg-brand-900/30">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
