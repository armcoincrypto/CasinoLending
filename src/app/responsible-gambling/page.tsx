import type { Metadata } from "next";
import ResponsibleGamblingPageClient from "./ResponsibleGamblingPageClient";
import { RESPONSIBLE_GAMBLING_PATH, responsibleGamblingMeta } from "@/data/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: responsibleGamblingMeta.title,
  description: responsibleGamblingMeta.description,
  path: RESPONSIBLE_GAMBLING_PATH,
});

export default function ResponsibleGamblingPage() {
  const pageUrl = `${siteConfig.url}${RESPONSIBLE_GAMBLING_PATH}`;

  const jsonLd = [
    webPageSchema({
      name: responsibleGamblingMeta.title,
      description: responsibleGamblingMeta.description,
      url: pageUrl,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: responsibleGamblingMeta.title, url: pageUrl },
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
      <ResponsibleGamblingPageClient />
    </>
  );
}
