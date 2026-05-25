import { type ReactNode } from "react";

type NeonBadgeProps = {
  children: ReactNode;
  variant?: "gold" | "emerald" | "danger" | "neutral";
};

const variants = {
  gold: "bg-gold-500/10 text-gold-300 border-gold-500/30",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  danger: "bg-danger-500/10 text-danger-300 border-danger-500/30",
  neutral: "bg-white/5 text-slate-300 border-white/10",
};

export default function NeonBadge({
  children,
  variant = "neutral",
}: NeonBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
