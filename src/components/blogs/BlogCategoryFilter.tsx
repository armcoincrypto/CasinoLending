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
                ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                : "border border-gray-700 bg-[#0B121C] text-gray-300 hover:border-gray-600 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
