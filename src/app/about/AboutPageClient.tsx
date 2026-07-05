"use client";

import LegalPage from "@/components/LegalPage";
import { useLocale } from "@/context/LocaleContext";
import { RESPONSIBLE_GAMBLING_PATH, aboutPage } from "@/data/legal";
import { HOW_WE_REVIEW_PATH } from "@/data/how-we-review";

export default function AboutPageClient() {
  const { locale } = useLocale();

  return (
    <LegalPage
      document={aboutPage[locale]}
      relatedLinks={[
        { href: HOW_WE_REVIEW_PATH, label: "How We Review Online Casinos" },
        { href: RESPONSIBLE_GAMBLING_PATH, label: "Responsible Gambling" },
      ]}
    />
  );
}
