"use client";

import Link from "next/link";
import { internalSeoLinks } from "@/data/programmatic/internal-seo-links";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

export default function Footer() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const year = new Date().getFullYear();

  const links = [
    { href: "/casinos", label: t("navCasinos") },
    { href: "/news", label: t("navNews") },
    { href: "/blogs", label: t("navBlogs") },
    { href: "/how-we-review", label: t("navHowWeReview") },
    { href: "/contact", label: t("navContact") },
  ];

  const legalLinks = [
    { href: "/privacy", label: t("navPrivacy") },
    { href: "/cookies", label: t("navCookies") },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 text-xs font-bold text-navy-950" aria-label="CasinoPulse">
                CP
              </div>
              <span className="font-bold text-white">{t("siteName")}</span>
            </div>
            <p className="mt-3 text-sm text-slate-500">{t("footerDesc")}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t("footerQuickLinks")}</h3>
            <ul className="mt-3 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Guides</h3>
            <ul className="mt-3 space-y-2">
              {internalSeoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
                  >
                    {link.footerLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t("footerLegal")}</h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t("footerResponsible")}</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{t("footerResponsibleText")}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row">
          <span>
            © {year} CasinoPulse. {t("footerRights")}
          </span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-600 dark:hover:text-brand-400">
              {t("navPrivacy")}
            </Link>
            <Link href="/cookies" className="hover:text-brand-600 dark:hover:text-brand-400">
              {t("navCookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
