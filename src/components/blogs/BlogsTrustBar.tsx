"use client";

import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

const TRUST_ITEMS = [
  { icon: "🛡️", key: "trustReliable" as const },
  { icon: "🔒", key: "trustSecure" as const },
  { icon: "🎁", key: "trustBonuses" as const },
  { icon: "💬", key: "trustSupport" as const },
];

export default function BlogsTrustBar() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="bg-[#050A12] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center rounded-2xl border border-gray-800 bg-[#0B121C] p-6 text-center"
            >
              <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/20 text-3xl">
                {item.icon}
              </span>
              <p className="text-sm font-bold text-white">{t(item.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
