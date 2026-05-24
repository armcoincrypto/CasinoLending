"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";

export default function BlogNewsletter() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section className="border-y border-gray-200 bg-gray-50 py-10 dark:border-gray-800 dark:bg-[#0B121C]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-gray-900 sm:text-left sm:text-base dark:text-white">
          {t("blogNewsletterTitle")}
        </p>
        <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("blogNewsletterPlaceholder")}
            required
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-[#050A12] dark:text-white dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-500"
          >
            {sent ? "✓" : t("blogNewsletterBtn")}
          </button>
        </form>
      </div>
    </section>
  );
}
