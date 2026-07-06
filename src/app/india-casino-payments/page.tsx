import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticPageLayout from "@/components/programmatic/ProgrammaticPageLayout";
import { getHubPageBySlug } from "@/data/programmatic";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildProgrammaticPageJsonLd } from "@/lib/seo/programmatic-page-schema";
import { siteConfig } from "@/config/site";

const SLUG = "india-casino-payments";

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

export default function IndiaCasinoPaymentsPage() {
  const page = getHubPageBySlug(SLUG);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/${page.slug}`;
  const jsonLd = buildProgrammaticPageJsonLd(page, pageUrl, [
    { name: "Home", url: siteConfig.url },
    { name: page.h1, url: pageUrl },
  ]);

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProgrammaticPageLayout
        page={page}
        kicker="Payment Authority Hub"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: page.h1, href: `/${page.slug}` },
        ]}
      />
    </>
  );
}
