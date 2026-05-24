"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

const CONSENT_KEY = "cookie-consent";

export default function CookieConsent() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "essential-only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookieBannerTitle")}
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900 sm:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 dark:text-white">{t("cookieBannerTitle")}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {t("cookieBannerText")}{" "}
            <Link href="/cookies" className="font-medium text-brand-600 underline dark:text-brand-400">
              {t("navCookies")}
            </Link>
            {" · "}
            <Link href="/privacy" className="font-medium text-brand-600 underline dark:text-brand-400">
              {t("navPrivacy")}
            </Link>
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-2">
          <button type="button" onClick={decline} className="btn-outline text-sm">
            {t("cookieDecline")}
          </button>
          <button type="button" onClick={accept} className="btn-primary text-sm">
            {t("cookieAccept")}
          </button>
        </div>
      </div>
    </div>
  );
}
