import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  glow?: "gold" | "emerald" | "danger" | "none";
};

const glowMap = {
  gold: "shadow-glow-gold border-gold-500/20",
  emerald: "shadow-glow-emerald border-emerald-500/20",
  danger: "shadow-glow-danger border-danger-500/30",
  none: "border-white/10",
};

export default function GlassCard({
  children,
  className = "",
  glow = "none",
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl border bg-white/5 backdrop-blur-xl ${glowMap[glow]} ${className}`}
    >
      {children}
    </div>
  );
}
