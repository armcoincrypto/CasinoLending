import type { Metadata } from "next";
import EditorialPolicyClient from "./EditorialPolicyClient";
import { EDITORIAL_POLICY_PATH, editorialPolicyMeta } from "@/data/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: editorialPolicyMeta.title,
  description: editorialPolicyMeta.description,
  path: EDITORIAL_POLICY_PATH,
});

export default function EditorialPolicyPage() {
  const pageUrl = `${siteConfig.url}${EDITORIAL_POLICY_PATH}`;
  const jsonLd = [
    webPageSchema({
      name: editorialPolicyMeta.title,
      description: editorialPolicyMeta.description,
      url: pageUrl,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: editorialPolicyMeta.title, url: pageUrl },
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
      <EditorialPolicyClient />
    </>
  );
}
