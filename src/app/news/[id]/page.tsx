import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsById, sampleNews } from "@/data/news";
import NewsDetail from "@/components/NewsDetail";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return sampleNews.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getNewsById(id);

  if (!article) {
    return {};
  }

  return buildPageMetadata({
    title: article.title.en,
    description: article.excerpt.en,
    path: `/news/${id}`,
    noIndex: article.indexable === false,
  });
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = getNewsById(id);

  if (!article) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/news/${id}`;
  const jsonLd = [];

  if (article.indexable !== false) {
    jsonLd.push(
      articleSchema({
        title: article.title.en,
        description: article.excerpt.en,
        url: pageUrl,
        datePublished: article.publishedAt,
        author: article.source,
      })
    );
  }

  jsonLd.push(
    breadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "News", url: `${siteConfig.url}/news` },
      { name: article.title.en, url: pageUrl },
    ])
  );

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="bg-gray-50 dark:bg-surface-dark">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
          >
            ← Back to News
          </Link>
          <NewsDetail article={article} />
        </div>
      </div>
    </>
  );
}
