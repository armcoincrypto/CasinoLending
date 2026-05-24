import { BlogPost } from "@/types";

export type BlogFilter = "all" | BlogPost["category"];

export function blogCategoryStyle(category: BlogPost["category"]) {
  switch (category) {
    case "good-casino":
      return {
        pill: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
        featuredRing: "ring-brand-500",
      };
    case "bad-casino":
      return {
        pill: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
        featuredRing: "ring-orange-500",
      };
    default:
      return {
        pill: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
        featuredRing: "ring-blue-500",
      };
  }
}
