import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticPageLayout from "@/components/programmatic/ProgrammaticPageLayout";
import { getHubPageBySlug } from "@/data/programmatic";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildProgrammaticPageJsonLd } from "@/lib/seo/programmatic-page-schema";
import { siteConfig } from "@/config/site";

const SLUG = "compare";

export async function generateMetadata(): Promise<Metadata> {
  const page = getHubPageBySlug(SLUG);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default function ComparePage() {
  const page = getHubPageBySlug(SLUG);

  if (!page || !page.indexable || page.contentQuality !== "expanded") {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/${page.slug}`;
  const jsonLd = buildProgrammaticPageJsonLd(page, pageUrl, [
    { name: "Home", url: siteConfig.url },
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
        kicker="Comparison Hub"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: page.h1, href: `/${page.slug}` },
        ]}
        relatedLinks={[
          { href: "/blogs/review-stake", label: "Stake review" },
          { href: "/blogs/review-bc-game", label: "BC.Game review" },
          { href: "/blogs/review-roobet", label: "Roobet review" },
          { href: "/blogs/review-bet365", label: "Bet365 review" },
          { href: "/blogs/review-leovegas", label: "LeoVegas review" },
          { href: "/blogs/review-rollbit", label: "Rollbit review" },
          { href: "/blogs/review-cloudbet", label: "Cloudbet review" },
          { href: "/blogs/review-betway", label: "Betway review" },
          { href: "/blogs/review-pokerstars-casino", label: "PokerStars review" },
          { href: "/blogs/review-888-casino", label: "888 Casino review" },
          { href: "/pakistan-casino-payments", label: "Pakistan payment hub" },
          { href: "/payment/jazzcash", label: "JazzCash guide" },
          { href: "/payment/easypaisa", label: "Easypaisa guide" },
          { href: "/bangladesh-casino-payments", label: "Bangladesh payment hub" },
          { href: "/payment/bkash", label: "bKash guide" },
          { href: "/payment/nagad", label: "Nagad guide" },
          { href: "/india-casino-payments", label: "India payment hub" },
          { href: "/payment/upi", label: "UPI guide" },
          { href: "/crypto/bitcoin-casino", label: "Bitcoin guide" },
          { href: "/crypto/ethereum-casino", label: "Ethereum guide" },
          { href: "/crypto/usdt-casino", label: "USDT guide" },
          { href: "/blogs/avoid-betwinner", label: "Betwinner review" },
          { href: "/blogs/review-pin-up-casino", label: "Pin-Up review" },
          { href: "/blacklist", label: "Editorial blacklist" },
          { href: "/how-we-review", label: "Review methodology" },
          { href: "/responsible-gambling", label: "Responsible gambling" },
        ]}
      />
    </>
  );
}
