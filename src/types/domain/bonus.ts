export type BonusType =
  | "welcome"
  | "cashback"
  | "free-spins"
  | "vip"
  | "crypto"
  | "no-deposit";

export type BonusVerificationStatus =
  | "verified"
  | "needs_review"
  | "placeholder"
  | "rejected";

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
  verificationStatus: BonusVerificationStatus;
  sourceUrl?: string;
  termsUrl?: string;
  verifiedAt?: string;
  verificationNotes?: string;
  geoNotes?: string;
  wageringNotes?: string;
  kycNotes?: string;
  withdrawalNotes?: string;
  /** @deprecated Homepage no longer uses hot badges — kept for backward compatibility */
  isHot?: boolean;
}
