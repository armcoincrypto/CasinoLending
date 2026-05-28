"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import WinCelebration from "./WinCelebration";
import SlotLever from "./SlotLever";

const SPIN_SYMBOLS = ["🍒", "💎", "🔔", "⭐", "🍋", "🎰", "💎", "⭐"];
const JACKPOT = "7️⃣";

type SpinPhase = "idle" | "spinning" | "jackpot" | "celebrating";

function buildSpinStrip() {
  const strip = [...SPIN_SYMBOLS];
  for (let i = strip.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [strip[i], strip[j]] = [strip[j], strip[i]];
  }
  return strip;
}

function SpinningReel({
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
    <div className="slot-reel-window relative h-32 w-full overflow-hidden rounded-lg border-2 border-gold-500/50 bg-navy-950 shadow-inner sm:h-36">
      <div className="absolute inset-x-0 top-1/2 z-10 h-12 -translate-y-1/2 border-y-2 border-gold-400/60 bg-gold-500/15" />
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
            className="flex h-12 w-full items-center justify-center text-3xl sm:h-14 sm:text-4xl"
          >
            {sym}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function JackpotReel() {
  return (
    <div className="slot-reel-window relative h-32 w-full overflow-hidden rounded-lg border-2 border-gold-400 bg-navy-950 shadow-[inset_0_0_24px_rgba(212,175,55,0.35)] sm:h-36">
      <div className="absolute inset-x-0 top-1/2 z-10 h-12 -translate-y-1/2 border-y-2 border-gold-300 bg-gold-500/25 shadow-glow-gold" />
      <motion.div
        className="flex h-full items-center justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.15, 1], opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <span className="text-4xl sm:text-5xl">{JACKPOT}</span>
      </motion.div>
    </div>
  );
}

function IdleReel() {
  return (
    <div className="slot-reel-window relative flex h-32 w-full items-center justify-center overflow-hidden rounded-lg border-2 border-gold-500/30 bg-navy-950 sm:h-36">
      <div className="absolute inset-x-0 top-1/2 z-10 h-12 -translate-y-1/2 border-y-2 border-gold-400/40 bg-gold-500/10" />
      <span className="text-3xl opacity-40 sm:text-4xl">❓</span>
    </div>
  );
}

export default function SlotMachine() {
  const [phase, setPhase] = useState<SpinPhase>("idle");
  const [spinKey, setSpinKey] = useState(0);
  const [reels, setReels] = useState([buildSpinStrip(), buildSpinStrip(), buildSpinStrip()]);

  const spinning = phase === "spinning";
  const showJackpot = phase === "jackpot" || phase === "celebrating";
  const showWin = phase === "celebrating";

  const pullLever = () => {
    if (phase !== "idle") return;

    setReels([buildSpinStrip(), buildSpinStrip(), buildSpinStrip()]);
    setSpinKey((k) => k + 1);
    setPhase("spinning");

    // Spin fast, then land on 7-7-7
    window.setTimeout(() => {
      setPhase("jackpot");

      window.setTimeout(() => {
        setPhase("celebrating");

        window.setTimeout(() => {
          setPhase("idle");
        }, 3200);
      }, 900);
    }, 2400);
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative flex items-stretch gap-3 sm:gap-5">
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
                    BIG WIN!
                  </motion.span>
                ) : showJackpot ? (
                  <motion.span
                    key="jackpot"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-display text-lg font-black text-gold-300"
                  >
                    7 · 7 · 7
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
              {spinning ? (
                <>
                  <SpinningReel symbols={reels[0]} spinKey={spinKey} duration={0.75} delay={0} />
                  <SpinningReel symbols={reels[1]} spinKey={spinKey} duration={0.85} delay={0.08} />
                  <SpinningReel symbols={reels[2]} spinKey={spinKey} duration={0.95} delay={0.16} />
                </>
              ) : showJackpot ? (
                <>
                  <JackpotReel />
                  <JackpotReel />
                  <JackpotReel />
                </>
              ) : (
                <>
                  <IdleReel />
                  <IdleReel />
                  <IdleReel />
                </>
              )}
            </div>
          </div>
        </div>

        <SlotLever onPull={pullLever} disabled={phase !== "idle"} pulling={spinning} />
      </div>

      <button
        type="button"
        onClick={pullLever}
        disabled={phase !== "idle"}
        className="btn-premium-primary mt-4 w-full py-4 text-base sm:hidden"
      >
        {spinning ? "Spinning…" : showJackpot ? "Jackpot!" : "🎰 Pull Lever — Spin Now!"}
      </button>
    </div>
  );
}
