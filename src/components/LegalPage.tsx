"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { LegalDocument } from "@/data/legal";

interface LegalPageProps {
  document: LegalDocument;
  otherPageHref?: string;
  otherPageLabelKey?: "navPrivacy" | "navCookies";
  relatedLinks?: { href: string; label: string }[];
}

export default function LegalPage({
  document,
  otherPageHref,
  otherPageLabelKey,
  relatedLinks,
}: LegalPageProps) {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <div className="bg-gray-50 dark:bg-surface-dark">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
        >
          ← {t("backHome")}
        </Link>

        <article className="card mt-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{document.title}</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {t("lastUpdated")}: {document.lastUpdated}
          </p>

          <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">{document.intro}</p>

          {document.sections.map((section) => (
            <section key={section.title} className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {(relatedLinks?.length || otherPageHref) && (
            <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {relatedLinks?.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 && " · "}
                    <Link
                      href={link.href}
                      className="font-medium text-brand-600 hover:underline dark:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
                {otherPageHref && otherPageLabelKey && (
                  <>
                    {relatedLinks?.length ? " · " : `${t("seeAlso")} `}
                    <Link
                      href={otherPageHref}
                      className="font-medium text-brand-600 hover:underline dark:text-brand-400"
                    >
                      {t(otherPageLabelKey)}
                    </Link>
                  </>
                )}
                {" · "}
                <Link href="/contact" className="font-medium text-brand-600 hover:underline dark:text-brand-400">
                  {t("navContact")}
                </Link>
              </p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
