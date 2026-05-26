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
    <div className="sticky top-[73px] z-40 border-b border-white/10 bg-navy-950/95 backdrop-blur-xl">
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
                    ? "bg-emerald-500 text-navy-950 shadow-glow-emerald"
                    : "border border-white/10 text-slate-400 hover:border-emerald-500/40 hover:text-emerald-300"
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
