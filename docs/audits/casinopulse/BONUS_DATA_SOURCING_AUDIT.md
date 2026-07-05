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

---

## Phase E continuation — manual verification attempt (2026-07-06)

**Git push:** Still blocked on server (`could not read Username for 'https://github.com'`). Branch remains 9+ commits ahead until owner pushes with PAT/SSH.

**Automated operator page review (not human mirror login):**

| Brand | Fetch result | Quotable terms? | Action |
|-------|--------------|-----------------|--------|
| Stake | 403 on offers/terms | No | Stays `needs_review` |
| BC.Game | 200 on /bonus | Generic only (“welcome bonuses and ongoing cashback”) | Title updated; stays `needs_review` — no wagering/amount verified |
| Roobet | 200 on /promotions | Categories only, no headline % | Stays `needs_review` |
| LeoVegas | Not reliably fetchable | No | Stays `needs_review` |
| Bet365 | 403 / incomplete | No | Stays `needs_review` |
| Cloudbet | Title mentions welcome package; body blocked | No dollar amounts quoted | Stays `placeholder` |
| Rollbit | Unchanged | No | Stays `rejected` |

**Verified rows after continuation:** still **zero**.

**Re-audit verdict:** `BONUS_DATA_NOT_READY`

**Owner next step:** Human verification logged in browser on target mirror (India/BD diaspora or intended geo), screenshot promotion + terms, then set `verifiedAt` and flip status per row.

---

## Phase E continuation — attempt #3 (2026-07-06, server audit)

**Git push:** Still blocked (`could not read Username for 'https://github.com'`). Branch **10 commits ahead** of `origin/main`.

**Additional checks:**

| Blocker | Detail |
|---------|--------|
| Browser MCP | Unavailable in this environment — cannot run logged-in mirror checks |
| Stake / Bet365 / LeoVegas | HTTP 403 or Cloudflare challenge to server fetch |
| Roobet promotions | SPA — promo cards load via JavaScript after auth/geo routing |
| Roobet bonus policy | `/policies/bonus-promotion` returns shell HTML only to curl |
| BC.Game terms | `/help/terms` redirects to marketing homepage in server fetch |
| Cloudbet | Page title references welcome package; body blocked — **no dollar values stored** |

**Data change this attempt:** Roobet `termsUrl` → `https://roobet.com/policies/bonus-promotion` (policy reference only, not verified).

**Verified rows:** still **0**. **Verdict:** `BONUS_DATA_NOT_READY`. **Phase F:** blocked.

---

## Owner verification worksheet (fill before marking `verified`)

Complete one block per pillar brand in browser on the **target mirror**, then update `src/data/bonuses.ts`.

| Brand | Promotion URL checked | Exact headline copied | Wagering/expiry copied | Terms/policy URL | Geo/eligibility note | Screenshot saved | `verifiedAt` (ISO) | Ready for `verified`? |
|-------|----------------------|------------------------|-------------------------|------------------|----------------------|------------------|--------------------|------------------------|
| Stake | | | | | | | | ☐ |
| BC.Game | | | | | | | | ☐ |
| Roobet | | | | | | | | ☐ |
| LeoVegas | | | | | | | | ☐ |
| Bet365 | | | | | | | | ☐ |

**Rule:** Check “Ready” only when every column is filled and wording matches operator pages exactly. Then set `verificationStatus: "verified"` and commit with audit note.

**Push after local verification:**

```bash
cd /var/www/casino-news-blog
git push https://<GITHUB_PAT>@github.com/gagpoghosyan99/casino-news-blog.git main
```
