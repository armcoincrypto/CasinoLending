"use client";

import LegalPage from "@/components/LegalPage";
import { useLocale } from "@/context/LocaleContext";
import { ABOUT_PATH, responsibleGamblingPage } from "@/data/legal";
import { HOW_WE_REVIEW_PATH } from "@/data/how-we-review";

export default function ResponsibleGamblingPageClient() {
  const { locale } = useLocale();

  return (
    <LegalPage
      document={responsibleGamblingPage[locale]}
      relatedLinks={[
        { href: ABOUT_PATH, label: "About CasinoPulse" },
        { href: HOW_WE_REVIEW_PATH, label: "How We Review Online Casinos" },
      ]}
    />
  );
}
