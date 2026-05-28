"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { Casino } from "@/types";
import { BlogPost } from "@/types";

interface BlogContentProps {
  post: BlogPost;
  casino?: Casino;
}

export default function BlogContent({ post, casino }: BlogContentProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const content = getLocalizedText(post.content, locale);

  return (
    <article className="mt-6">
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
          post.category === "good-casino"
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            : post.category === "bad-casino"
              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              : post.category === "ranking-casino"
                ? "bg-yellow-100 text-yellow-800 dark:bg-gold-500/15 dark:text-gold-300"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
        }`}
      >
        {post.category === "good-casino"
          ? t("filterGood")
          : post.category === "bad-casino"
            ? t("filterBad")
            : post.category === "ranking-casino"
              ? t("filterRanked")
            : t("filterDaily")}
      </span>

      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
        {getLocalizedText(post.title, locale)}
      </h1>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <span>{post.author}</span>
        <span>·</span>
        <span>
          {post.readTime} {t("minRead")}
        </span>
        <span>·</span>
        <time>{new Date(post.publishedAt).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN")}</time>
      </div>

      {casino && casino.type === "good" && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
          <p className="text-sm text-green-800 dark:text-green-300">
            Ready to play? Use our exclusive referral link for enhanced bonuses.
          </p>
          <Link href={`/go/${casino.slug}`} className="btn-primary mt-3 inline-flex text-sm">
            {t("playNow")} — {casino.name}
          </Link>
        </div>
      )}

      <div className="prose prose-gray mt-8 max-w-none dark:prose-invert">
        {content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("# ")) {
            return (
              <h2 key={i} className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                {paragraph.replace("# ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("## ")) {
            return (
              <h3 key={i} className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                {paragraph.replace("## ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("- ")) {
            return (
              <ul key={i} className="mt-4 list-disc space-y-1 pl-6 text-gray-700 dark:text-gray-300">
                {paragraph.split("\n").map((line, j) => (
                  <li key={j}>{line.replace("- ", "")}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
              {paragraph}
            </p>
          );
        })}
      </div>
    </article>
  );
}
