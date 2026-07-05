import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { ABOUT_PATH, aboutMeta } from "@/data/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: aboutMeta.title,
  description: aboutMeta.description,
  path: ABOUT_PATH,
});

export default function AboutPage() {
  const pageUrl = `${siteConfig.url}${ABOUT_PATH}`;

  const jsonLd = [
    webPageSchema({
      name: aboutMeta.title,
      description: aboutMeta.description,
      url: pageUrl,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: aboutMeta.title, url: pageUrl },
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
      <AboutPageClient />
    </>
  );
}
