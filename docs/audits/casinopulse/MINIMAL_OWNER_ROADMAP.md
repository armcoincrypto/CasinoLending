# MINIMAL_OWNER_ROADMAP.md

**Principle:** Complete partial work. No duplication. No thin new pages. No fake authority.

---

## Priority Order (Owner-Locked)

| # | Initiative | Type | Status today |
|---|------------|------|--------------|
| 1 | Sync repo with production | Ops | **Blocked** — `/how-we-review` + 6 files uncommitted |
| 2 | Fix news canonical + Article schema | SEO bug | **Broken** — canonical → `/news` |
| 3 | Remove legacy entity contamination | Brand | **Partial** — `@casinojournalbd` live in schema |
| 4 | Build or complete `/about` | Trust | **404** |
| 5 | Build or complete `/responsible-gambling` | Trust | **Partial** — homepage only |
| 6 | Build or complete `/blacklist` | Asset | **Partial** — data + widget, no route |
| 7 | Fix overstated homepage/meta claims | Honesty | **Overstated** |
| 8 | Deepen only top 5 reviews | Content | **Templates** |
| 9 | Improve `/compare` | Product | **Defer** until trust pages ship |
| 10 | Research report | PR | **Defer** until trust is real |

---

## Phase 1 — Sync Repo with Production (P0)

### Goal
Git matches what PM2 serves.

### Changes
| Action | File |
|--------|------|
| Stage + commit | `src/app/how-we-review/`, `src/data/how-we-review.ts` |
| Stage + commit | Modified: `blogs/[slug]/page.tsx`, `BlogContent.tsx`, `Footer.tsx`, `schema.ts`, `sitemap-config.ts`, `translations.ts` |
| Decision | Strategy `.md` files — commit separately as `docs:` or gitignore; **not** product |

### Risk: **Low**
### SEO impact: None (already live)
### Product impact: Restores source-of-truth for team
### Validation
```bash
git status
npm run prebuild
npm run build
npm run validate:live
```
### Rollback
```bash
git restore --staged . && git restore .
# PM2 continues serving last build until redeploy
```

---

## Phase 2 — Fix News Canonical + Article Schema (P0)

### Goal
Each `/news/[id]` is self-canonical with NewsArticle JSON-LD.

### Changes (modify only — no new schema file)
| File | Change |
|------|--------|
| `src/app/news/[id]/page.tsx` | Add `generateMetadata()` using `buildPageMetadata({ path: `/news/${id}` })` |
| `src/app/news/[id]/page.tsx` | Import and emit `articleSchema()` from existing `schema.ts` |
| `src/app/news/layout.tsx` | Remove static `metadata` export OR reduce to non-canonical-only defaults — child must override canonical |

### Risk: **Low–Medium** (layout/metadata precedence in Next.js 15)
### SEO impact: **High positive** — fixes self-cannibalization of 9 URLs
### Product impact: News becomes technically honest indexable content (content depth still weak — separate decision to expand or noindex)
### Validation
```bash
npm run build
curl -s https://casinopuls.site/news/news-1 | grep canonical
curl -s https://casinopuls.site/news/news-1 | grep -c NewsArticle
npm run validate:live
```
### Rollback
Revert `news/[id]/page.tsx` and `news/layout.tsx`; rebuild.

---

## Phase 3 — Remove Legacy Entity Contamination (P0)

### Goal
`CasinoPulse` entity consistent in UI, schema, and social.

### Changes
| File | Change |
|------|--------|
| `src/config/site.ts` | Update `social.twitter` and `social.telegram` to CasinoPulse handles (or remove until real accounts exist) |
| `src/lib/seo/schema.ts` | `sameAs` uses updated `siteConfig.social` only |
| `scripts/seo/validate-brand-entity.ts` | Add check forbidding `casinojournalbd` in `src/` |

### Risk: **Low**
### SEO impact: **Medium** — entity consistency for Knowledge Panel / E-E-A-T
### Product impact: Brand trust
### Validation
```bash
npm run validate:brand-entity
curl -s https://casinopuls.site/ | grep -i casinojournalbd  # expect empty
```
### Rollback
Restore `site.ts` social values.

**Rule:** Do not create `entity.ts` or second config — fix `site.ts` in place.

---

## Phase 4 — Complete `/about` (P1)

### Goal
Indexable about page with editorial identity; no duplicated methodology.

