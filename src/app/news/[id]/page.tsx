import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById, sampleNews } from "@/data/news";
import NewsDetail from "@/components/NewsDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return sampleNews.map((article) => ({ id: article.id }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = getNewsById(id);

  if (!article) {
    notFound();
  }

  return (
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
  );
}
