import { BlogPost } from "@/types";

export type BlogFilter = "all" | BlogPost["category"];

export function blogCategoryStyle(category: BlogPost["category"]) {
  switch (category) {
    case "good-casino":
      return {
        pill: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
      };
    case "bad-casino":
      return {
        pill: "bg-danger-500/20 text-danger-300 border border-danger-500/30",
      };
    default:
      return {
        pill: "bg-gold-500/20 text-gold-300 border border-gold-500/30",
      };
  }
}
