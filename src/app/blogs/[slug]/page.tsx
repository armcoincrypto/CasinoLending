import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, blogPosts } from "@/data/blogs";
import { getCasinoByBlogSlug } from "@/data/casinos";
import BlogContent from "@/components/BlogContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const casino = getCasinoByBlogSlug(slug);

  return (
    <div className="bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
        >
          ← Back to Blogs
        </Link>
        <BlogContent post={post} casino={casino} />
      </div>
    </div>
  );
}
