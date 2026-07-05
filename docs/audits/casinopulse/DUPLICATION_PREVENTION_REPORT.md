# DUPLICATION_PREVENTION_REPORT.md

**Rule:** Reuse and complete partial implementations. Create new files only when no safe existing asset exists.

---

## 1. Blacklist

### Already exists (DO NOT duplicate)
| Asset | Path | Notes |
|-------|------|-------|
| Data | `src/data/blacklist.ts` | `blacklistedCasinos` — 4 entries |
| Types | `src/types/domain/blacklist.ts` | `BlacklistedCasino` |
| Homepage UI | `src/components/home/BlacklistedCasinosSection.tsx` | Full card grid, risk labels, links to `/blogs/avoid-{slug}` |
| Related blogs | `src/data/blogs.ts` | 16 `avoid-*` posts |
| Casino bad tab | `/casinos?tab=bad` | Linked as "Research list" |

### Safe completion path (no new data file)
- **New route only:** `src/app/blacklist/page.tsx`
- **Reuse:** import `blacklistedCasinos` from existing `blacklist.ts`
- **Reuse UI:** Extract or share render logic from `BlacklistedCasinosSection` — prefer **refactoring section to accept optional `variant="homepage"|"page"`** OR import shared subcomponent — do NOT copy card markup into a second component file unless extracting shared `BlacklistCard` from existing section
- **Reuse SEO:** `buildPageMetadata`, `webPageSchema`, `breadcrumbSchema` from `lib/seo/`
- **Do NOT create:** `blacklist-database.ts`, `blacklist-v2.ts`, second blacklist type

---

## 2. Bonuses

### Already exists (DO NOT duplicate)
| Asset | Path | Notes |
|-------|------|-------|
| Data | `src/data/bonuses.ts` | `bonusOffers` — 6 entries |
| Types | `src/types/domain/` (bonus types) | `CasinoBonusOffer`, `BonusType` |
| Homepage UI | `src/components/home/BonusTracker.tsx` | Filters, cards, `/go/` links |
| Casino bonus fields | `src/data/casinos.ts` | Per-casino bonus copy in reviews |

### Safe completion path
- **New route only:** `src/app/bonuses/page.tsx`
- **Reuse:** `bonusOffers`, filter logic from `BonusTracker`
- **Prefer:** Refactor `BonusTracker` to render from shared props or compose same filter + grid — avoid duplicating filter state
- **Do NOT create:** `bonus-database.ts`, separate bonus schema file

---

## 3. About Page

### Already exists (partial content sources)
| Asset | Path | Reusable content |
|-------|------|------------------|
| Site identity | `src/config/site.ts` | name, tagline, description, regions |
| Legal intro voice | `src/data/legal.ts` | "CasinoPulse" entity phrasing |
| Methodology | `src/data/how-we-review.ts` | Process steps, scoring, editorial independence |
| Translations | `src/lib/translations.ts` | `siteName`, `tagline`, `footerDesc` |
| Page pattern | `src/components/LegalPage.tsx` | Article layout with sections |
| Trust UI | `src/components/home/TrustPillars.tsx` | Pillar copy (read for reuse) |

### Does NOT exist
- No `about.ts`, no author bios, no team data

### Safe completion path
- **Extend** `src/data/legal.ts` OR add **one** `src/data/about.ts` (only if legal.ts extension would mix concerns)
- **Reuse** `LegalPage` component pattern (same layout as privacy/cookies) — **do NOT** create `AboutPageLayout.tsx` if `LegalPage` can accept a `LegalDocument`
- **Reuse** `buildPageMetadata`, `webPageSchema`, `Organization` schema already in layout
- **Do NOT create:** separate editorial policy page if content fits About + `/how-we-review` cross-link
- **Do NOT duplicate** methodology body — link to `/how-we-review`

---

## 4. Responsible Gambling

### Already exists (DO NOT duplicate content into third location)
| Asset | Path | Content |
|-------|------|---------|
| Homepage section | `src/components/home/ResponsibleGamblingSection.tsx` | 4 resource cards + warning banner |
| Methodology bullets | `src/data/how-we-review.ts` | `responsibleGamblingPoints` (4 items) |
| Footer | `src/lib/translations.ts` | `footerResponsible`, `footerResponsibleText` |
| Legal | `src/data/legal.ts` | Age/disclaimer themes in privacy/cookies |
| Affiliate card | `ResponsibleGamblingSection` resources | "Affiliate Disclosure" → `/privacy` |

### Safe completion path
- **New route:** `src/app/responsible-gambling/page.tsx`
- **New data (minimal):** extend `legal.ts` with `responsibleGambling: LegalDocument` OR single `src/data/responsible-gambling.ts` — **one source**, imported by both page and optionally homepage section
- **Refactor:** `ResponsibleGamblingSection` should import resource list from shared data — **eliminate hardcoded `resources` array duplication**
- **Reuse:** `LegalPage` for rendering
- **Do NOT create:** second RG component, duplicate helpline copy in 4 files

---

## 5. Terms of Service

### Already exists
| Asset | Path |
|-------|------|
| Legal pattern | `src/data/legal.ts` + `LegalPage` |
| Privacy + cookies | Fully implemented |

### Safe completion path
- **Extend** `src/data/legal.ts` with `termsOfService: LegalDocument`
- **New route:** `src/app/terms/page.tsx` — mirror `privacy/page.tsx` structure exactly
- **Do NOT create:** new legal component or terms data file separate from `legal.ts`

---

## 6. Editorial / Author

