import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticPageLayout from "@/components/programmatic/ProgrammaticPageLayout";
import {
  getPaymentPageBySlug,
  getPaymentSlugsForStaticParams,
} from "@/data/programmatic";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPaymentSlugsForStaticParams().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPaymentPageBySlug(slug);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/payment/${page.slug}`,
  });
}

export default async function PaymentProgrammaticPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPaymentPageBySlug(slug);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    notFound();
  }

  const jsonLd = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Payments", url: `${siteConfig.url}/india-casino-payments` },
    { name: page.h1, url: `${siteConfig.url}/payment/${page.slug}` },
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
          { name: "Payments", href: "/india-casino-payments" },
          { name: page.h1, href: `/payment/${page.slug}` },
        ]}
      />
    </>
  );
}
