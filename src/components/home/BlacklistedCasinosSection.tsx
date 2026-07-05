"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blacklistedCasinos } from "@/data/blacklist";
import { BLACKLIST_PATH } from "@/data/legal";
import BlacklistCard from "@/components/blacklist/BlacklistCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function BlacklistedCasinosSection() {
  const preview = blacklistedCasinos.slice(0, 2);

  return (
    <section id="blacklist" className="bg-navy-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Safety Alerts"
          title="Blacklisted Casinos"
          subtitle="CasinoPulse editorial risk assessments highlighting reported concerns and risk indicators — not legal findings."
          href={BLACKLIST_PATH}
          linkLabel="View full blacklist"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {preview.map((casino, i) => (
            <motion.div
              key={casino.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <BlacklistCard casino={casino} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={BLACKLIST_PATH}
            className="text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
          >
            View full blacklist →
          </Link>
        </div>
      </div>
    </section>
  );
}
