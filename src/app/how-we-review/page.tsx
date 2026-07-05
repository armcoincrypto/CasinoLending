import Link from "next/link";
import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  editorialIndependence,
  howWeReviewFaqs,
  howWeReviewHero,
  howWeReviewMeta,
  HOW_WE_REVIEW_PATH,
  paymentMethodsReviewed,
  paymentReviewFactors,
  responsibleGamblingPoints,
  reviewProcessSteps,
  scoringCategories,
  updatePolicy,
} from "@/data/how-we-review";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: howWeReviewMeta.title,
  description: howWeReviewMeta.description,
  path: HOW_WE_REVIEW_PATH,
});

export default function HowWeReviewPage() {
  const pageUrl = `${siteConfig.url}${HOW_WE_REVIEW_PATH}`;

  const jsonLd = [
    webPageSchema({
      name: howWeReviewMeta.title,
      description: howWeReviewMeta.description,
      url: pageUrl,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: howWeReviewHero.title, url: pageUrl },
    ]),
    faqPageSchema([...howWeReviewFaqs]),
  ];

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
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
            <span className="text-slate-400">How We Review</span>
          </nav>

          <SectionHeader
            eyebrow="Editorial Standards"
            title={howWeReviewHero.title}
            subtitle={howWeReviewHero.subtitle}
          />

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-white">Our Review Process</h2>
            <ol className="mt-6 space-y-4">
              {reviewProcessSteps.map((step) => (
                <li key={step.step}>
                  <GlassCard className="p-5">
                    <div className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/20 font-display text-sm font-bold text-gold-400">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white">Scoring Categories</h2>
            <p className="mt-3 text-sm text-slate-400">
              Every CasinoPulse review uses the weighted model below. Weights total 100%.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-xs uppercase tracking-wide text-gold-400">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Category</th>
                    <th className="px-5 py-3 font-semibold text-right">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {scoringCategories.map((category) => (
                    <tr key={category.name} className="border-t border-white/10">
                      <td className="px-5 py-3 text-slate-300">{category.name}</td>
                      <td className="px-5 py-3 text-right font-semibold text-white">
                        {category.weight}%
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-gold-500/30 bg-gold-500/5">
                    <td className="px-5 py-3 font-semibold text-white">Total</td>
                    <td className="px-5 py-3 text-right font-bold text-gold-400">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white">
              Payment Review Methodology
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              South Asian players rely on a mix of local wallets, bank rails, and crypto. We review
              whether operators support these methods honestly and whether payouts work in practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {paymentMethodsReviewed.map((method) => (
                <Link
                  key={method.name}
                  href={method.href}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-gold-500/40 hover:text-gold-300"
                >
                  {method.name}
                </Link>
              ))}
            </div>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-slate-400">
              {paymentReviewFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white">Responsible Gambling</h2>
            <GlassCard glow="emerald" className="mt-6 p-5">
              <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300">
                {responsibleGamblingPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-500">
                CasinoPulse promotes informed play. Never gamble more than you can afford to lose.
                18+ only.
              </p>
            </GlassCard>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white">Editorial Independence</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{editorialIndependence}</p>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white">Update Policy</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{updatePolicy}</p>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {howWeReviewFaqs.map((faq) => (
                <GlassCard key={faq.question} className="p-5">
                  <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-sm text-slate-400">
              Read our latest expert reviews or compare casinos using the same scoring framework.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/blogs" className="btn-premium-primary text-sm">
                Browse Reviews
              </Link>
              <Link
                href="/compare"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-gold-400 hover:border-gold-500/40"
              >
                Compare Casinos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
