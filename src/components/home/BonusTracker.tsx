"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { homepageBonusExamples } from "@/data/bonuses";
import type { BonusType, BonusVerificationStatus } from "@/types/domain";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { isFeatureEnabled } from "@/config/features";

const typeFilters: { value: BonusType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "welcome", label: "Welcome" },
  { value: "crypto", label: "Crypto" },
  { value: "cashback", label: "Cashback" },
  { value: "free-spins", label: "Free Spins" },
  { value: "no-deposit", label: "No Deposit" },
];

const countryFilters = ["all", "BD", "IN", "PK", "GLOBAL"] as const;

const statusLabels: Record<BonusVerificationStatus, string> = {
  placeholder: "Example",
  needs_review: "Review pending",
  verified: "Verified",
  rejected: "Rejected",
};

export default function BonusTracker() {
  const [type, setType] = useState<BonusType | "all">("all");
  const [country, setCountry] = useState<(typeof countryFilters)[number]>("all");

  const filtered = homepageBonusExamples.filter((b) => {
    const typeMatch = type === "all" || b.type === type;
    const countryMatch =
      country === "all" || b.countries.includes(country) || b.countries.includes("GLOBAL");
    return typeMatch && countryMatch;
  });

  return (
    <section id="bonus-tracker" className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Bonus Examples"
          title="Sample Operator Promotions"
          subtitle="Illustrative bonus types only — not a verified database. Offers may change. Wagering requirements apply. Check terms before claiming on the operator site."
        />

        {isFeatureEnabled("bonusTrackerFilters") && (
          <div className="mt-8 flex flex-wrap gap-2">
            {typeFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setType(f.value)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                  type === f.value
                    ? "border-gold-500/50 bg-gold-500/20 text-gold-300"
                    : "border-white/10 text-slate-400 hover:border-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="mx-2 w-px self-stretch bg-white/10" />
            {countryFilters.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCountry(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                  country === c
                    ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-300"
                    : "border-white/10 text-slate-400 hover:border-white/20"
                }`}
              >
                {c === "all" ? "All regions" : c}
              </button>
            ))}
          </div>
        )}

        <p className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-200/90">
          Unverified examples for orientation only. CasinoPulse does not guarantee bonus values or
          eligibility. Read the official promotion page and terms before depositing.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((bonus, i) => (
            <motion.div
              key={bonus.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <GlassCard glow="emerald" className="h-full p-5">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/go/${bonus.casinoSlug}`}
                    className="font-semibold text-white hover:text-gold-300"
                  >
                    {bonus.casinoName}
                  </Link>
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {statusLabels[bonus.verificationStatus]}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-emerald-400">{bonus.title}</p>
                <p className="mt-1 text-lg font-semibold text-gold-400">{bonus.value}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Wagering: {bonus.wagering}
                  {bonus.countries.length > 0 ? ` · ${bonus.countries.join(", ")}` : ""}
                </p>
                {bonus.verificationNotes && (
                  <p className="mt-2 line-clamp-2 text-xs text-slate-600">{bonus.verificationNotes}</p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
