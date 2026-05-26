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
    <section className="border-t border-white/10 bg-navy-950 py-10">
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
            className="flex-1 rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
          <button type="submit" className="btn-premium-primary px-6 py-3">
            {sent ? "✓ Subscribed" : t("blogNewsletterBtn")}
          </button>
        </form>
      </div>
    </section>
  );
}
