import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticPageLayout from "@/components/programmatic/ProgrammaticPageLayout";
import {
  getCryptoPageBySlug,
  getCryptoSlugsForStaticParams,
} from "@/data/programmatic";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildProgrammaticPageJsonLd } from "@/lib/seo/programmatic-page-schema";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCryptoSlugsForStaticParams().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCryptoPageBySlug(slug);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/crypto/${page.slug}`,
  });
}

export default async function CryptoProgrammaticPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getCryptoPageBySlug(slug);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/crypto/${page.slug}`;
  const jsonLd = buildProgrammaticPageJsonLd(page, pageUrl, [
    { name: "Home", url: siteConfig.url },
    { name: "Crypto Casinos", url: `${siteConfig.url}/crypto/bitcoin-casino` },
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
        kicker="Crypto Guide"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Crypto", href: "/crypto/usdt-casino" },
          { name: page.h1, href: `/crypto/${page.slug}` },
        ]}
      />
    </>
  );
}
