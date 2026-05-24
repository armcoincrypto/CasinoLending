import { translations } from "./translations";
import { Locale } from "@/lib/i18n";

export function useTranslation(locale: Locale) {
  const t = (key: keyof typeof translations.en): string => {
    return translations[locale][key] || translations.en[key];
  };

  return { t };
}

export { translations };
