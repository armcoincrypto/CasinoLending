"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jackpotWins } from "@/data/jackpots";
import { formatCurrency } from "@/lib/format";

export default function JackpotTicker() {
  const [index, setIndex] = useState(0);
  const win = jackpotWins[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % jackpotWins.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-y border-gold-500/20 bg-navy-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-hidden px-4 py-2.5 sm:px-6 lg:px-8">
        <span className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live Jackpots
        </span>
        <div className="relative min-h-[1.25rem] flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={win.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="truncate text-sm text-slate-200"
            >
              <span className="font-semibold text-gold-300">{win.playerNickname}</span>
              {" from "}
              <span className="text-emerald-300">{win.country}</span>
              {" won "}
              <span className="font-bold text-white">
                {formatCurrency(win.amount, win.currency)}
              </span>
              {" on "}
              <span className="text-slate-300">{win.gameName}</span>
              {" at "}
              <span className="text-gold-400">{win.casinoName}</span>
              {win.isRecord && (
                <span className="ml-2 rounded bg-gold-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-gold-300">
                  Record
                </span>
              )}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
