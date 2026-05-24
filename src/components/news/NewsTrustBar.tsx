"use client";

import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

const TRUST_ITEMS = [
  { icon: "🛡️", key: "trustReliable" as const },
  { icon: "🔒", key: "trustSecure" as const },
  { icon: "🎁", key: "trustBonuses" as const },
  { icon: "💬", key: "trustSupport" as const },
];

const BADGES = [
  { label: "Responsible Gambling", icon: "18+" },
  { label: "eCOGRA", icon: "✓" },
  { label: "Verified Source", icon: "✓" },
];

export default function NewsTrustBar() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-800/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl dark:bg-brand-900/30">
                {item.icon}
              </span>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t(item.key)}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 dark:border-gray-700 dark:bg-gray-800"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                {badge.icon}
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
