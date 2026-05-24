import { Casino } from "@/types";

/**
 * Reads referral URL from environment variables.
 * Add keys in .env like: REFERRAL_PARIMATCH=https://...
 * The envKey on each casino maps to REFERRAL_{ENVKEY}.
 */
export function getReferralUrl(casino: Casino): string | null {
  const key = `REFERRAL_${casino.envKey}`;
  return process.env[key] || process.env[`NEXT_PUBLIC_${key}`] || null;
}

export function buildReferralRedirectUrl(casino: Casino): string {
  const referral = getReferralUrl(casino);
  if (referral) return referral;
  return `/contact?casino=${casino.slug}&referral=pending`;
}
