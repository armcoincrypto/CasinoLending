import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, blogPosts } from "@/data/blogs";
import { getCasinoByBlogSlug } from "@/data/casinos";
import BlogContent from "@/components/BlogContent";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { reviewSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const reviewCategories = new Set(["good-casino", "bad-casino", "ranking-casino"]);

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {};
  }

  return buildPageMetadata({
    title: post.title.en,
    description: post.excerpt.en,
    path: `/blogs/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const casino = getCasinoByBlogSlug(slug);
  const isCasinoReview = reviewCategories.has(post.category);
  const pageUrl = `${siteConfig.url}/blogs/${post.slug}`;

  const reviewJsonLd =
    isCasinoReview && casino
      ? reviewSchema({
          name: casino.name,
          rating: casino.rating,
          description: post.excerpt.en,
          url: pageUrl,
        })
      : null;

  return (
    <div className="bg-gray-50 dark:bg-surface-dark">
      {reviewJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
      )}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
        >
          ← Back to Blogs
        </Link>
        <BlogContent post={post} casino={casino} showMethodologyLink={isCasinoReview} />
      </div>
    </div>
  );
}
