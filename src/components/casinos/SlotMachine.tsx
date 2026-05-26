"use client";

import { motion } from "framer-motion";

const REEL_STRIPS = [
  ["🍒", "💎", "7️⃣", "🔔", "⭐", "🍋", "🎰", "💎"],
  ["7️⃣", "⭐", "🍒", "🎰", "💎", "🔔", "🍋", "7️⃣"],
  ["💎", "🔔", "⭐", "🍒", "7️⃣", "🎰", "💎", "⭐"],
];

function Reel({ symbols, delay }: { symbols: string[]; delay: number }) {
  const doubled = [...symbols, ...symbols];

  return (
    <div className="slot-reel-window relative h-28 w-full overflow-hidden rounded-lg border border-gold-500/40 bg-navy-950 shadow-inner sm:h-32">
      <div className="absolute inset-x-0 top-1/2 z-10 h-10 -translate-y-1/2 border-y-2 border-gold-400/50 bg-gold-500/10" />
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 2.5 + delay,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      >
        {doubled.map((sym, i) => (
          <span
            key={`${sym}-${i}`}
            className="flex h-10 w-full items-center justify-center text-2xl sm:h-12 sm:text-3xl"
          >
            {sym}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SlotMachine() {
  return (
    <div className="slot-machine-frame relative mx-auto w-full max-w-md p-1">
      <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-r from-gold-500 via-emerald-500 to-gold-500 opacity-50 blur-sm" />
      <div className="relative rounded-2xl border-2 border-gold-500/60 bg-gradient-to-b from-navy-800 to-navy-950 p-4 shadow-glow-gold">
        <div className="mb-3 flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Jackpot</span>
          <motion.span
            className="font-display text-lg font-bold text-emerald-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            WIN BIG
          </motion.span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {REEL_STRIPS.map((strip, i) => (
            <Reel key={i} symbols={strip} delay={i * 0.3} />
          ))}
        </div>
        <motion.div className="mt-3 h-1 overflow-hidden rounded-full bg-navy-900">
          <motion.div
            className="h-full w-2/5 bg-gradient-to-r from-gold-500 to-emerald-400"
            animate={{ x: ["-100%", "250%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
