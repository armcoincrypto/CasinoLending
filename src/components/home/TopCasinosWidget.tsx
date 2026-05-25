"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { goodCasinos } from "@/data/casinos";
import CasinoLogo from "@/components/CasinoLogo";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonBadge from "@/components/ui/NeonBadge";

const top10 = goodCasinos.slice(0, 10);

export default function TopCasinosWidget() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Rankings"
          title="Top 10 Trusted Casinos"
          subtitle="Editor-rated platforms with strong bonuses, payout speed, and trust scores."
          href="/casinos?tab=good"
          linkLabel="Full rankings"
        />

        <div className="mt-12 space-y-3">
          {top10.map((casino, i) => (
            <motion.div
              key={casino.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <GlassCard glow={i < 3 ? "gold" : "none"} className="p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/20 font-display text-sm font-bold text-gold-400">
                    {i + 1}
                  </span>
                  <Link
                    href={`/go/${casino.slug}`}
                    className="flex shrink-0 items-center gap-3"
                  >
                    <CasinoLogo
                      name={casino.name}
                      slug={casino.slug}
                      rank={casino.rank}
                      type={casino.type}
                    />
                    <div>
                      <p className="font-semibold text-white hover:text-gold-300">
                        {casino.name}
                      </p>
                      <p className="text-xs text-slate-500">Trust score: {casino.rating}/5</p>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-wrap gap-2 sm:justify-center">
                    <NeonBadge variant="emerald">{casino.bonus.en.slice(0, 40)}…</NeonBadge>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1 sm:min-w-[140px]">
                    <span className="text-sm font-bold text-emerald-400">
                      ★ {casino.rating}
                    </span>
                    <Link
                      href={`/blogs/${casino.blogSlug}`}
                      className="text-xs font-medium text-gold-400 hover:text-gold-300"
                    >
                      Full review →
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
