"use client";

import { motion, AnimatePresence } from "framer-motion";

const CONFETTI = ["🎉", "✨", "🎊", "💰", "⭐", "🎰", "💎", "🔥"];

type WinCelebrationProps = {
  show: boolean;
};

export default function WinCelebration({ show }: WinCelebrationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gold-500/30 via-emerald-500/20 to-gold-500/30"
            animate={{ opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 0.8, repeat: 3 }}
          />

          {CONFETTI.map((emoji, i) => (
            <motion.span
              key={`${emoji}-${i}`}
              className="absolute text-2xl sm:text-4xl"
              style={{
                left: `${10 + (i * 11) % 80}%`,
                top: `${15 + (i * 17) % 70}%`,
              }}
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{
                scale: [0, 1.4, 1],
                opacity: [0, 1, 0],
                y: [20, -40, -80],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 1.8, delay: i * 0.08, ease: "easeOut" }}
            >
              {emoji}
            </motion.span>
          ))}

          <motion.div
            className="relative text-center"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 1.15, 1], opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.p
              className="font-display text-4xl font-black uppercase tracking-tight text-gold-300 drop-shadow-[0_0_30px_rgba(212,175,55,0.8)] sm:text-6xl"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 0.5, repeat: 4 }}
            >
              BIG WIN!
            </motion.p>
            <motion.p
              className="mt-2 text-lg font-bold text-emerald-300 sm:text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🎊 Congratulations! 🎊
            </motion.p>
            <motion.p
              className="mt-1 text-sm text-gold-200/90"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: 3 }}
            >
              Jackpot unlocked — explore top casinos below
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
