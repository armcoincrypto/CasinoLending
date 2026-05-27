"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { top40Casinos } from "@/data/casinos";

const ORBIT_CASINOS = top40Casinos.slice(0, 16);

export default function OrbitingCasinos() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,420px)]">
      <div className="absolute inset-[18%] rounded-full border border-gold-500/20 bg-gradient-to-br from-gold-500/10 via-transparent to-emerald-500/10" />
      <div className="absolute inset-[32%] rounded-full border border-white/5" />

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_CASINOS.map((casino, i) => {
          const angle = (360 / ORBIT_CASINOS.length) * i;
          const radius = i % 2 === 0 ? 140 : 168;

          return (
            <motion.div
              key={casino.id}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <Link
                href={`/go/${casino.slug}`}
                className="group flex w-[10.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-navy-900/85 px-3 py-1.5 text-xs font-semibold text-slate-300 shadow-lg backdrop-blur-md transition-all hover:border-gold-500/50 hover:bg-navy-900/95 hover:text-gold-300 hover:shadow-glow-gold sm:w-[11.5rem] sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-80 group-hover:animate-pulse" />
                {casino.name}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="rounded-2xl border border-gold-500/30 bg-navy-950/80 px-4 py-2 text-center backdrop-blur-sm"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-500">Spin</p>
          <p className="font-display text-xl font-bold text-white">40 Casinos</p>
        </motion.div>
      </div>
    </div>
  );
}
