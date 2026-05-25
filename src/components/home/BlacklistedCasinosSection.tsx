"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blacklistedCasinos } from "@/data/blacklist";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonBadge from "@/components/ui/NeonBadge";

const riskLabels: Record<string, string> = {
  "delayed-payouts": "Delayed Payouts",
  "fake-license": "Fake License",
  "scam-reports": "Scam Reports",
  "suspicious-behavior": "Suspicious Behavior",
  "unresolved-complaints": "Unresolved Complaints",
};

export default function BlacklistedCasinosSection() {
  return (
    <section id="blacklist" className="bg-navy-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Safety Alerts"
          title="Blacklisted Casinos"
          subtitle="Platforms flagged for payout delays, license issues, and unresolved player complaints."
          href="/casinos?tab=bad"
          linkLabel="Research list"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {blacklistedCasinos.map((casino, i) => (
            <motion.div
              key={casino.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <GlassCard glow="danger" className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{casino.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{casino.summary}</p>
                  </div>
                  <NeonBadge variant="danger">
                    {casino.severity === "critical" ? "Critical" : "High Risk"}
                  </NeonBadge>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {casino.risks.map((risk) => (
                    <span
                      key={risk}
                      className="rounded-md border border-danger-500/30 bg-danger-500/10 px-2 py-1 text-xs font-medium text-danger-300"
                    >
                      {riskLabels[risk]}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  {casino.complaintCount.toLocaleString()} complaints tracked ·{" "}
                  <Link
                    href={`/blogs/avoid-${casino.slug}`}
                    className="text-danger-400 hover:underline"
                  >
                    Read investigation
                  </Link>
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
