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
  { href: "/#bonus-tracker", key: "navBonuses" as const },
  { href: "/#blacklist", key: "navSafety" as const },
  { href: "/contact", key: "navContact" as const },
];

export default function Header() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 font-display text-sm font-bold text-navy-950 shadow-glow-gold">
            CJ
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-white">{t("siteName")}</span>
            <p className="text-xs leading-tight text-slate-500">{t("tagline")}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                pathname.startsWith(item.href.replace(/#.*$/, ""))
                  ? "text-gold-400"
                  : "text-slate-400"
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
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="border-t border-white/10 bg-navy-950 px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname.startsWith(item.href.replace(/#.*$/, ""))
                  ? "text-gold-400"
                  : "text-slate-400"
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
