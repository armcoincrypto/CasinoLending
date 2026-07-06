import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";
import { TERMS_PATH, termsMeta } from "@/data/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: termsMeta.title,
  description: termsMeta.description,
  path: TERMS_PATH,
});

export default function TermsPage() {
  const pageUrl = `${siteConfig.url}${TERMS_PATH}`;
  const jsonLd = [
    webPageSchema({
      name: termsMeta.title,
      description: termsMeta.description,
      url: pageUrl,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: termsMeta.title, url: pageUrl },
    ]),
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
      <TermsPageClient />
    </>
  );
}
