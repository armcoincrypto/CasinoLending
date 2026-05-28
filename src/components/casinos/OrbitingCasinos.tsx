"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { top40Casinos } from "@/data/casinos";
import CasinoLogo from "@/components/CasinoLogo";

const VISIBLE_COUNT = 10;
const ROTATE_MS = 40_000;

function pickRandomTen() {
  const pool = [...top40Casinos];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, VISIBLE_COUNT);
}

function OrbitRing({ casinos }: { casinos: typeof top40Casinos }) {
  const radius = 150;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-0 w-0"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1, rotate: 360 }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotate: { duration: 50, repeat: Infinity, ease: "linear" },
      }}
    >
      {casinos.map((casino, i) => {
        const angle = (360 / casinos.length) * i;

        return (
          <div
            key={casino.id}
            className="absolute left-0 top-0"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <Link
                href={`/blogs/${casino.blogSlug}`}
                title={`${casino.name} — full review`}
                className="group relative flex flex-col items-center"
              >
                <div className="rounded-full border-2 border-gold-500/40 bg-navy-900 p-0.5 shadow-lg ring-2 ring-white/10 transition-all group-hover:scale-110 group-hover:border-gold-400 group-hover:shadow-glow-gold">
                  <div className="origin-center scale-[0.72] sm:scale-[0.78]">
                    <CasinoLogo
                      name={casino.name}
                      slug={casino.slug}
                      rank={casino.rank}
                      type={casino.type}
                    />
                  </div>
                </div>
                <span className="mt-1.5 max-w-[4.5rem] truncate text-center text-[8px] font-semibold text-slate-400 group-hover:text-gold-300 sm:max-w-[5rem] sm:text-[9px]">
                  {casino.name}
                </span>
              </Link>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function OrbitingCasinos() {
  const [visible, setVisible] = useState(() => pickRandomTen());
  const [ringKey, setRingKey] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(40);

  const rotateBatch = useCallback(() => {
    setVisible(pickRandomTen());
    setRingKey((k) => k + 1);
    setSecondsLeft(40);
  }, []);

  useEffect(() => {
    const rotateId = setInterval(rotateBatch, ROTATE_MS);
    return () => clearInterval(rotateId);
  }, [rotateBatch]);

  useEffect(() => {
    const tickId = setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? 40 : s - 1));
    }, 1000);
    return () => clearInterval(tickId);
  }, [ringKey]);

  return (
    <div className="relative mx-auto h-[min(480px,80vw)] w-full max-w-2xl">
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/25 bg-gold-500/5" />
      <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <AnimatePresence mode="wait">
        <OrbitRing key={ringKey} casinos={visible} />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="rounded-2xl border-2 border-gold-500/40 bg-navy-950/90 px-6 py-3 text-center shadow-glow-gold backdrop-blur-md"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500">Featured</p>
          <p className="font-display text-2xl font-bold text-white">10 of 40</p>
          <p className="mt-1 text-[10px] text-slate-500">
            New picks in {secondsLeft}s · tap for review
          </p>
        </motion.div>
      </div>
    </div>
  );
}
