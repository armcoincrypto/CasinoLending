import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticPageLayout from "@/components/programmatic/ProgrammaticPageLayout";
import { getHubPageBySlug } from "@/data/programmatic";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

const SLUG = "compare";

export async function generateMetadata(): Promise<Metadata> {
  const page = getHubPageBySlug(SLUG);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default function ComparePage() {
  const page = getHubPageBySlug(SLUG);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    notFound();
  }

  const jsonLd = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: page.h1, url: `${siteConfig.url}/${page.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProgrammaticPageLayout
        page={page}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: page.h1, href: `/${page.slug}` },
        ]}
        relatedLinks={[
          { href: "/blogs/review-stake", label: "Stake review" },
          { href: "/blogs/review-bc-game", label: "BC.Game review" },
          { href: "/blogs/review-roobet", label: "Roobet review" },
          { href: "/blogs/review-bet365", label: "Bet365 review" },
          { href: "/blogs/review-leovegas", label: "LeoVegas review" },
        ]}
      />
    </>
  );
}
