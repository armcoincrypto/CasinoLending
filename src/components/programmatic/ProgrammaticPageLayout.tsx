import Link from "next/link";
import type { ProgrammaticPage } from "@/types/programmatic";

interface ProgrammaticPageLayoutProps {
  page: ProgrammaticPage;
  breadcrumbs: { name: string; href: string }[];
  relatedLinks?: { href: string; label: string }[];
  kicker?: string;
}

function renderInlineContent(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link
          key={index}
          href={linkMatch[2]}
          className="font-medium text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
        >
          {linkMatch[1]}
        </Link>
      );
    }
    return part;
  });
}

export default function ProgrammaticPageLayout({
  page,
  breadcrumbs,
  relatedLinks,
  kicker = "Editorial Guide",
}: ProgrammaticPageLayoutProps) {
  const links = relatedLinks ?? page.relatedLinks ?? [];

  return (
    <div className="min-h-screen bg-navy-950">
      <section className="relative overflow-hidden border-b border-white/10 bg-hero-premium">
        <div className="hero-orb hero-orb-gold opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap gap-2 text-sm text-slate-500">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                <Link
                  href={crumb.href}
                  className="hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                >
                  {crumb.name}
                </Link>
              </span>
            ))}
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {kicker}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{page.h1}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{renderInlineContent(page.intro)}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {page.sections.map((section) => (
            <section
              key={section.heading}
              className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h2 className="font-display text-xl font-semibold text-gold-400">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{renderInlineContent(section.body)}</p>
            </section>
          ))}
        </div>

        {page.faqs && page.faqs.length > 0 && (
          <section className="mt-10" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display text-2xl font-bold text-white">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-4">
              {page.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {renderInlineContent(faq.answer)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          {links.length > 0 && (
            <div className="mb-6 border-b border-white/10 pb-6">
              <h2 className="font-display text-lg font-semibold text-white">Related guides</h2>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {links.map((link) => (
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
            </div>
          )}
          <p className="text-sm text-slate-400">
            18+ only. Gambling involves risk. Payment availability can change — verify operator terms
            and local laws before depositing. See our{" "}
            <Link
              href="/responsible-gambling"
              className="text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              responsible gambling guide
            </Link>
            ,{" "}
            <Link href="/casinos" className="text-gold-400 hover:text-gold-300">
              casino reviews
            </Link>
            , and{" "}
            <Link href="/compare" className="text-gold-400 hover:text-gold-300">
              comparison hub
            </Link>{" "}
            for more options.
          </p>
        </div>
      </div>
    </div>
  );
}
