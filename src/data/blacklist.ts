import type { BlacklistedCasino } from "@/types/domain";

export const blacklistedCasinos: BlacklistedCasino[] = [
  {
    id: "bl-1",
    name: "Mostbet",
    slug: "mostbet",
    risks: ["delayed-payouts", "unresolved-complaints"],
    complaintCount: 847,
    summary: "Multiple unresolved withdrawal complaints over 30+ days reported across forums.",
    reportedAt: new Date(2026, 4, 20).toISOString(),
    severity: "critical",
  },
  {
    id: "bl-2",
    name: "Melbet",
    slug: "melbet",
    risks: ["suspicious-behavior", "delayed-payouts"],
    complaintCount: 612,
    summary: "Pattern of account restrictions after large wins without transparent explanation.",
    reportedAt: new Date(2026, 4, 18).toISOString(),
    severity: "high",
  },
  {
    id: "bl-3",
    name: "Fairspin",
    slug: "fairspin",
    risks: ["fake-license", "scam-reports"],
    complaintCount: 423,
    summary: "License claims disputed; players report inability to verify regulatory status.",
    reportedAt: new Date(2026, 4, 15).toISOString(),
    severity: "critical",
  },
  {
    id: "bl-4",
    name: "Vave",
    slug: "vave",
    risks: ["unresolved-complaints", "suspicious-behavior"],
    complaintCount: 389,
    summary: "Sudden TOS changes affecting bonus withdrawals; elevated complaint velocity.",
    reportedAt: new Date(2026, 4, 12).toISOString(),
    severity: "high",
  },
];
