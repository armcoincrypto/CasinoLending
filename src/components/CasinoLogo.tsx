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
  rollbit: { bg: "bg-slate-800", text: "text-yellow-400", label: "Rollbit" },
  betway: { bg: "bg-black", text: "text-white", label: "betway" },
  "pokerstars-casino": { bg: "bg-red-700", text: "text-white", label: "PokerStars" },
  mostbet: { bg: "bg-blue-600", text: "text-white", label: "Mostbet" },
  bitstarz: { bg: "bg-zinc-900", text: "text-red-400", label: "BitStarz" },
  "888-casino": { bg: "bg-black", text: "text-green-400", label: "888" },
  "draftkings-casino": { bg: "bg-green-800", text: "text-white", label: "DraftKings" },
  "fanduel-casino": { bg: "bg-blue-800", text: "text-white", label: "FanDuel" },
  cloudbet: { bg: "bg-sky-700", text: "text-white", label: "Cloudbet" },
  bitcasino: { bg: "bg-amber-600", text: "text-white", label: "Bitcasino" },
  "1xbet": { bg: "bg-blue-700", text: "text-white", label: "1xBet" },
  parimatch: { bg: "bg-yellow-500", text: "text-black", label: "Parimatch" },
  melbet: { bg: "bg-yellow-600", text: "text-black", label: "Melbet" },
};

function getBrandStyle(slug: string, name: string) {
  return (
    brandStyles[slug] ?? {
      bg: "bg-gradient-to-br from-brand-500 to-brand-700",
      text: "text-white",
      label: name.length > 12 ? name.slice(0, 10) + "…" : name,
    }
  );
}

export default function CasinoLogo({
  name,
  slug,
  rank,
  type = "good",
  variant = "square",
}: CasinoLogoProps) {
  const style = getBrandStyle(slug, name);
  const sizeClass =
    variant === "wide"
      ? "h-14 w-[7.5rem] rounded-xl"
      : "h-12 w-12 rounded-xl";

  return (
    <div
      className={`relative flex flex-shrink-0 items-center justify-center overflow-hidden border border-gray-100 shadow-sm ${sizeClass} ${style.bg}`}
      aria-label={`${name} logo`}
    >
      <span className={`truncate px-2 text-center text-xs font-bold leading-tight ${style.text}`}>
        {style.label ?? name.slice(0, 8)}
      </span>
      {rank != null && type !== "ranking" && variant === "square" && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
          {rank}
        </span>
      )}
    </div>
  );
}
