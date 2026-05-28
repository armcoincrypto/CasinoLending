"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import WinCelebration from "./WinCelebration";
import SlotLever from "./SlotLever";

const REEL_STRIPS = [
  ["🍒", "💎", "7️⃣", "🔔", "⭐", "🍋", "🎰", "💎"],
  ["7️⃣", "⭐", "🍒", "🎰", "💎", "🔔", "🍋", "7️⃣"],
  ["💎", "🔔", "⭐", "🍒", "7️⃣", "🎰", "💎", "⭐"],
];

function shuffleStrip(strip: string[]) {
  const copy = [...strip];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function Reel({
  symbols,
  spinning,
  spinKey,
  duration,
  delay,
}: {
  symbols: string[];
  spinning: boolean;
  spinKey: number;
  duration: number;
  delay: number;
}) {
  const doubled = [...symbols, ...symbols];

  return (
    <div className="slot-reel-window relative h-32 w-full overflow-hidden rounded-lg border-2 border-gold-500/50 bg-navy-950 shadow-inner sm:h-36">
      <div className="absolute inset-x-0 top-1/2 z-10 h-12 -translate-y-1/2 border-y-2 border-gold-400/60 bg-gold-500/15" />
      <motion.div
        className="flex flex-col items-center"
        key={`${spinKey}-${spinning}`}
        animate={spinning ? { y: ["0%", "-50%"] } : { y: "-25%" }}
        transition={
          spinning
            ? { duration, repeat: Infinity, ease: "linear", delay }
            : { duration: 0.3, ease: "easeOut" }
        }
      >
        {doubled.map((sym, i) => (
          <span
            key={`${sym}-${i}`}
            className="flex h-12 w-full items-center justify-center text-3xl sm:h-14 sm:text-4xl"
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
  const [showWin, setShowWin] = useState(false);
  const [spinKey, setSpinKey] = useState(0);
  const [reels, setReels] = useState(REEL_STRIPS);

  const pullLever = () => {
    if (spinning) return;

    setShowWin(false);
    setSpinning(true);
    setReels((prev) => prev.map(shuffleStrip));
    setSpinKey((k) => k + 1);

    window.setTimeout(() => {
      setSpinning(false);
      setShowWin(true);
      window.setTimeout(() => setShowWin(false), 3200);
    }, 2800);
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative flex items-stretch gap-3 sm:gap-5">
        {/* Cabinet */}
        <div className="slot-machine-frame relative min-w-0 flex-1 p-1">
          <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-r from-gold-500 via-emerald-500 to-gold-500 opacity-60 blur-md" />
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/70 bg-gradient-to-b from-navy-800 to-navy-950 p-4 shadow-glow-gold sm:p-5">
            <WinCelebration show={showWin} />

            <div className="relative z-10 mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Jackpot
              </span>
              <AnimatePresence mode="wait">
                {showWin ? (
                  <motion.span
                    key="win"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="font-display text-lg font-black text-emerald-300"
                  >
                    WINNER!
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    className="font-display text-sm font-bold text-slate-500"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Pull the lever →
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-2">
              <Reel
                symbols={reels[0]}
                spinning={spinning}
                spinKey={spinKey}
                duration={0.9}
                delay={0}
              />
              <Reel
                symbols={reels[1]}
                spinning={spinning}
                spinKey={spinKey}
                duration={1.0}
                delay={0.1}
              />
              <Reel
                symbols={reels[2]}
                spinning={spinning}
                spinKey={spinKey}
                duration={1.1}
                delay={0.2}
              />
            </div>
          </div>
        </div>

        {/* Big lever — always visible */}
        <SlotLever onPull={pullLever} disabled={spinning} pulling={spinning} />
      </div>

      <button
        type="button"
        onClick={pullLever}
        disabled={spinning}
        className="btn-premium-primary mt-4 w-full py-4 text-base sm:hidden"
      >
        {spinning ? "Spinning…" : "🎰 Pull Lever — Spin Now!"}
      </button>
    </div>
  );
}
