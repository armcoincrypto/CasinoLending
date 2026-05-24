import { Locale } from "@/types";

export type { Locale };

export const locales: Locale[] = ["en", "hi"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
};

export function getLocalizedText<T extends { en: string; hi: string }>(
  text: T,
  locale: Locale
): string {
  return text[locale] || text.en;
}
