"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { blogCategoryStyle } from "@/lib/blog-utils";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  categoryLabel: string;
  featured?: boolean;
}

export default function BlogCard({ post, categoryLabel, featured }: BlogCardProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const styles = blogCategoryStyle(post.category);

  const glowClass = featured
    ? "border-gold-500/50 shadow-glow-gold ring-2 ring-gold-500/30"
    : "border-white/10 hover:border-gold-500/30 hover:shadow-glow-gold";

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white/[0.03] p-6 backdrop-blur-sm transition-all ${glowClass}`}
    >
      <span className={`inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-semibold ${styles.pill}`}>
        {categoryLabel}
      </span>

      {featured && (
        <span className="mt-2 inline-flex w-fit rounded-full bg-gold-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-300">
          Featured
        </span>
      )}

      <h2 className="mt-4 text-lg font-bold leading-snug text-white sm:text-xl">
        {getLocalizedText(post.title, locale)}
      </h2>

      <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-400">
        {getLocalizedText(post.excerpt, locale)}
      </p>

      <p className="mt-3 text-xs text-slate-600">
        {post.readTime} {t("minRead")} · {post.author}
      </p>

      <Link
        href={`/blogs/${post.slug}`}
        className="btn-premium-primary mt-6 block w-full text-center"
      >
        {t("readFullReview")}
      </Link>
    </motion.article>
  );
}
