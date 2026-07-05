import Link from "next/link";
import type { ProgrammaticPage } from "@/types/programmatic";

interface ProgrammaticPageLayoutProps {
  page: ProgrammaticPage;
  breadcrumbs: { name: string; href: string }[];
}

export default function ProgrammaticPageLayout({
  page,
  breadcrumbs,
}: ProgrammaticPageLayoutProps) {
  return (
    <div className="min-h-screen bg-navy-950">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-wrap gap-2 text-sm text-slate-500">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              <Link href={crumb.href} className="hover:text-gold-400">
                {crumb.name}
              </Link>
            </span>
          ))}
        </nav>

        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">{page.h1}</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">{page.intro}</p>

        <div className="mt-10 space-y-8">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-gold-400">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">
            18+ only. Gambling involves risk. Verify local laws and operator terms before depositing.
            See our{" "}
            <Link href="/casinos" className="text-gold-400 hover:text-gold-300">
              casino reviews
            </Link>{" "}
            and{" "}
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
