"use client";

import LegalPage from "@/components/LegalPage";
import { useLocale } from "@/context/LocaleContext";
import { privacyPolicy } from "@/data/legal";

export default function PrivacyPage() {
  const { locale } = useLocale();

  return (
    <LegalPage
      document={privacyPolicy[locale]}
      otherPageHref="/cookies"
      otherPageLabelKey="navCookies"
    />
  );
}
