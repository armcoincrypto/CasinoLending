"use client";

import { useLocale } from "@/context/LocaleContext";
import { localeNames, locales } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as typeof locale)}
      className="rounded-lg border border-white/10 bg-navy-900 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-gold-500/40 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
      aria-label="Select language"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeNames[loc]}
        </option>
      ))}
    </select>
  );
}
