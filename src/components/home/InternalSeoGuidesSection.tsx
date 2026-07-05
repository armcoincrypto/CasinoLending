import Link from "next/link";
import { internalSeoLinks } from "@/data/programmatic/internal-seo-links";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import NeonBadge from "@/components/ui/NeonBadge";

const categoryGlow = {
  "Crypto Casinos": "gold",
  "Payment Guides": "emerald",
  Comparisons: "gold",
} as const;

export default function InternalSeoGuidesSection() {
  return (
    <section id="crypto-payment-guides" className="bg-navy-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Player Resources"
          title="Crypto & Payment Casino Guides"
          subtitle="Explore CasinoPulse guides for crypto casinos, payment methods, and safe casino comparisons."
          href="/india-casino-payments"
          linkLabel="View all payment guides"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {internalSeoLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group block h-full">
              <GlassCard
                glow={categoryGlow[link.category]}
                className="flex h-full flex-col p-5 transition-all hover:scale-[1.02]"
              >
                <span className="inline-flex w-fit rounded-md bg-white/5 px-2.5 py-1 text-xs font-semibold text-gold-400">
                  {link.category}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-gold-300">
                  {link.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {link.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <NeonBadge variant="gold">{link.cta}</NeonBadge>
                  <span className="text-xs text-slate-600" aria-hidden="true">
                    →
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
