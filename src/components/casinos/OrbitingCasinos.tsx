"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { top40Casinos } from "@/data/casinos";
import CasinoLogo from "@/components/CasinoLogo";

const INNER = top40Casinos.slice(0, 20);
const OUTER = top40Casinos.slice(20, 40);

function OrbitRing({
  casinos,
  radius,
  duration,
  direction,
}: {
  casinos: typeof top40Casinos;
  radius: number;
  duration: number;
  direction: 1 | -1;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-0 w-0"
      animate={{ rotate: direction === 1 ? 360 : -360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
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
              animate={{ rotate: direction === 1 ? -360 : 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
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
  return (
    <div className="relative mx-auto h-[min(520px,85vw)] w-full max-w-3xl">
      {/* Orbit rings visual */}
      <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/25 bg-gold-500/5" />
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/10" />

      <OrbitRing casinos={INNER} radius={95} duration={55} direction={1} />
      <OrbitRing casinos={OUTER} radius={155} duration={75} direction={-1} />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="rounded-2xl border-2 border-gold-500/40 bg-navy-950/90 px-6 py-3 text-center shadow-glow-gold backdrop-blur-md"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500">All</p>
          <p className="font-display text-2xl font-bold text-white">40 Casinos</p>
          <p className="mt-1 text-[10px] text-slate-500">Tap any logo for review</p>
        </motion.div>
      </div>
    </div>
  );
}
