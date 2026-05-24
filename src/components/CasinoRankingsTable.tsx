"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/lib/useTranslation";
import { top40Casinos } from "@/data/casinos";

export default function CasinoRankingsTable() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <section className="card overflow-hidden p-0">
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t("top40Title")}</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t("top40Desc")}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800/50">
              <th className="w-20 px-6 py-3 font-semibold text-gray-900 dark:text-white">
                {t("rankColumn")}
              </th>
              <th className="px-6 py-3 font-semibold text-gray-900 dark:text-white">
                {t("casinoColumn")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {top40Casinos.map((casino) => (
              <tr
                key={casino.id}
                className="bg-white transition-colors hover:bg-brand-50/50 dark:bg-gray-800/30 dark:hover:bg-brand-900/10"
              >
                <td className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400">
                  {casino.rank}
                </td>
                <td className="px-6 py-3">
                  <Link
                    href={`/go/${casino.slug}`}
                    className="font-medium text-gray-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
                  >
                    {casino.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
