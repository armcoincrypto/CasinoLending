"use client";

import LegalPage from "@/components/LegalPage";
import { useLocale } from "@/context/LocaleContext";
import { cookiePolicy } from "@/data/legal";

export default function CookiesPage() {
  const { locale } = useLocale();

  return (
    <LegalPage
      document={cookiePolicy[locale]}
      otherPageHref="/privacy"
      otherPageLabelKey="navPrivacy"
    />
  );
}
