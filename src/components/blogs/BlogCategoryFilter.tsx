"use client";

import type { BlogFilter } from "@/lib/blog-utils";

interface BlogCategoryFilterProps {
  active: BlogFilter;
  onChange: (filter: BlogFilter) => void;
  labels: { key: BlogFilter; label: string }[];
}

export default function BlogCategoryFilter({
  active,
  onChange,
  labels,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {labels.map((f) => {
        const isActive = active === f.key;
        return (
          <button
            key={f.key}
            type="button"
            onClick={() => onChange(f.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              isActive
                ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                : "border border-gray-300 bg-white text-gray-700 hover:border-brand-300 hover:text-brand-700 dark:border-gray-700 dark:bg-[#0B121C] dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-white"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
