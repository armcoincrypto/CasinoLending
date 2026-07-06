import Link from "next/link";
import type { Metadata } from "next";
import BlacklistCard from "@/components/blacklist/BlacklistCard";
import { blacklistedCasinos } from "@/data/blacklist";
import {
  BLACKLIST_PATH,
  RESPONSIBLE_GAMBLING_PATH,
  blacklistMeta,
} from "@/data/legal";
import { HOW_WE_REVIEW_PATH } from "@/data/how-we-review";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: blacklistMeta.title,
  description: blacklistMeta.description,
  path: BLACKLIST_PATH,
});

const EDITORIAL_DISCLAIMER =
  "CasinoPulse editorial risk assessments are based on publicly visible player reports, operator terms, and our review framework. They are not legal findings, regulator orders, or proof of misconduct.";

const CORRECTIONS_NOTICE =
  "If you represent an operator or believe an item is outdated, contact CasinoPulse with verifiable sources for review.";

export default function BlacklistPage() {
  const pageUrl = `${siteConfig.url}${BLACKLIST_PATH}`;

  const jsonLd = [
    webPageSchema({
      name: blacklistMeta.title,
      description: blacklistMeta.description,
      url: pageUrl,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Casino Blacklist", url: pageUrl },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-navy-950">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-gold-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">Casino Blacklist</span>
          </nav>

          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Casino Blacklist — Editorial Risk Assessments
          </h1>

          <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
            <p className="text-sm leading-relaxed text-slate-300">{EDITORIAL_DISCLAIMER}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{CORRECTIONS_NOTICE}</p>
            <p className="mt-3 text-sm">
              <Link href="/contact" className="font-medium text-gold-400 hover:text-gold-300">
                Contact CasinoPulse for corrections →
              </Link>
            </p>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            This page lists CasinoPulse editorial risk assessments for online casinos with
            frequently reported concerns and risk indicators. These are not legal findings,
            regulator orders, or verified accusations of fraud. Players should review operator
            terms carefully and use our{" "}
            <Link href={HOW_WE_REVIEW_PATH} className="text-gold-400 hover:text-gold-300">
              review methodology
            </Link>{" "}
            before depositing.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            18+ only. Gambling involves risk. See our{" "}
            <Link href={RESPONSIBLE_GAMBLING_PATH} className="text-emerald-400 hover:text-emerald-300">
              responsible gambling resources
            </Link>
            .
          </p>

          <p className="mt-6 text-xs text-slate-600">{CORRECTIONS_NOTICE}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {blacklistedCasinos.map((casino) => (
              <BlacklistCard key={casino.id} casino={casino} showEditorialNote />
            ))}
          </div>

          <section className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-xl font-semibold text-white">Editorial caution</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              CasinoPulse editorial risk assessments summarise reported concerns and risk
              indicators from public player feedback and our review process. We do not state
              unverified accusations as facts. Listings reflect editorial judgment at review time
              and may change when new evidence is provided.{" "}
              <Link href="/contact" className="text-gold-400 hover:text-gold-300">
                Request a correction
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
