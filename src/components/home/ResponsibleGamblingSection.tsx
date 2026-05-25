import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const resources = [
  {
    title: "Gambling Addiction Help",
    desc: "If gambling is affecting your life, seek professional support immediately.",
    href: "/contact",
  },
  {
    title: "Age Restriction",
    desc: "You must be 18+ (or legal age in your jurisdiction) to use this site.",
    href: "/privacy",
  },
  {
    title: "Legal Disclaimer",
    desc: "Information is editorial only — not legal or financial advice.",
    href: "/cookies",
  },
  {
    title: "Affiliate Disclosure",
    desc: "We may earn commission from casino links. Reviews remain independent.",
    href: "/privacy",
  },
];

export default function ResponsibleGamblingSection() {
  return (
    <section className="border-t border-white/5 bg-navy-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Player Safety"
          title="Responsible Gambling"
          subtitle="Casino Journal BD promotes informed play. Never gamble more than you can afford to lose."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r) => (
            <GlassCard key={r.title} className="p-5">
              <h3 className="font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{r.desc}</p>
              <Link
                href={r.href}
                className="mt-4 inline-block text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Learn more →
              </Link>
            </GlassCard>
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-6 py-4 text-center text-sm text-amber-200/90">
          ⚠️ Gambling involves risk. Set limits, take breaks, and stop if it stops being fun.
          18+ only. BeGambleAware.org · National helplines in your country.
        </p>
      </div>
    </section>
  );
}
