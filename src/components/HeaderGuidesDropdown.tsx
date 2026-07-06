"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { navGuideGroups, navGuideLinks } from "@/data/nav-guides";

export default function HeaderGuidesDropdown() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isActive = navGuideLinks.some((link) => pathname.startsWith(link.href));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-400 ${
          isActive ? "text-gold-400" : "text-slate-400"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Guides
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-white/10 bg-navy-950 p-3 shadow-xl">
          {navGuideGroups.map((group) => (
            <div key={group} className="mb-3 last:mb-0">
              <p className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {group}
              </p>
              <ul>
                {navGuideLinks
                  .filter((link) => link.group === group)
                  .map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-2 py-1.5 text-sm hover:bg-white/5 hover:text-gold-300 ${
                          pathname.startsWith(link.href) ? "text-gold-400" : "text-slate-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
