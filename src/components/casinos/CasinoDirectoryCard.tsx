import Link from "next/link";
import type { Casino } from "@/types";
import GlassCard from "@/components/ui/GlassCard";

type CasinoDirectoryCardProps = {
  casino: Casino;
  featured?: boolean;
};

export default function CasinoDirectoryCard({
  casino,
  featured = false,
}: CasinoDirectoryCardProps) {
  const reviewHref = `/blogs/${casino.blogSlug}`;
  const glow = casino.type === "good" ? "emerald" : casino.type === "bad" ? "danger" : "gold";

  return (
    <GlassCard
      glow={featured ? glow : "none"}
      className={`p-5 transition-colors hover:border-white/20 ${featured ? "ring-1 ring-white/5" : ""}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 flex-1 gap-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/20 font-display text-sm font-bold text-gold-400"
            aria-hidden
          >
            {casino.rank}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-white">
              <Link href={reviewHref} className="hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400">
                {casino.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Editorial trust score:{" "}
              <span className="font-semibold text-emerald-400">{casino.rating}/5</span>
              {" · "}
              {casino.type === "good"
                ? "Editor-rated"
                : casino.type === "bad"
                  ? "Caution advised"
                  : "Ranked overview"}
            </p>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-300">
              {casino.summary.en}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <Link
            href={reviewHref}
            className="btn-premium-primary w-full text-center text-sm sm:w-auto"
          >
            Read full review
          </Link>
          <Link
            href="/how-we-review"
            className="text-center text-xs font-medium text-slate-500 hover:text-gold-400 sm:text-right"
          >
            How we score →
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
