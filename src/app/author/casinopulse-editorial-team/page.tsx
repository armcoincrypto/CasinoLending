import type { Metadata } from "next";
import Link from "next/link";
import {
  authorPageFaqs,
  authorPageSections,
  editorialAuthor,
} from "@/data/editorial";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  personSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${editorialAuthor.name} — CasinoPulse`,
  description: editorialAuthor.description,
  path: editorialAuthor.path,
});

function renderInlineLink(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link key={index} href={match[2]} className="font-medium text-gold-400 hover:text-gold-300">
          {match[1]}
        </Link>
      );
    }
    return part;
  });
}

export default function AuthorPage() {
  const jsonLd = [
    personSchema({
      name: editorialAuthor.name,
      url: editorialAuthor.url,
      description: editorialAuthor.description,
      jobTitle: editorialAuthor.jobTitle,
      knowsAbout: [...editorialAuthor.knowsAbout],
    }),
    webPageSchema({
      name: editorialAuthor.name,
      description: editorialAuthor.description,
      url: editorialAuthor.url,
      datePublished: "2026-05-24",
      dateModified: "2026-07-06",
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Editorial Team", url: `${siteConfig.url}/editorial-team` },
      { name: editorialAuthor.name, url: editorialAuthor.url },
    ]),
    faqPageSchema([...authorPageFaqs]),
  ];

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="min-h-screen bg-navy-950">
        <section className="relative overflow-hidden border-b border-white/10 bg-hero-premium">
          <div className="hero-orb hero-orb-gold opacity-40" />
          <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <nav className="mb-6 flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-gold-400">
                Home
              </Link>
              <span>/</span>
              <Link href="/editorial-team" className="hover:text-gold-400">
                Editorial Team
              </Link>
              <span>/</span>
              <span className="text-slate-400">{editorialAuthor.name}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Editorial Identity
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              {editorialAuthor.name}
            </h1>
            <p className="mt-2 text-sm text-gold-400">{editorialAuthor.jobTitle}</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {editorialAuthor.description}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {authorPageSections.map((section) => (
              <section
                key={section.heading}
                className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h2 className="font-display text-xl font-semibold text-gold-400">
                  {section.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {renderInlineLink(section.body)}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-10" aria-labelledby="author-faq-heading">
            <h2 id="author-faq-heading" className="font-display text-2xl font-bold text-white">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-4">
              {authorPageFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-400">
            <p>
              18+ only. CasinoPulse provides editorial information — not legal, financial, or
              personalised gambling advice.{" "}
              <Link href="/responsible-gambling" className="text-gold-400 hover:text-gold-300">
                Responsible gambling resources
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
