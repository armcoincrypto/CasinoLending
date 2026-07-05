"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { RESPONSIBLE_GAMBLING_PATH, responsibleGamblingQuickLinks } from "@/data/legal";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function ResponsibleGamblingSection() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="border-t border-white/5 bg-navy-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Player Safety"
          title="Responsible Gambling"
          subtitle={t("responsibleGamblingSubtitle")}
          href={RESPONSIBLE_GAMBLING_PATH}
          linkLabel="Full guide"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {responsibleGamblingQuickLinks.map((r) => (
            <GlassCard key={r.title} className="p-5">
              <h3 className="font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{r.desc}</p>
              <Link
                href={r.href}
                className="mt-4 inline-block text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Learn more →
              </Link>
            </GlassCard>
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-6 py-4 text-center text-sm text-amber-200/90">
          ⚠️ Gambling involves risk. Set limits, take breaks, and stop if it stops being fun.
          18+ only.{" "}
          <Link href={RESPONSIBLE_GAMBLING_PATH} className="underline hover:text-amber-100">
            Read our responsible gambling guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
