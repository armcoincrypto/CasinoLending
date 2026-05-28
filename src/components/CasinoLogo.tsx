"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getRankLogoPath } from "@/lib/casino-logo";

interface CasinoLogoProps {
  name: string;
  slug: string;
  logo?: string;
  rank?: number;
  type?: "good" | "bad" | "ranking";
  variant?: "square" | "wide";
}

const brandStyles: Record<string, { bg: string; text: string; label?: string }> = {
  stake: { bg: "bg-slate-900", text: "text-white", label: "Stake" },
  "bc-game": { bg: "bg-emerald-600", text: "text-white", label: "BC.Game" },
  leovegas: { bg: "bg-orange-500", text: "text-white", label: "LeoVegas" },
  bet365: { bg: "bg-green-700", text: "text-yellow-300", label: "bet365" },
  roobet: { bg: "bg-amber-500", text: "text-slate-900", label: "Roobet" },
};

function getBrandStyle(slug: string, name: string) {
  return (
    brandStyles[slug] ?? {
      bg: "bg-navy-800",
      text: "text-white",
      label: name.length > 12 ? name.slice(0, 10) + "…" : name,
    }
  );
}

export default function CasinoLogo({
  name,
  slug,
  logo,
  rank,
  type = "good",
  variant = "square",
}: CasinoLogoProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [rank, slug]);

  const style = getBrandStyle(slug, name);
  const sizeClass =
    variant === "wide"
      ? "h-20 w-[10.5rem] rounded-2xl sm:h-24 sm:w-[12rem]"
      : "h-14 w-14 rounded-xl";

  const textClass = variant === "wide" ? "text-sm font-bold sm:text-base" : "text-xs font-bold";

  const rankLogoSrc = rank != null ? getRankLogoPath(rank) : undefined;
  const explicitLogoSrc = logo && !logo.endsWith(".svg") ? logo : undefined;
  const imageSrc = rankLogoSrc ?? explicitLogoSrc;
  const showImage = Boolean(imageSrc) && !imgError;

  return (
    <div
      className={`relative flex flex-shrink-0 items-center justify-center overflow-hidden border border-white/15 shadow-md ${sizeClass} ${
        showImage ? "bg-white" : style.bg
      }`}
      aria-label={`${name} logo`}
    >
      {showImage ? (
        <Image
          src={imageSrc!}
          alt={`${name} logo`}
          fill
          unoptimized
          sizes={variant === "wide" ? "192px" : "56px"}
          className="object-contain p-2 sm:p-3"
          priority={rank != null && rank <= 6}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={`truncate px-3 text-center leading-tight ${textClass} ${style.text}`}>
          {style.label ?? name.slice(0, 12)}
        </span>
      )}
      {rank != null && type !== "ranking" && variant === "square" && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-[10px] font-bold text-gold-400 ring-1 ring-gold-500/50">
          {rank}
        </span>
      )}
    </div>
  );
}
