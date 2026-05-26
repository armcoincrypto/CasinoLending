"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedText } from "@/lib/i18n";
import { useTranslation } from "@/lib/useTranslation";
import { blogPosts } from "@/data/blogs";
import { blogCategoryStyle } from "@/lib/blog-utils";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import NeonBadge from "@/components/ui/NeonBadge";

export default function HomeBlogPreview() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const preview = blogPosts.slice(0, 6);

  const getCategoryLabel = (category: (typeof blogPosts)[0]["category"]) => {
    if (category === "good-casino") return t("filterGood");
    if (category === "bad-casino") return t("filterBad");
    return t("filterDaily");
  };

  return (
    <section id="expert-reviews" className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Expert Reviews"
          title={t("blogsTitle")}
          subtitle={t("blogsSubtitle")}
          href="/blogs"
          linkLabel={t("readFullReview")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((post, i) => {
            const styles = blogCategoryStyle(post.category);
            const variant =
              post.category === "good-casino"
                ? "emerald"
                : post.category === "bad-casino"
                  ? "danger"
                  : "gold";

            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={`/blogs/${post.slug}`}>
                  <GlassCard
                    glow={variant === "gold" ? "gold" : variant === "emerald" ? "emerald" : "danger"}
                    className="group h-full p-5 transition-all hover:scale-[1.02]"
                  >
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${styles.pill}`}>
                      {getCategoryLabel(post.category)}
                    </span>
                    <h3 className="mt-4 line-clamp-2 text-lg font-bold text-white group-hover:text-gold-300">
                      {getLocalizedText(post.title, locale)}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-500">
                      {getLocalizedText(post.excerpt, locale)}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                      <span>{post.readTime} {t("minRead")}</span>
                      <NeonBadge variant={variant}>{t("readMore")}</NeonBadge>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blogs" className="btn-premium-primary">
            {t("blogsHeroCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
