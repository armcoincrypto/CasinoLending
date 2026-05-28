"use client";

import { motion } from "framer-motion";

type LoopingBannerTextProps = {
  text: string;
  maskColor: string;
  className?: string;
};

export default function LoopingBannerText({
  text,
  maskColor,
  className = "",
}: LoopingBannerTextProps) {
  return (
    <div className={`relative mt-2 h-6 overflow-hidden sm:h-7 ${className}`}>
      <motion.div
        className="flex flex-col"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <p className="flex h-6 items-center text-sm font-medium text-white/95 sm:h-7 sm:text-base">
          {text}
        </p>
        <p className="flex h-6 items-center text-sm font-medium text-white/95 sm:h-7 sm:text-base">
          {text}
        </p>
      </motion.div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2"
        style={{ background: `linear-gradient(to bottom, ${maskColor}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2"
        style={{ background: `linear-gradient(to top, ${maskColor}, transparent)` }}
      />
    </div>
  );
}
