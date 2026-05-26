"use client";

import { motion } from "framer-motion";
import type { Casino } from "@/types";
import CasinoCard from "@/components/CasinoCard";

type CasinoListSectionProps = {
  casinos: Casino[];
  listHeading: string;
  showDisclaimer?: boolean;
  disclaimerTitle?: string;
  disclaimerText?: string;
};

export default function CasinoListSection({
  casinos,
  listHeading,
  showDisclaimer,
  disclaimerTitle,
  disclaimerText,
}: CasinoListSectionProps) {
  return (
    <section className="py-10">
      <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{listHeading}</h2>

      {showDisclaimer && disclaimerTitle && disclaimerText && (
        <div className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
          <p className="font-semibold">{disclaimerTitle}</p>
          <p className="mt-2 text-amber-200/80">{disclaimerText}</p>
        </div>
      )}

      <div className="mt-8 space-y-5">
        {casinos.map((casino, i) => (
          <motion.div
            key={casino.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: Math.min(i * 0.04, 0.4) }}
          >
            <CasinoCard casino={casino} variant="list" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
