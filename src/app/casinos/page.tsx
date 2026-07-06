import type { Metadata } from "next";
import CasinoDirectory from "@/components/casinos/CasinoDirectory";
import { parseCasinoFilter } from "@/lib/casino-filter";
import {
  getCasinosForDirectory,
  getDirectoryListHeading,
  getFeaturedDirectoryCasinos,
} from "@/lib/casinos/getCasinoDirectory";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

interface PageProps {
  searchParams: Promise<{ tab?: string }>;
}

const PAGE_TITLE = "Top 40 Online Casino Reviews for Indian Players";
const PAGE_DESCRIPTION =
  "Compare the top 40 online casinos for Indian and South Asian players. Expert reviews, payment context, editorial trust scores, and casinos to research carefully — updated for 2026.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | ${siteConfig.name}`,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}/casinos` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: `${siteConfig.url}/casinos`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: siteConfig.name,
    images: [{ url: `${siteConfig.url}/og-default.png`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${siteConfig.url}/og-default.png`],
  },
};

export default async function CasinosPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filter = parseCasinoFilter(params.tab ?? null);
  const casinos = getCasinosForDirectory(filter);
  const featured = filter === "bad" ? [] : getFeaturedDirectoryCasinos(10);
  const pageUrl = `${siteConfig.url}/casinos`;

  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Casino Directory", url: pageUrl },
    ]),
    itemListSchema({
      name: getDirectoryListHeading(filter),
      description: PAGE_DESCRIPTION,
      url: pageUrl,
      items: casinos.map((casino) => ({
        name: casino.name,
        url: `${siteConfig.url}/blogs/${casino.blogSlug}`,
        description: casino.summary.en,
      })),
    }),
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
      <CasinoDirectory
        filter={filter}
        listHeading={getDirectoryListHeading(filter)}
        casinos={casinos}
        featured={featured}
        showBadDisclaimer={filter === "bad"}
      />
    </>
  );
}
