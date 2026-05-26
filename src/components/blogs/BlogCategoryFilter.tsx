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
                ? "bg-gold-500 text-navy-950 shadow-glow-gold"
                : "border border-white/10 text-slate-400 hover:border-gold-500/40 hover:text-gold-300"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
