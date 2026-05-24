import { BlogPost } from "@/types";

export type BlogFilter = "all" | BlogPost["category"];

export function blogCategoryStyle(category: BlogPost["category"]) {
  switch (category) {
    case "good-casino":
      return {
        pill: "bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30",
      };
    case "bad-casino":
      return {
        pill: "bg-orange-100 text-orange-800 border border-orange-200 dark:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/30",
      };
    default:
      return {
        pill: "bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30",
      };
  }
}
