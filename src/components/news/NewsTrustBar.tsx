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

const BADGES = [
  { label: "Responsible Gambling", icon: "18+" },
  { label: "eCOGRA", icon: "✓" },
  { label: "Verified Source", icon: "✓" },
];

export default function NewsTrustBar() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="border-t border-white/10 bg-navy-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <GlassCard key={item.key} className="flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl">
                {item.icon}
              </span>
              <p className="text-sm font-semibold text-slate-200">{t(item.key)}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-navy-950 px-5 py-2.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                {badge.icon}
              </span>
              <span className="text-sm font-medium text-slate-300">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
