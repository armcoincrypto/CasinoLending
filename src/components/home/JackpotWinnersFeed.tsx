"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { jackpotWins } from "@/data/jackpots";
import { formatCurrency, formatRelativeTime } from "@/lib/format";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import NeonBadge from "@/components/ui/NeonBadge";

export default function JackpotWinnersFeed() {
  return (
    <section id="jackpot-winners" className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Live Feed"
          title="Latest Jackpot Winners"
          subtitle="Real-time wins from players worldwide — updated continuously."
          href="/news"
          linkLabel="All jackpot news"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jackpotWins.map((win, i) => (
            <motion.div
              key={win.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
            >
              <GlassCard glow="gold" className="p-5 h-full">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-white">{win.playerNickname}</p>
                    <p className="text-xs text-slate-500">{win.country}</p>
                  </div>
                  {win.isRecord && <NeonBadge variant="gold">Record</NeonBadge>}
                </div>
                <p className="mt-4 font-display text-2xl font-bold text-gold-400">
                  <AnimatedCounter value={win.amount} prefix="$" />
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  <span className="text-white">{win.gameName}</span>
                  {" · "}
                  <Link
                    href={`/go/${win.casinoSlug}`}
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    {win.casinoName}
                  </Link>
                </p>
                <p className="mt-3 text-xs text-slate-600">
                  {formatRelativeTime(win.timestamp)} · {formatCurrency(win.amount)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
