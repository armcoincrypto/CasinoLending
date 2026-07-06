import type { BlacklistedCasino } from "@/types/domain";

export const blacklistedCasinos: BlacklistedCasino[] = [
  {
    id: "bl-1",
    name: "Mostbet",
    slug: "mostbet",
    risks: ["delayed-payouts", "unresolved-complaints"],
    complaintCount: 847,
    summary:
      "Public player reports frequently cite withdrawal delays beyond 30 days — editorial risk indicator, not a verified legal finding.",
    reportedAt: new Date(2026, 4, 20).toISOString(),
    severity: "critical",
  },
  {
    id: "bl-2",
    name: "Melbet",
    slug: "melbet",
    risks: ["suspicious-behavior", "delayed-payouts"],
    complaintCount: 612,
    summary:
      "Reported pattern of account restrictions after large wins without transparent explanation in public player feedback.",
    reportedAt: new Date(2026, 4, 18).toISOString(),
    severity: "high",
  },
  {
    id: "bl-3",
    name: "Fairspin",
    slug: "fairspin",
    risks: ["fake-license", "user-reported-concerns"],
    complaintCount: 423,
    summary:
      "License claims disputed in public player reports; players report difficulty verifying regulatory status independently.",
    reportedAt: new Date(2026, 4, 15).toISOString(),
    severity: "critical",
  },
  {
    id: "bl-4",
    name: "Vave",
    slug: "vave",
    risks: ["unresolved-complaints", "suspicious-behavior"],
    complaintCount: 389,
    summary:
      "Reported concerns about sudden terms changes affecting bonus withdrawals; elevated complaint velocity in forums.",
    reportedAt: new Date(2026, 4, 12).toISOString(),
    severity: "high",
  },
];