### Already exists
| Asset | Path |
|-------|------|
| Byline | `src/data/blogs.ts` — `author: "CasinoPulse Editorial"` |
| Display | `src/components/BlogContent.tsx`, `BlogCard.tsx` |
| Schema author | `reviewSchema` → Organization; `articleSchema` → Organization (unused) |

### Safe completion path (defer author routes to Phase 2)
- For P0: author identity on `/about` as Organization + optional `Person` in schema — **reuse** `schema.ts` helpers
- **Do NOT create:** 43 author pages, `authors/` directory, or `PersonSchema.ts` duplicate
- **Do NOT duplicate** `articleSchema` — wire existing function on news pages first

---

## 7. Schema Helpers

### Already exists in `src/lib/seo/schema.ts`
- `organizationSchema`, `websiteSchema`, `breadcrumbSchema`, `webPageSchema`, `faqPageSchema`, `articleSchema`, `reviewSchema`, `methodologyPageUrl`

### Rules
| Action | Item |
|--------|------|
| **Wire existing** | `articleSchema` on `news/[id]/page.tsx` |
| **Extend existing** | Add `aboutPageSchema` only if needed — prefer `webPageSchema` + Organization |
| **Do NOT create** | `schema/news.ts`, `schema/blacklist.ts`, duplicate FAQ builders |
| **Fix in place** | `organizationSchema().sameAs` — update `siteConfig.social`, not a second org schema |

---

## 8. Layout / Page Components

| Need | Reuse | Avoid creating |
|------|-------|----------------|
| Trust/legal pages | `LegalPage` | `TrustPageLayout`, `AboutLayout` |
| Programmatic content | `ProgrammaticPageLayout` | New hub layout for compare (already uses it) |
| Methodology | `how-we-review/page.tsx` | Second methodology route |
| Section headers / cards | `SectionHeader`, `GlassCard`, `NeonBadge` | New design system |
| Blacklist/bonus full pages | Refactor from homepage sections | Parallel card components |

---

## 9. Validation Scripts

### Already exists (DO NOT duplicate)
- `validate-generated-routes.ts`
- `validate-internal-discovery.ts`
- `validate-brand-entity.ts`
- `validate-live-routes.sh`

### Safe extensions (modify existing, not new scripts)
- Add legacy social check to `validate-brand-entity.ts`
- Add news canonical check to `validate-generated-routes.ts` OR small test in news page — **one validator**, not `validate-news-seo.ts` unless truly separate domain

---

## 10. Data Source Consolidation Map

```
blacklist.ts          → BlacklistedCasinosSection + /blacklist (future)
bonuses.ts            → BonusTracker + /bonuses (future)
how-we-review.ts      → /how-we-review ONLY (link from others)
legal.ts              → privacy, cookies, terms (future), RG (future), about (optional)
site.ts               → all metadata — single description source after fix
blogs.ts              → reviews ONLY — do not fork review content into new files
programmatic/*        → crypto/payment/hubs ONLY — no new thin pages
```

---

## 11. Files to Avoid Creating

| Proposed file | Why avoid | Use instead |
|---------------|-----------|-------------|
| `data/blacklist-page.ts` | Duplicates `blacklist.ts` | `blacklist.ts` |
| `data/bonus-database.ts` | Duplicates `bonuses.ts` | `bonuses.ts` |
| `components/BlacklistPage.tsx` | Duplicates section | Refactor `BlacklistedCasinosSection` |
| `components/BonusDatabase.tsx` | Duplicates tracker | Refactor `BonusTracker` |
| `lib/seo/article-schema.ts` | Already in `schema.ts` | `articleSchema()` |
| `app/editorial-policy/` | Overlaps how-we-review | `/how-we-review` |
| `app/reports/` (now) | No content | Defer per roadmap |
| `app/press/` (now) | No assets | Defer |
| New crypto/payment pages | Thin programmatic rule | Existing 4 pages |
| `validators/validate-eeat.ts` | Overbuild | Extend brand validator |

---

## 12. Refactor-Before-Create Checklist

Before any new file:

1. `rg` for existing data export name (`blacklistedCasinos`, `bonusOffers`, etc.)
2. Check homepage component for reusable UI
3. Check `legal.ts` + `LegalPage` for page pattern
4. Check `schema.ts` for existing JSON-LD helper
5. Check `sitemap-config.ts` — add URL there, not second sitemap
6. Check `translations.ts` — add keys, not duplicate strings in components
7. Confirm route not already in `src/app/`

---

## Summary

| Product | Reuse | New (minimal) |
|---------|-------|---------------|
| `/blacklist` | `blacklist.ts`, section UI, schema helpers | `app/blacklist/page.tsx` only |
| `/bonuses` | `bonuses.ts`, tracker UI, schema helpers | `app/bonuses/page.tsx` only |
| `/about` | `legal.ts` pattern, `LegalPage`, `site.ts`, link to methodology | `data/about.ts` OR `legal.ts` extension + `app/about/page.tsx` |
| `/responsible-gambling` | `legal.ts`, `LegalPage`, consolidate RG copy | `app/responsible-gambling/page.tsx` + shared data |
| `/terms` | `legal.ts`, `LegalPage`, privacy page pattern | `legal.ts` section + `app/terms/page.tsx` |
| News SEO | `articleSchema`, `buildPageMetadata` | `generateMetadata` on `news/[id]/page.tsx` only |
| Entity fix | `site.ts`, `schema.ts` | No new files |

**Estimated new files if done minimally:** 4–6 route pages + 0–2 data extensions. **Zero** new schema files, **zero** new validator files, **zero** new programmatic pages.
