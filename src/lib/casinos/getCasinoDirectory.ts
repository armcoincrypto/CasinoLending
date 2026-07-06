import {
  badCasinos,
  goodCasinos,
  top40Casinos,
} from "@/data/casinos";
import type { Casino } from "@/types";
import type { CasinoFilter } from "@/lib/casino-filter";

export function getCasinosForDirectory(filter: CasinoFilter): Casino[] {
  if (filter === "good") return goodCasinos;
  if (filter === "bad") return badCasinos;
  return top40Casinos;
}

export function getFeaturedDirectoryCasinos(limit = 10): Casino[] {
  return goodCasinos.slice(0, limit);
}

export function getDirectoryListHeading(filter: CasinoFilter): string {
  if (filter === "good") return "Top-Rated Casino Reviews";
  if (filter === "bad") return "Casinos With Reported Concerns";
  return "Top 40 Online Casino Rankings";
}
