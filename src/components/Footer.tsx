"use client";

import Link from "next/link";
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
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white">
                CP
              </div>
              <span className="font-bold text-gray-900 dark:text-white">{t("siteName")}</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{t("footerDesc")}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h3>
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
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Responsible Gaming</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              18+ only. Gamble responsibly. If you need help, visit begambleaware.org
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          © {year} CasinoPulse India. {t("footerRights")}
        </div>
      </div>
    </footer>
  );
}
