export type CasinoFilter = "all" | "good" | "bad";

export function parseCasinoFilter(tab: string | null): CasinoFilter {
  if (tab === "good" || tab === "bad") return tab;
  return "all";
}