### Changes
| File | Change |
|------|--------|
| `src/data/legal.ts` OR new `src/data/about.ts` | **One** document: mission, regions, editorial standards summary |
| `src/app/about/page.tsx` | **New** — reuse `LegalPage` component |
| `src/lib/seo/sitemap-config.ts` | Add `/about` |
| `src/components/Footer.tsx` | Add About link |
| `src/lib/translations.ts` | `navAbout` key |

### Risk: **Low**
### SEO impact: **Medium** — E-E-A-T foundation
### Product impact: **High** — first real trust page
### Validation
```bash
curl -sI https://casinopuls.site/about | head -1
npm run validate:live
```
### Rollback
Delete `app/about/`; remove sitemap entry.

**Do NOT:** duplicate how-we-review content — link to it.

---

## Phase 5 — Complete `/responsible-gambling` (P1)

### Goal
Single indexable RG page; homepage section imports same data.

### Changes
| File | Change |
|------|--------|
| `src/data/legal.ts` (extend) | `responsibleGambling` document with helplines, 18+, self-exclusion |
| `src/app/responsible-gambling/page.tsx` | **New** — `LegalPage` |
| `src/components/home/ResponsibleGamblingSection.tsx` | **Refactor** — import resources from shared data (eliminate duplicate array) |
| `src/components/Footer.tsx` | Link to `/responsible-gambling` |
| `src/lib/seo/sitemap-config.ts` | Add URL |

### Risk: **Low**
### SEO impact: **Medium**
### Product impact: **High** — regulatory/trust expectation
### Validation
```bash
curl -sI https://casinopuls.site/responsible-gambling | head -1
npm run prebuild
```
### Rollback
Revert section refactor; delete route.

---

## Phase 6 — Complete `/blacklist` (P1)

### Goal
Indexable blacklist page from **existing** `blacklistedCasinos` data.

### Changes
| File | Change |
|------|--------|
| `src/app/blacklist/page.tsx` | **New** — reuse data + extract card UI from section |
| `src/components/home/BlacklistedCasinosSection.tsx` | **Refactor** — shared card subcomponent or import from page module |
| `src/components/Header.tsx` | Change `/#blacklist` → `/blacklist` |
| `src/lib/seo/sitemap-config.ts` | Add `/blacklist` |
| `src/lib/translations.ts` | Update nav if needed |

### Risk: **Low**
### SEO impact: **Medium** — delivers marketed "blacklist alerts" URL
### Product impact: **High** — first authority asset route
### Validation
```bash
curl -sI https://casinopuls.site/blacklist | head -1
npm run validate:internal-discovery  # update if header links are validated
npm run validate:live
```
### Rollback
Delete route; restore header hash link.

**Do NOT:** create second blacklist data file. **Do NOT:** add `/blacklist/[slug]` until entries have sourced evidence.

---

## Phase 7 — Fix Overstated Homepage/Meta Claims (P1)

### Goal
Metadata matches built product.

### Changes
| File | Change |
|------|--------|
| `src/config/site.ts` | Revise `description` — remove "bonus tracking, blacklist alerts" until Phase 6+ `/bonuses` OR rephrase as "guides and safety resources" |
| `src/lib/translations.ts` | Align hero/OG strings if duplicated |
| `src/components/Header.tsx` | After `/bonuses` ships: `/#bonus-tracker` → `/bonuses` |

### Risk: **Low**
### SEO impact: **Medium** — reduces SERP bounce / trust mismatch
### Product impact: Honest positioning
### Validation
```bash
curl -s https://casinopuls.site/ | grep 'og:description'
npm run validate:brand-entity
```
### Rollback
Restore `site.ts` description.

---

## Phase 8 — Deepen Top 5 Reviews Only (P2)

### Goal
Stake, BC.Game, Roobet, Bet365, LeoVegas — real depth, not 40 templates.

### Changes
| File | Change |
|------|--------|
| `src/data/blogs.ts` | **Override** content for 5 slugs only — do not change generator for all 40 |
| `src/data/casinos.ts` | Add sourced fields only if needed (license URL, payment tested date) |

### Risk: **Medium** (content labor)
### SEO impact: **Medium long-term**
### Product impact: **High** — only path to competitive reviews
### Validation
Manual word count + live curl for expanded sections
### Rollback
Restore template content for those slugs.

**Do NOT:** regenerate all 43 posts. **Do NOT:** create `reviews/` data directory.

