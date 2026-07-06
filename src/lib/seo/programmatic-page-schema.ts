import type { ProgrammaticPage } from "@/types/programmatic";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/seo/schema";

export function buildProgrammaticPageJsonLd(
  page: ProgrammaticPage,
  pageUrl: string,
  breadcrumbItems: { name: string; url: string }[]
) {
  const schemas: Record<string, unknown>[] = [
    breadcrumbSchema(breadcrumbItems),
    webPageSchema({
      name: page.h1,
      description: page.metaDescription,
      url: pageUrl,
    }),
  ];

  if (page.faqs && page.faqs.length > 0) {
    schemas.push(faqPageSchema(page.faqs));
  }

  return schemas;
}
