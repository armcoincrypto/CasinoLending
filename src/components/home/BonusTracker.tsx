"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { bonusOffers } from "@/data/bonuses";
import type { BonusType } from "@/types/domain";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonBadge from "@/components/ui/NeonBadge";
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

export default function BonusTracker() {
  const [type, setType] = useState<BonusType | "all">("all");
  const [country, setCountry] = useState<(typeof countryFilters)[number]>("all");

  const filtered = bonusOffers.filter((b) => {
    const typeMatch = type === "all" || b.type === type;
    const countryMatch =
      country === "all" || b.countries.includes(country) || b.countries.includes("GLOBAL");
    return typeMatch && countryMatch;
  });

  return (
    <section id="bonus-tracker" className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Bonus Intelligence"
          title="Live Bonus Tracker"
          subtitle="Welcome offers, crypto packages, and no-deposit deals — filter by region and type."
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((bonus, i) => (
            <motion.div
              key={bonus.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              <GlassCard glow={bonus.isHot ? "gold" : "emerald"} className="p-5 h-full">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/go/${bonus.casinoSlug}`}
                    className="font-semibold text-white hover:text-gold-300"
                  >
                    {bonus.casinoName}
                  </Link>
                  {bonus.isHot && <NeonBadge variant="gold">Hot</NeonBadge>}
                </div>
                <p className="mt-2 text-sm font-medium text-emerald-400">{bonus.title}</p>
                <p className="mt-1 text-xl font-bold text-gold-400">{bonus.value}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Wagering: {bonus.wagering} · {bonus.countries.join(", ")}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
