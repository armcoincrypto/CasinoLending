import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticPageLayout from "@/components/programmatic/ProgrammaticPageLayout";
import {
  getPaymentPageBySlug,
  getPaymentSlugsForStaticParams,
} from "@/data/programmatic";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildProgrammaticPageJsonLd } from "@/lib/seo/programmatic-page-schema";
import { siteConfig } from "@/config/site";

const BANGLADESH_PAYMENT_SLUGS = new Set(["bkash", "nagad"]);

function getPaymentHubForSlug(slug: string) {
  if (BANGLADESH_PAYMENT_SLUGS.has(slug)) {
    return {
      label: "Bangladesh Payments",
      path: "/bangladesh-casino-payments",
    };
  }
  return {
    label: "Payments",
    path: "/india-casino-payments",
  };
}

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

  const hub = getPaymentHubForSlug(slug);
  const pageUrl = `${siteConfig.url}/payment/${page.slug}`;
  const jsonLd = buildProgrammaticPageJsonLd(page, pageUrl, [
    { name: "Home", url: siteConfig.url },
    { name: hub.label, url: `${siteConfig.url}${hub.path}` },
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
        kicker="Payment Guide"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: hub.label, href: hub.path },
          { name: page.h1, href: `/payment/${page.slug}` },
        ]}
      />
    </>
  );
}
