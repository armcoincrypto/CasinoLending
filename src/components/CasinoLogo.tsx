interface CasinoLogoProps {
  name: string;
  rank: number;
  type: "good" | "bad";
}

export default function CasinoLogo({ name, rank, type }: CasinoLogoProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const gradient =
    type === "good"
      ? "from-emerald-500 to-teal-600"
      : "from-red-500 to-rose-600";

  return (
    <div
      className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-sm font-bold text-white shadow-sm`}
      aria-label={`${name} logo`}
    >
      {initials}
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white dark:bg-white dark:text-gray-900">
        {rank}
      </span>
    </div>
  );
}
