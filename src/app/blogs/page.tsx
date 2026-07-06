import Link from "next/link";
import type { Metadata } from "next";
import BlogCardStatic from "@/components/blogs/BlogCardStatic";
import BlogNewsletter from "@/components/blogs/BlogNewsletter";
import BlogsTrustBar from "@/components/blogs/BlogsTrustBar";
import {
  BLOGS_HUB_PATH,
  blogsHubIntroSections,
  blogsHubMeta,
  getCasinoReviewPosts,
  getComparisonHubLinks,
  getCryptoGuideLinks,
  getFeaturedReviewPosts,
  getLatestReviewPosts,
  getPaymentGuideLinks,
} from "@/data/blogs-hub";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  collectionPageSchema,
  itemListSchema,
} from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/types";

export const metadata: Metadata = buildPageMetadata({
  title: blogsHubMeta.title,
  description: blogsHubMeta.description,
  path: BLOGS_HUB_PATH,
});

function categoryLabel(category: BlogPost["category"]): string {
  switch (category) {
    case "good-casino":
      return "Top Rated";
    case "bad-casino":
      return "Caution Review";
    case "ranking-casino":
      return "Ranked Review";
    default:
      return "Guide";
  }
}

export default function BlogsPage() {
  const pageUrl = `${siteConfig.url}${BLOGS_HUB_PATH}`;
  const latestReviews = getLatestReviewPosts(12);
  const featuredReviews = getFeaturedReviewPosts();
  const allReviews = getCasinoReviewPosts();
  const paymentGuides = getPaymentGuideLinks();
  const cryptoGuides = getCryptoGuideLinks();
  const comparisonHubs = getComparisonHubLinks();

  const collectionJsonLd = collectionPageSchema({
    name: "Casino Reviews & Expert Guides",
    description: blogsHubMeta.description,
    url: pageUrl,
    dateModified: "2026-07-06",
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Casino Reviews", url: pageUrl },
  ]);

  const featuredItemListJsonLd = itemListSchema({
    name: "Featured Casino Reviews",
    description: "Editorial pillar reviews for leading online casino brands",
    url: pageUrl,
    items: featuredReviews.map((post) => ({
      name: post.title.en,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      description: post.excerpt.en,
    })),
  });

  const latestItemListJsonLd = itemListSchema({
    name: "Latest Casino Reviews",
    description: "Recently updated and pillar casino reviews",
    url: pageUrl,
    items: latestReviews.map((post) => ({
      name: post.title.en,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      description: post.excerpt.en,
    })),
  });

  const jsonLd = [
    collectionJsonLd,
    breadcrumbJsonLd,
    featuredItemListJsonLd,
    latestItemListJsonLd,
  ];

  return (
    <div className="min-h-screen bg-navy-950">
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="relative overflow-hidden border-b border-white/10 bg-hero-premium py-12 sm:py-16">
        <div className="hero-orb hero-orb-gold" />
        <div className="absolute inset-0 bg-grid-premium opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            CasinoPulse Reviews Hub
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Casino Reviews &{" "}
            <span className="gradient-text-premium">Expert Guides</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Independent casino reviews, South Asia payment guides, and crypto gambling
            resources — fully server-rendered for search engines and readers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/how-we-review" className="btn-premium-primary">
              Review methodology
            </Link>
            <Link href="/compare" className="btn-premium-secondary">
              Compare casinos
            </Link>
            <Link href="/author/casinopulse-editorial-team" className="btn-premium-secondary">
              Editorial team
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-slate-300 prose-a:text-gold-400">
          {blogsHubIntroSections.map((section) => (
            <div key={section.heading} className="mb-8">
              <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-900/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Latest Casino Reviews</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Pillar and recently published operator reviews with excerpts visible in HTML for
            crawlers.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestReviews.map((post) => (
              <BlogCardStatic
                key={post.slug}
                post={post}
                categoryLabel={categoryLabel(post.category)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Featured Reviews</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Editorial pillar reviews for Stake, BC.Game, Roobet, Bet365, Rollbit, PokerStars
            Casino, and 888 Casino.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((post) => (
              <BlogCardStatic
                key={post.slug}
                post={post}
                categoryLabel={categoryLabel(post.category)}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      <section id="casino-reviews" className="border-t border-white/10 bg-navy-900/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">All Casino Reviews</h2>
          <p className="mt-3 text-slate-400">
            {allReviews.length} operator reviews — top rated, ranked, and caution editorials.
          </p>
          <ul className="mt-8 columns-1 gap-x-8 text-sm sm:columns-2 lg:columns-3">
            {allReviews.map((post) => (
              <li key={post.slug} className="mb-3 break-inside-avoid">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="font-medium text-gold-400 hover:text-gold-300"
                >
                  {post.title.en}
                </Link>
                <span className="ml-2 text-slate-600">· {categoryLabel(post.category)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="payment-guides" className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Payment Guides</h2>
          <p className="mt-3 text-slate-400">
            UPI, Paytm, PhonePe, IMPS, bKash, Nagad, and regional payment hubs.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paymentGuides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold-500/30"
                >
                  <h3 className="font-semibold text-white">{guide.label}</h3>
                  <p className="mt-2 text-sm text-slate-400">{guide.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="crypto-guides" className="border-t border-white/10 bg-navy-900/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Crypto Guides</h2>
          <p className="mt-3 text-slate-400">Bitcoin, Ethereum, and USDT casino payment explainers.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cryptoGuides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold-500/30"
                >
                  <h3 className="font-semibold text-white">{guide.label}</h3>
                  <p className="mt-2 text-sm text-slate-400">{guide.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="comparisons" className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Comparisons & Payment Hubs</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {comparisonHubs.map((hub) => (
              <li key={hub.href}>
                <Link
                  href={hub.href}
                  className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold-500/30"
                >
                  <h3 className="font-semibold text-white">{hub.label}</h3>
                  <p className="mt-2 text-sm text-slate-400">{hub.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BlogsTrustBar />
      <BlogNewsletter />
    </div>
  );
}
