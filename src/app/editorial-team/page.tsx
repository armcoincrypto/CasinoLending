import type { Metadata } from "next";
import EditorialTeamClient from "./EditorialTeamClient";
import { EDITORIAL_TEAM_PATH, editorialTeamMeta } from "@/data/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: editorialTeamMeta.title,
  description: editorialTeamMeta.description,
  path: EDITORIAL_TEAM_PATH,
});

export default function EditorialTeamPage() {
  const pageUrl = `${siteConfig.url}${EDITORIAL_TEAM_PATH}`;
  const jsonLd = [
    webPageSchema({
      name: editorialTeamMeta.title,
      description: editorialTeamMeta.description,
      url: pageUrl,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: editorialTeamMeta.title, url: pageUrl },
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
      <EditorialTeamClient />
    </>
  );
}
