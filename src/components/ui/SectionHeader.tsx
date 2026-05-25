import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  href,
  linkLabel = "View all",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-slate-400">{subtitle}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
