"use client";

import LegalPage from "@/components/LegalPage";
import { useLocale } from "@/context/LocaleContext";
import {
  EDITORIAL_TEAM_PATH,
  TERMS_PATH,
  editorialPolicyPage,
} from "@/data/legal";
import { HOW_WE_REVIEW_PATH } from "@/data/how-we-review";

export default function EditorialPolicyClient() {
  const { locale } = useLocale();

  return (
    <LegalPage
      document={editorialPolicyPage[locale]}
      relatedLinks={[
        { href: HOW_WE_REVIEW_PATH, label: "How We Review" },
        { href: EDITORIAL_TEAM_PATH, label: "Editorial Team" },
        { href: TERMS_PATH, label: "Terms of Use" },
      ]}
    />
  );
}
