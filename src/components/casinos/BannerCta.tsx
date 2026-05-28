"use client";

import { motion } from "framer-motion";

type BannerCtaProps = {
  label: string;
  variant: "green" | "red";
};

export default function BannerCta({ label, variant }: BannerCtaProps) {
  const isGreen = variant === "green";

  return (
    <motion.span
      className={`relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-black uppercase tracking-wide sm:w-auto sm:py-4 sm:text-base ${
        isGreen
          ? "bg-gradient-to-r from-gold-300 via-gold-400 to-amber-300 text-navy-950 shadow-[0_8px_32px_rgba(255,215,0,0.45)]"
          : "bg-gradient-to-r from-white via-red-50 to-white text-[#BF0000] shadow-[0_8px_32px_rgba(255,255,255,0.35)]"
      }`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      animate={
        isGreen
          ? { boxShadow: ["0 8px 32px rgba(255,215,0,0.35)", "0 12px 40px rgba(255,215,0,0.55)", "0 8px 32px rgba(255,215,0,0.35)"] }
          : { boxShadow: ["0 8px 28px rgba(255,255,255,0.25)", "0 12px 36px rgba(255,255,255,0.45)", "0 8px 28px rgba(255,255,255,0.25)"] }
      }
      transition={{ duration: 1.8, repeat: Infinity }}
    >
      <span
        className={`pointer-events-none absolute inset-0 opacity-40 ${
          isGreen
            ? "bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.8)_50%,transparent_75%)]"
            : "bg-[linear-gradient(110deg,transparent_25%,rgba(191,0,0,0.15)_50%,transparent_75%)]"
        }`}
        style={{
          animation: "shimmer 2.2s linear infinite",
        }}
      />
      <span className="relative z-10">{label}</span>
      <motion.span
        className="relative z-10 text-lg"
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        →
      </motion.span>
    </motion.span>
  );
}
