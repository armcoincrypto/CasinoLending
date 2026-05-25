/** Feature flags — toggle capabilities without redeploying UI shells */
export const features = {
  aiContentPipeline: false,
  adminPanel: false,
  liveJackpotApi: false,
  telegramAutoPost: false,
  pushNotifications: false,
  userComplaints: false,
  programmaticSeo: true,
  bonusTrackerFilters: true,
  jackpotTicker: true,
} as const;

export type FeatureFlag = keyof typeof features;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return features[flag];
}
