import Link from "next/link";
import type { BlacklistedCasino } from "@/types/domain";
import GlassCard from "@/components/ui/GlassCard";
import NeonBadge from "@/components/ui/NeonBadge";

export const BLACKLIST_RISK_LABELS: Record<string, string> = {
  "delayed-payouts": "Delayed Payouts",
  "fake-license": "License Concerns",
  "scam-reports": "Scam Reports",
  "suspicious-behavior": "Suspicious Behavior",
  "unresolved-complaints": "Unresolved Complaints",
};

function formatReviewDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type BlacklistCardProps = {
  casino: BlacklistedCasino;
  showEditorialNote?: boolean;
};

export default function BlacklistCard({ casino, showEditorialNote = false }: BlacklistCardProps) {
  return (
    <GlassCard glow="danger" className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white">{casino.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{casino.summary}</p>
        </div>
        <NeonBadge variant="danger">
          {casino.severity === "critical" ? "Critical Risk" : "High Risk"}
        </NeonBadge>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {casino.risks.map((risk) => (
          <span
            key={risk}
            className="rounded-md border border-danger-500/30 bg-danger-500/10 px-2 py-1 text-xs font-medium text-danger-300"
          >
            {BLACKLIST_RISK_LABELS[risk] ?? risk}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        CasinoPulse editorial risk assessment · Last reviewed {formatReviewDate(casino.reportedAt)}
        {casino.complaintCount > 0 && (
          <>
            {" "}
            · {casino.complaintCount.toLocaleString()} publicly reported concern references (not
            independently verified)
          </>
        )}
      </p>
      {showEditorialNote && (
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Reported concerns and risk indicators are compiled for editorial guidance only. Players
          should review operator terms carefully and avoid depositing if unsure.
        </p>
      )}
      <p className="mt-3 text-xs">
        <Link href={`/blogs/avoid-${casino.slug}`} className="text-danger-400 hover:underline">
          Read editorial review →
        </Link>
      </p>
    </GlassCard>
  );
}
