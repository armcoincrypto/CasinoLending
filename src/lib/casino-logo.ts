/** Rank-based logo path: public/casinos/rank/1.png = Stake, 2 = Bet365, etc. */
export function getRankLogoPath(rank: number): string {
  return `/casinos/rank/${rank}.png`;
}
