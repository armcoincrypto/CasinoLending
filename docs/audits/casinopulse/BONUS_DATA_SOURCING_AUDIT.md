# CasinoPulse Bonus Data Sourcing Audit — Phase E

**Date:** 2026-07-06  
**Prior audit:** `BONUS_DATA_AUDIT.md` (Phase D)  
**Data file:** `src/data/bonuses.ts`  
**Type file:** `src/types/domain/bonus.ts`

## Final verdict

```text
BONUS_DATA_NOT_READY
```

No row meets the bar for `verificationStatus: "verified"`. An indexable `/bonuses` page remains **blocked**.

---

## Git push status (Phase E start)

- **Branch:** `main`, **8 commits ahead** of `origin/main` (before Phase E commit)
- **Push attempt:** `fatal: could not read Username for 'https://github.com': No such device or address`
- **Action:** Owner must push from authenticated environment (PAT or SSH)

---

## Type changes (single source of truth)

Extended `CasinoBonusOffer` with:

| Field | Purpose |
|-------|---------|
| `verificationStatus` | `verified` \| `needs_review` \| `placeholder` \| `rejected` (required) |
| `sourceUrl?` | Official promotions or operator landing reference |
| `termsUrl?` | Operator terms / help reference |
| `verifiedAt?` | ISO date when offer wording was confirmed (none set) |
| `verificationNotes?` | Editorial audit notes |
| `geoNotes?` | South Asia / mirror eligibility caution |
| `wageringNotes?` | Playthrough caution |
| `kycNotes?` | Verification caution |
| `withdrawalNotes?` | Cashout caution |

Added export: `homepageBonusExamples` — filters out `rejected` rows for widget display.

---

## Pillar brand audit

| Brand | Row ID | Status | sourceUrl | termsUrl | verifiedAt | Notes |
|-------|--------|--------|-----------|----------|------------|-------|
| Stake | b-1 | **needs_review** | stake.com offers tab | stake terms | — | Bot/geo 403 on automated fetch; no quoted headline value |
| BC.Game | b-2 | **needs_review** | bc.game/bonus (HTTP 200) | bc.game terms | — | Layered task promos — terms not line-verified |
| Roobet | b-3 | **needs_review** | roobet.com/promotions (HTTP 200) | roobet terms | — | Rakeback % not quoted |
| LeoVegas | b-4 | **needs_review** | leovegas promotions | leovegas T&Cs | — | Geo-blocked on server fetch; mirror-specific offers |
| Bet365 | b-7 | **needs_review** | bet365.com | help.bet365.com | — | **New row** — jurisdiction-specific offers only |

---

## Secondary rows

| Brand | Row ID | Status | Notes |
|-------|--------|--------|-------|
| Cloudbet | b-5 | **placeholder** | Secondary example; VIP tiers not audited |
| Rollbit | b-6 | **rejected** | Prior no-deposit claim removed from homepage — no source proof |

---

## Verified rows

```text
(none)
```

---

## High-risk handling

- **Rollbit no-deposit:** `rejected`, excluded from `homepageBonusExamples`
- **Numeric match / BTC values:** not present in data
- **“Exclusive” / “guaranteed”:** removed from nav/sidebar translation strings
- **Country tags:** reduced to `GLOBAL` with `geoNotes` until mirror-specific verification

---

## Homepage / nav wording (Phase E)

| Location | Before | After |
|----------|--------|-------|
| Header nav | Bonuses | Bonus examples |
| Hero CTA | Bonus Tracker | Bonus examples |
| News sidebar promos | Exclusive bonus offers | Promo examples — verify terms |
| Trust bar | Best Bonuses | Check bonus terms |

Widget section title unchanged from Phase C2: **Sample Operator Promotions**.

---

## URL reachability (server curl, audit date)

| URL | HTTP |
|-----|------|
| stake.com/?tab=offers | 403 |
| bc.game/bonus | 200 |
| roobet.com/promotions | 200 |
| bet365.com | 403 |
| leovegas.com/en/promotions | 403 |
| cloudbet.com/en/promotions | 200 |
| rollbit.com/promotions | 403 |

403 responses may reflect bot blocking; URLs are references only — **not** verification.

---

## Path to `BONUS_DATA_READY`

For each pillar row:

1. Manually open `sourceUrl` on target mirror
2. Quote exact operator wording in `title` / `value` fields
3. Capture `termsUrl` for wagering, expiry, max bet, excluded games
4. Set `verifiedAt` to ISO audit date
5. Confirm geo eligibility for South Asia audiences in `geoNotes`
6. Set `verificationStatus: "verified"` only when all above are complete

Then re-run this audit and Phase F planning for minimal `/bonuses` index.

---

## `/bonuses` route

**Still blocked.** Do not implement until verdict flips to `BONUS_DATA_READY`.