---

## Phase 9 — Improve `/compare` (P3 — DEFER)

### Prerequisite
Phases 1–7 complete.

### Minimal path (when ready)
| File | Change |
|------|--------|
| `src/data/programmatic/hub-pages.ts` | Expand `compare` sections with data from `casinos.ts` |
| `src/app/compare/page.tsx` | Optional: add static comparison table component — **reuse** `CasinoCard` or table from casinos page |

**Do NOT:** build interactive comparison engine yet.

---

## Phase 10 — Research Report (P4 — DEFER)

### Prerequisite
About + blacklist + 5 deep reviews live.

### Minimal path
| File | Change |
|------|--------|
| `src/data/reports/south-asia-payments-2026.ts` | **New** — only when report content is written |
| `src/app/reports/[slug]/page.tsx` | **New** — reuse `LegalPage` or `ProgrammaticPageLayout` |

**Do NOT:** create empty report route. Strategy docs reference slugs that must not 404 — **do not add to sitemap until content exists**.

---

## Phase 5 — Safe Implementation Summary Table

| Phase | Modify | New (if necessary) | Risk | SEO | Product |
|-------|--------|-------------------|------|-----|---------|
| 1 Sync | 6 modified files | Commit `how-we-review/` | Low | — | Source of truth |
| 2 News | `news/[id]/page.tsx`, `news/layout.tsx` | None | Low–Med | **High** | Fixes broken news |
| 3 Entity | `site.ts`, `schema.ts`, `validate-brand-entity.ts` | None | Low | Med | Brand trust |
| 4 About | `legal.ts`, `Footer`, `sitemap-config`, `translations` | `app/about/page.tsx` | Low | Med | **High** |
| 5 RG | `legal.ts`, `ResponsibleGamblingSection`, `Footer`, sitemap | `app/responsible-gambling/page.tsx` | Low | Med | **High** |
| 6 Blacklist | `BlacklistedCasinosSection`, `Header`, sitemap | `app/blacklist/page.tsx` | Low | Med | **High** |
| 7 Meta | `site.ts`, `translations` | None | Low | Med | Honesty |
| 8 Reviews | `blogs.ts` (5 slugs), maybe `casinos.ts` | None | Med | Med | **High** |
| 9 Compare | `hub-pages.ts` | Maybe table in compare page | Low | Low | Defer |
| 10 Report | — | Only with real content | Med | High | Defer |

---

## What Should NOT Be Built Yet

- `/press`, `/reports/*` (no content)
- `/bonuses` before blacklist + about ship (lower trust priority; can follow blacklist)
- `/terms` unless legally required before launch (lower than about/RG)
- New crypto/payment programmatic pages
- Author profile routes (43 pages)
- New validation script files
- Second methodology or editorial policy page
- Interactive comparison engine
- Strategy markdown expansion

---

## Suggested Sprint (14 days)

| Days | Work |
|------|------|
| 1 | Phase 1 — commit + push + document deploy |
| 2 | Phase 2 + 3 — news SEO + entity fix |
| 3–4 | Phase 4 + 5 — about + responsible gambling |
| 5–6 | Phase 6 + 7 — blacklist page + meta honesty + header links |
| 7–14 | Phase 8 — top 5 review depth (content work) |

**`/bonuses` page:** slot after blacklist (same pattern, 1 day) — not in owner priority list but natural follow-on using `BonusTracker` refactor.

---

## Validation Commands (Full Suite)

```bash
# Prebuild validators
npm run prebuild

# Production build
npm run build

# Live URL integrity
npm run validate:live

# Individual
npm run validate:routes
npm run validate:internal-discovery
npm run validate:brand-entity

# Spot checks after deploy
curl -sI https://casinopuls.site/about
curl -sI https://casinopuls.site/blacklist
curl -s https://casinopuls.site/news/news-1 | grep -E 'canonical|NewsArticle'
curl -s https://casinopuls.site/ | grep -i casinojournalbd || echo "clean"
```

---

## Owner Verdict

The codebase already contains **80% of the UI and data** needed for blacklist and bonuses — missing only routes and refactors. Trust gap is **routes + copy consolidation**, not greenfield architecture. Highest ROI is **git sync → news SEO fix → entity cleanup → 3 trust pages (about, RG, blacklist) → honest meta**. Everything else is distraction until those ship with live proof.
