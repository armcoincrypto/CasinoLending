export interface JackpotWin {
  id: string;
  playerNickname: string;
  country: string;
  countryCode: string;
  amount: number;
  currency: string;
  casinoName: string;
  casinoSlug: string;
  gameName: string;
  timestamp: string;
  isRecord?: boolean;
}
