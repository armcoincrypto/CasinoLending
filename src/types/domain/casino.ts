export type CasinoLicense =
  | "mga"
  | "ukgc"
  | "curacao"
  | "kahnawake"
  | "costa-rica"
  | "unlicensed"
  | "unknown";

export type TrustTier = "verified" | "caution" | "blacklisted";

export interface CasinoTrustScore {
  overall: number;
  licenseQuality: number;
  payoutSpeed: number;
  complaintRatio: number;
  supportQuality: number;
  transparency: number;
}

export interface CasinoReviewMeta {
  slug: string;
  launchYear?: number;
  ownership?: string;
  license: CasinoLicense;
  licenseDisplay: string;
  supportedCountries: string[];
  restrictedCountries: string[];
  paymentMethods: string[];
  cryptoSupport: boolean;
  mobileApps: boolean;
  trustScore: CasinoTrustScore;
  trustTier: TrustTier;
  editorVerdict: string;
  pros: string[];
  cons: string[];
}

export interface CasinoBonusAnalysis {
  bonusSize: string;
  wageringRequirement: string;
  maxWithdrawal: string;
  hiddenTerms: string[];
  usabilityScore: number;
}

export interface CasinoWithdrawalAnalysis {
  payoutSpeed: string;
  kycDelays: string;
  cryptoPayout: boolean;
  blockedWithdrawalRate?: number;
}
