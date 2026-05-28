"use client";

import { motion } from "framer-motion";

type SlotLeverProps = {
  onPull: () => void;
  disabled: boolean;
  pulling: boolean;
};

export default function SlotLever({ onPull, disabled, pulling }: SlotLeverProps) {
  return (
    <motion.button
      type="button"
      onClick={onPull}
      disabled={disabled}
      aria-label="Pull slot machine lever"
      className="group relative flex shrink-0 flex-col items-center"
      whileTap={disabled ? {} : { scale: 0.96 }}
    >
      <span className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 group-hover:text-gold-300 sm:text-xs">
        Pull Me!
      </span>

      <div className="relative h-44 w-16 sm:h-52 sm:w-20">
        {/* Lever arm */}
        <div className="absolute bottom-3 left-1/2 h-[72%] w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-600 to-zinc-800 shadow-inner" />

        {/* Knob + arm animation */}
        <motion.div
          className="absolute left-1/2 top-0 origin-bottom"
          style={{ x: "-50%", transformOrigin: "bottom center" }}
          animate={pulling ? { rotate: [0, 55, 0] } : { rotate: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <div className="mx-auto h-24 w-3 rounded-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 shadow-glow-gold sm:h-28 sm:w-3.5" />
          <div className="absolute -left-5 -top-2 h-14 w-14 rounded-full border-4 border-gold-400 bg-gradient-to-br from-gold-300 via-gold-500 to-amber-600 shadow-[0_0_40px_rgba(212,175,55,0.6)] sm:h-16 sm:w-16">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center text-xl font-black text-navy-950 sm:text-2xl">
              ★
            </span>
          </div>
        </motion.div>

        {/* Base */}
        <div className="absolute bottom-0 left-1/2 h-8 w-14 -translate-x-1/2 rounded-lg border border-gold-500/40 bg-gradient-to-b from-navy-800 to-navy-950 shadow-glow-gold sm:w-16" />
      </div>

      <span
        className={`mt-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider sm:text-xs ${
          disabled
            ? "bg-white/5 text-slate-600"
            : "animate-pulse bg-gold-500/20 text-gold-300 ring-2 ring-gold-500/40"
        }`}
      >
        {pulling ? "Spinning…" : "SPIN"}
      </span>
    </motion.button>
  );
}
