import Link from "next/link";
import type { Metadata } from "next";
import BlacklistCard from "@/components/blacklist/BlacklistCard";
import { blacklistedCasinos } from "@/data/blacklist";
import {
  BLACKLIST_PATH,
  RESPONSIBLE_GAMBLING_PATH,
  blacklistFaqs,
  blacklistMeta,
} from "@/data/legal";
import { HOW_WE_REVIEW_PATH } from "@/data/how-we-review";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  itemListSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: blacklistMeta.title,
  description: blacklistMeta.description,
  path: BLACKLIST_PATH,
});

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
    itemListSchema({
      name: "CasinoPulse Editorial Blacklist",
      description: blacklistMeta.description,
      url: pageUrl,
      items: blacklistedCasinos.map((casino) => ({
        name: casino.name,
        url: `${siteConfig.url}/blogs/avoid-${casino.slug}`,
        description: casino.summary,
      })),
    }),
    faqPageSchema([...blacklistFaqs]),
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
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
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

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {blacklistedCasinos.map((casino) => (
              <BlacklistCard key={casino.id} casino={casino} showEditorialNote />
            ))}
          </div>

          <section className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-display text-xl font-semibold text-white">Editorial caution</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              CasinoPulse editorial risk assessments summarise reported concerns and risk
              indicators from public player feedback and our review process. We do not state
              unverified accusations as facts. If you believe information is outdated, contact us
              with sources for correction.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
