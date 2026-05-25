export type BlacklistRisk =
  | "delayed-payouts"
  | "fake-license"
  | "scam-reports"
  | "suspicious-behavior"
  | "unresolved-complaints";

export interface BlacklistedCasino {
  id: string;
  name: string;
  slug: string;
  risks: BlacklistRisk[];
  complaintCount: number;
  summary: string;
  reportedAt: string;
  severity: "high" | "critical";
}
