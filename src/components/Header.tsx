"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "/casinos", key: "navCasinos" as const },
  { href: "/news", key: "navNews" as const },
  { href: "/blogs", key: "navBlogs" as const },
  { href: "/contact", key: "navContact" as const },
];

export default function Header() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-surface-dark/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
            CP
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-gray-900 dark:text-white">{t("siteName")}</span>
            <p className="text-xs leading-tight text-gray-500 dark:text-gray-400">{t("tagline")}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400 ${
                pathname.startsWith(item.href)
                  ? "text-brand-600 dark:text-brand-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 md:hidden dark:border-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden dark:border-gray-800 dark:bg-surface-dark">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname.startsWith(item.href)
                  ? "text-brand-600"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
