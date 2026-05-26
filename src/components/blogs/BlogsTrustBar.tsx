"use client";

import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import GlassCard from "@/components/ui/GlassCard";

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
    <section className="border-t border-white/10 bg-navy-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <GlassCard key={item.key} className="flex flex-col items-center p-6 text-center">
              <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/20 text-3xl">
                {item.icon}
              </span>
              <p className="text-sm font-bold text-white">{t(item.key)}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
