export const NEWS_CATEGORIES = [
  "All News",
  "Payments",
  "Industry",
  "Sports",
  "Crypto",
  "Live Casino",
  "Regulation",
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export function formatTimeAgo(isoDate: string, locale: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return locale === "hi" ? "अभी" : "Just now";
  if (hours < 24) return locale === "hi" ? `${hours} घंटे पहले` : `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return locale === "hi" ? `${days} दिन पहले` : `${days}d ago`;
  return new Date(isoDate).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN");
}

export function categoryStyles(category: string) {
  const map: Record<string, { pill: string; image: string; icon: string }> = {
    Payments: {
      pill: "bg-orange-100 text-orange-700",
      image: "from-orange-400 via-amber-500 to-yellow-500",
      icon: "💳",
    },
    Industry: {
      pill: "bg-blue-100 text-blue-700",
      image: "from-blue-500 via-indigo-500 to-violet-600",
      icon: "📊",
    },
    Sports: {
      pill: "bg-green-100 text-green-700",
      image: "from-green-500 via-emerald-500 to-teal-600",
      icon: "🏏",
    },
    Crypto: {
      pill: "bg-purple-100 text-purple-700",
      image: "from-violet-500 via-purple-500 to-fuchsia-600",
      icon: "₿",
    },
    "Live Casino": {
      pill: "bg-rose-100 text-rose-700",
      image: "from-rose-500 via-red-500 to-orange-600",
      icon: "🎰",
    },
    Regulation: {
      pill: "bg-slate-100 text-slate-700",
      image: "from-slate-600 via-gray-600 to-zinc-700",
      icon: "⚖️",
    },
  };
  return (
    map[category] ?? {
      pill: "bg-brand-100 text-brand-700",
      image: "from-brand-500 to-amber-500",
      icon: "📰",
    }
  );
}
