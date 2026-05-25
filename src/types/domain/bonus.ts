export type BonusType =
  | "welcome"
  | "cashback"
  | "free-spins"
  | "vip"
  | "crypto"
  | "no-deposit";

export interface CasinoBonusOffer {
  id: string;
  casinoName: string;
  casinoSlug: string;
  type: BonusType;
  title: string;
  value: string;
  wagering: string;
  countries: string[];
  games?: string[];
  updatedAt: string;
  isHot?: boolean;
}
