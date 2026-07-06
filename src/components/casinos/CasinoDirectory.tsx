import Link from "next/link";
import type { Casino } from "@/types";
import type { CasinoFilter } from "@/lib/casino-filter";
import CasinoDirectoryCard from "@/components/casinos/CasinoDirectoryCard";
import GlassCard from "@/components/ui/GlassCard";

const FILTER_TABS: { key: CasinoFilter; label: string; href: string }[] = [
  { key: "all", label: "All rankings", href: "/casinos" },
  { key: "good", label: "Top rated", href: "/casinos?tab=good" },
  { key: "bad", label: "Caution list", href: "/casinos?tab=bad" },
];

const RESOURCE_LINKS = [
  { href: "/blogs/review-stake", label: "Stake review" },
  { href: "/blogs/review-bc-game", label: "BC.Game review" },
  { href: "/blogs/review-roobet", label: "Roobet review" },
  { href: "/blogs/review-bet365", label: "Bet365 review" },
  { href: "/blogs/review-leovegas", label: "LeoVegas review" },
  { href: "/payment/upi", label: "UPI payment guide" },
  { href: "/india-casino-payments", label: "India payment hub" },
  { href: "/compare", label: "Compare casinos" },
  { href: "/how-we-review", label: "Review methodology" },
  { href: "/responsible-gambling", label: "Responsible gambling" },
];

type CasinoDirectoryProps = {
  filter: CasinoFilter;
  listHeading: string;
  casinos: Casino[];
  featured: Casino[];
  showBadDisclaimer?: boolean;
};

export default function CasinoDirectory({
  filter,
  listHeading,
  casinos,
  featured,
  showBadDisclaimer = false,
}: CasinoDirectoryProps) {
  return (
    <div className="min-h-screen bg-navy-950">
      <section className="relative overflow-hidden border-b border-white/10 bg-hero-premium">
        <div className="hero-orb hero-orb-gold opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Casino Directory
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Top Online Casino Reviews for South Asian Players
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Compare editor-rated casinos including Stake, BC.Game, Roobet, Bet365, and LeoVegas.
            Each listing links to an independent CasinoPulse review covering payments, licensing
            caveats, bonus honesty, and responsible gambling notes. Scores are editorial estimates —
            not guarantees.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Independent reviews", "Payment context", "18+ only"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap gap-2"
          aria-label="Casino directory filters"
        >
          {FILTER_TABS.map((tab) => (
            <Link
              key={tab.key}
              href={tab.href}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${
                filter === tab.key
                  ? "border-gold-500/50 bg-gold-500/20 text-gold-300"
                  : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
              }`}
              aria-current={filter === tab.key ? "page" : undefined}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {showBadDisclaimer && (
          <GlassCard glow="danger" className="mt-6 p-5">
            <p className="font-semibold text-danger-300">Editorial caution list</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              These brands show repeated reported concerns in public player feedback. CasinoPulse
              documents risk indicators — not legal findings. Verify operator terms and local laws
              before depositing. See our{" "}
              <Link href="/blacklist" className="text-gold-400 hover:text-gold-300">
                editorial blacklist
              </Link>{" "}
              for deeper assessments.
            </p>
          </GlassCard>
        )}

        {filter !== "bad" && featured.length > 0 && (
          <section className="mt-10" aria-labelledby="featured-casinos-heading">
            <h2
              id="featured-casinos-heading"
              className="font-display text-2xl font-bold text-white"
            >
              Featured pillar reviews
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              In-depth editorial reviews with FAQ coverage, payment notes, and compliance language.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {featured.map((casino) => (
                <CasinoDirectoryCard key={casino.id} casino={casino} featured />
              ))}
            </div>
          </section>
        )}

        <section className="mt-12" aria-labelledby="directory-list-heading">
          <h2 id="directory-list-heading" className="font-display text-2xl font-bold text-white">
            {listHeading}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {casinos.length} casinos · Updated for 2026 · Terms and availability vary by region
          </p>
          <div className="mt-6 space-y-4">
            {casinos.map((casino) => (
              <CasinoDirectoryCard key={casino.id} casino={casino} />
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="directory-resources-heading">
          <h2 id="directory-resources-heading" className="font-display text-xl font-bold text-white">
            Related guides &amp; trust resources
          </h2>
          <GlassCard className="mt-4 p-6">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-medium text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Ratings follow our published{" "}
              <Link href="/how-we-review" className="text-gold-400 hover:text-gold-300">
                review methodology
              </Link>
              . CasinoPulse may earn affiliate commissions from outbound links; scores remain
              independent. Gambling involves risk —{" "}
              <Link href="/responsible-gambling" className="text-gold-400 hover:text-gold-300">
                read responsible gambling guidance
              </Link>
              . 18+ only.
            </p>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
