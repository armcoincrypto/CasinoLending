import Link from "next/link";
import { getPillarReviewFreshness } from "@/data/editorial";
import { AUTHOR_PATH, editorialAuthor } from "@/data/editorial";

function formatReviewDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

interface EditorialTrustBlockProps {
  slug: string;
}

export default function EditorialTrustBlock({ slug }: EditorialTrustBlockProps) {
  const freshness = getPillarReviewFreshness(slug);
  if (!freshness) return null;

  return (
    <aside
      className="mt-6 rounded-xl border border-white/10 bg-navy-900/50 p-5 backdrop-blur-sm"
      aria-label="Editorial trust and review metadata"
    >
      <p className="text-sm font-semibold text-white">
        Reviewed by{" "}
        <Link
          href={AUTHOR_PATH}
          className="text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
        >
          {editorialAuthor.name}
        </Link>
      </p>
      <dl className="mt-3 space-y-1 text-sm text-slate-400">
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-slate-500">Content last reviewed:</dt>
          <dd>
            <time dateTime={freshness.lastReviewed}>
              {formatReviewDate(freshness.lastReviewed)}
            </time>
          </dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-slate-500">Last updated:</dt>
          <dd>
            <time dateTime={freshness.dateModified}>
              {formatReviewDate(freshness.dateModified)}
            </time>
          </dd>
        </div>
      </dl>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <li>
          <Link
            href="/how-we-review"
            className="font-medium text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            How We Review
          </Link>
        </li>
        <li>
          <Link
            href="/responsible-gambling"
            className="font-medium text-gold-400 hover:text-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            Responsible Gambling
          </Link>
        </li>
        <li>
          <Link
            href="/editorial-team"
            className="font-medium text-slate-400 hover:text-slate-300"
          >
            Editorial Team
          </Link>
        </li>
      </ul>
    </aside>
  );
}
