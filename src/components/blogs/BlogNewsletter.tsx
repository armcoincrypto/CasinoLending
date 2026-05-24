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
    <section className="border-y border-gray-800 bg-[#0B121C] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-white sm:text-left sm:text-base">
          {t("blogNewsletterTitle")}
        </p>
        <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("blogNewsletterPlaceholder")}
            required
            className="flex-1 rounded-xl border border-gray-700 bg-[#050A12] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
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
