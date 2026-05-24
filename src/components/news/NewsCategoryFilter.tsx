"use client";

import { NEWS_CATEGORIES, type NewsCategory } from "@/lib/news-utils";

const CATEGORY_ICONS: Record<string, string> = {
  "All News": "📰",
  Payments: "💳",
  Industry: "📊",
  Sports: "🏏",
  Crypto: "₿",
  "Live Casino": "🎰",
  Regulation: "⚖️",
};

interface NewsCategoryFilterProps {
  active: NewsCategory;
  onChange: (category: NewsCategory) => void;
}

export default function NewsCategoryFilter({ active, onChange }: NewsCategoryFilterProps) {
  return (
    <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 py-4">
          {NEWS_CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange(cat)}
                className={`flex flex-shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                <span aria-hidden>{CATEGORY_ICONS[cat]}</span>
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
