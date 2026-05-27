"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const REEL_STRIPS = [
  ["🍒", "💎", "7️⃣", "🔔", "⭐", "🍋", "🎰", "💎"],
  ["7️⃣", "⭐", "🍒", "🎰", "💎", "🔔", "🍋", "7️⃣"],
  ["💎", "🔔", "⭐", "🍒", "7️⃣", "🎰", "💎", "⭐"],
];

function Reel({
  symbols,
  spinKey,
  duration,
  delay,
}: {
  symbols: string[];
  spinKey: number;
  duration: number;
  delay: number;
}) {
  const doubled = [...symbols, ...symbols];

  return (
    <div className="slot-reel-window relative h-28 w-full overflow-hidden rounded-lg border border-gold-500/40 bg-navy-950 shadow-inner sm:h-32">
      <div className="absolute inset-x-0 top-1/2 z-10 h-10 -translate-y-1/2 border-y-2 border-gold-400/50 bg-gold-500/10" />
      <motion.div
        className="flex flex-col items-center"
        key={spinKey}
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
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
  const [spinning, setSpinning] = useState(false);
  const [spinKey, setSpinKey] = useState(0);
  const [reels, setReels] = useState(REEL_STRIPS);

  const baseDurations = useMemo(() => [2.4, 2.7, 3.0], []);

  const pullLever = () => {
    if (spinning) return;
    setSpinning(true);

    // Randomize reel strips to feel like "new spin"
    setReels((prev) =>
      prev.map((strip) => {
        const copy = [...strip];
        for (let i = copy.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      })
    );

    setSpinKey((k) => k + 1);

    window.setTimeout(() => {
      setSpinning(false);
    }, 2600);
  };

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
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-stretch gap-2">
          <Reel symbols={reels[0]} spinKey={spinKey} duration={spinning ? 1.35 : baseDurations[0]} delay={0.0} />
          <Reel symbols={reels[1]} spinKey={spinKey} duration={spinning ? 1.45 : baseDurations[1]} delay={0.12} />
          <Reel symbols={reels[2]} spinKey={spinKey} duration={spinning ? 1.55 : baseDurations[2]} delay={0.22} />

          {/* Lever */}
          <div className="relative ml-2 hidden w-10 sm:block">
            <div className="absolute left-1/2 top-2 h-[80%] w-2 -translate-x-1/2 rounded-full bg-white/10" />
            <motion.button
              type="button"
              onClick={pullLever}
              disabled={spinning}
              className="relative mx-auto flex h-full w-full items-start justify-center"
              aria-label="Pull slot lever"
              animate={spinning ? { y: [0, 18, 0] } : { y: 0 }}
              transition={{ duration: 0.6, times: [0, 0.45, 1] }}
            >
              <span className="mt-0.5 h-10 w-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-500 shadow-glow-gold" />
              <span className="absolute top-0 h-6 w-6 rounded-full border border-gold-500/40 bg-gold-500/20 shadow-glow-gold" />
            </motion.button>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={pullLever}
            disabled={spinning}
            className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
              spinning
                ? "cursor-not-allowed border border-white/10 bg-white/5 text-slate-500"
                : "border border-gold-500/30 bg-gold-500/10 text-gold-300 hover:border-gold-500/50 hover:bg-gold-500/15"
            }`}
          >
            {spinning ? "Spinning…" : "Pull Lever"}
          </button>
          <motion.div className="h-1 flex-1 overflow-hidden rounded-full bg-navy-900">
            <motion.div
              className="h-full w-2/5 bg-gradient-to-r from-gold-500 to-emerald-400"
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
