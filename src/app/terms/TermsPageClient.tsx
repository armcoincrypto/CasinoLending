"use client";

import LegalPage from "@/components/LegalPage";
import { useLocale } from "@/context/LocaleContext";
import { EDITORIAL_POLICY_PATH, TERMS_PATH, termsOfUsePage } from "@/data/legal";

export default function TermsPageClient() {
  const { locale } = useLocale();

  return (
    <LegalPage
      document={termsOfUsePage[locale]}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: EDITORIAL_POLICY_PATH, label: "Editorial Policy" },
        { href: TERMS_PATH, label: "Terms of Use" },
      ].filter((link) => link.href !== TERMS_PATH)}
    />
  );
}
