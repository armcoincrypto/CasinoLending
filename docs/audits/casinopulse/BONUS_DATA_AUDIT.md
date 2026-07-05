# CasinoPulse Bonus Data Audit — Phase D

**Date:** 2026-07-06  
**File audited:** `src/data/bonuses.ts`  
**Consumer surfaces:** Homepage `#bonus-tracker` widget (`BonusTracker.tsx`) only — no `/bonuses` route exists.

## Verdict

**`BONUS_DATA_NOT_READY`**

Do not build an indexable `/bonuses` page until every listed offer has a verified operator source, dated check, and honest eligibility notes.

## Entry audit

| ID | Casino | Slug | `/go` valid | Type | Value / wagering | Source URL | Last verified | Status |
|----|--------|------|-------------|------|----------------|------------|---------------|--------|
| b-1 | Stake | stake | Yes | welcome | Placeholder — "Varies by region" / "Check operator T&Cs" | None | None | **NOT VERIFIED** |
| b-2 | BC.Game | bc-game | Yes | crypto | Placeholder — "Varies — verify on site" | None | None | **NOT VERIFIED** |
| b-3 | Roobet | roobet | Yes | cashback | Placeholder — "Varies by activity" | None | None | **NOT VERIFIED** |
| b-4 | LeoVegas | leovegas | Yes | free-spins | Placeholder — "Varies by mirror" | None | None | **NOT VERIFIED** |
| b-5 | Cloudbet | cloudbet | Yes | vip | "Custom limits" / "Varies" | None | None | **NOT VERIFIED** |
| b-6 | Rollbit | rollbit | Yes | no-deposit | Placeholder — "Varies — verify on site" | None | None | **NOT VERIFIED** |

## Coverage gaps

- **Bet365** — pillar review exists (`review-bet365`) but no bonus row.
- **Pillar alignment** — 5 editorial pillar brands; bonus file covers 4 of 5 (missing Bet365).
- **Country tags** (`BD`, `IN`, `PK`, `GLOBAL`, `LK`) — not verified against operator geo rules.
- **Game tags** (e.g. Slots, Live Casino) — not verified against promotion T&Cs.
- **`updatedAt`** — build-time static dates, not live operator checks.

## Data model gaps (required before `/bonuses`)

Current `CasinoBonusOffer` type lacks fields needed for E-E-A-T bonus pages:

- `sourceUrl` / `termsUrl` (operator promotion page)
- `verifiedAt` or `lastCheckedAt`
- `verificationStatus` (`example` | `verified` | `expired`)
- Optional structured fields: min deposit, max bonus, wagering multiple, expiry, eligible games
- Editorial note when offer is region-blocked for South Asia

## Homepage widget status (post Phase C2)

The widget is **honestly labeled** as sample/unverified examples. That is acceptable for a non-indexable homepage section. It is **not** acceptable as the data source for an indexable bonus hub.

## Recommended cleanup before `BONUS_DATA_READY`

1. Add sourcing fields to `CasinoBonusOffer` (no new schema.org types required).
2. For each row: link to official promotion page, record check date, replace placeholders with quoted headline terms only when verified same-day.
3. Add Bet365 row or explicitly exclude with reason.
4. Remove or relabel `no-deposit` types unless independently confirmed on operator site.
5. Drop `isHot` and numeric wagering unless sourced.
6. Re-run this audit; only then consider `/bonuses` index page.

## Phase D decision

**Do not implement `/bonuses` in the next phase.** Continue with bonus data sourcing workflow first.
