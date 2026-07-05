# WHAT_ALREADY_EXISTS.md

**Audit date:** 2026-07-05  
**Project:** `/var/www/casino-news-blog`  
**Production:** https://casinopuls.site  
**Method:** Git inspection, live `curl`, filesystem inventory. No assumptions.

---

## 1. Git & Production State

| Item | Verified state |
|------|----------------|
| Branch | `main`, **3 commits ahead** of `origin/main` (not pushed) |
| Last committed | `4c328b5` — `feat(brand): unify public brand entity as CasinoPulse` |
| **Uncommitted modified** | `src/app/blogs/[slug]/page.tsx`, `src/components/BlogContent.tsx`, `src/components/Footer.tsx`, `src/lib/seo/schema.ts`, `src/lib/seo/sitemap-config.ts`, `src/lib/translations.ts` |
| **Uncommitted untracked (product)** | `src/app/how-we-review/`, `src/data/how-we-review.ts` |
| **Uncommitted untracked (docs only)** | 8 strategy `.md` files (see §9) |
| Production build | `.next/BUILD_ID` dated **2026-07-05 16:27**; standalone `server.js` **16:28** |
| PM2 | `casino-news-blog` **online**, script: `.next/standalone/server.js`, cwd: `/var/www/casino-news-blog`, uptime ~2h at audit |

**Critical mismatch:** Production serves `/how-we-review` (200) but that route + data file are **untracked**. Repo ≠ production truth until committed and redeployed from git.

---

## 2. Production Sitemap (Live)

**66 URLs**, all return **200** (`npm run validate:live` passes).

### Static / hub (8)
- `/`, `/casinos`, `/news`, `/blogs`, `/how-we-review`, `/contact`, `/privacy`, `/cookies`

### Programmatic (6)
- `/crypto/bitcoin-casino`, `/crypto/ethereum-casino`, `/crypto/usdt-casino`
- `/payment/paytm`
- `/compare`, `/india-casino-payments`

### Blogs (43)
- 20 `review-*`, 16 `avoid-*`, 4 ranking reviews, 3 daily/editorial slugs

### News (9)
- `/news/news-1` … `/news/news-9`

---

## 3. Real App Routes (Filesystem)

18 routable app files under `src/app/`:

| Route | File | Live status |
|-------|------|-------------|
| `/` | `page.tsx` | 200 |
| `/blogs` | `blogs/page.tsx` | 200 |
| `/blogs/[slug]` | `blogs/[slug]/page.tsx` | 200 (43 slugs) |
| `/casinos` | `casinos/page.tsx` | 200 |
| `/compare` | `compare/page.tsx` | 200 |
| `/contact` | `contact/page.tsx` | 200 |
| `/cookies` | `cookies/page.tsx` | 200 |
| `/crypto/[slug]` | `crypto/[slug]/page.tsx` | 200 (3 slugs) |
| `/go/[slug]` | `go/[slug]/route.ts` | 307 → `/contact?casino=…` |
| `/how-we-review` | `how-we-review/page.tsx` | 200 (**untracked**) |
| `/india-casino-payments` | `india-casino-payments/page.tsx` | 200 |
| `/news` | `news/page.tsx` | 200 |
| `/news/[id]` | `news/[id]/page.tsx` | 200 (9 ids) |
| `/payment/[slug]` | `payment/[slug]/page.tsx` | 200 (1 slug) |
| `/privacy` | `privacy/page.tsx` | 200 |
| `/api/contact` | `api/contact/route.ts` | API |
| `/api/news` | `api/news/route.ts` | API |
| GSC verify | `googlef91513d4d4cddbfe.html/route.ts` | 200 |

Supporting: `layout.tsx`, `manifest.ts`, `robots.ts`, `sitemap.ts`, section layouts for blogs/casinos/news/privacy/cookies.

---

## 4. Missing Routes (404 on Production)

| Route | Marketed / referenced? | Evidence |
|-------|------------------------|----------|
| `/blacklist` | Yes — nav `/#blacklist`, homepage section, meta copy | **404** |
| `/bonuses` | Yes — nav `/#bonus-tracker`, homepage widget, meta copy | **404** |
| `/about` | Yes — strategy docs only | **404** |
| `/terms` | No nav link | **404** |
| `/responsible-gambling` | Yes — footer copy, homepage section title | **404** |
| `/press` | Strategy docs only | **404** |
| `/reports/*` | Strategy docs + GSC priority doc | **404** |
| `/author/*` | Strategy docs only | **404** |

---

## 5. Data Files (15)

| File | Records | Used by |
|------|---------|---------|
| `data/casinos.ts` | 40 casinos | Casinos page, blog generation, reviews |
| `data/blogs.ts` | 43 posts (generated + 3 daily) | Blog routes, sitemap |
| `data/news.ts` | 9 articles (`sampleNews`) | News routes, sitemap |
| `data/trending-news.ts` | Trending items | Homepage `TrendingNewsSection` |
| `data/blacklist.ts` | **4** entries (`blacklistedCasinos`) | Homepage `BlacklistedCasinosSection` only |
| `data/bonuses.ts` | **6** offers (`bonusOffers`) | Homepage `BonusTracker` only |
| `data/how-we-review.ts` | Full methodology content | `/how-we-review` (**untracked**) |
| `data/jackpots.ts` | Jackpot feed data | Homepage `JackpotWinnersFeed` |
| `data/legal.ts` | Privacy + cookies (EN/HI) | `/privacy`, `/cookies` via `LegalPage` |
| `data/casino-seo.ts` | SEO strings | Casino metadata helpers |
| `data/programmatic/crypto-pages.ts` | 3 pages | `/crypto/[slug]` |
| `data/programmatic/payment-pages.ts` | 1 page (Paytm) | `/payment/[slug]` |
| `data/programmatic/hub-pages.ts` | 2 hubs (compare, india-payments) | Hub routes |
| `data/programmatic/internal-seo-links.ts` | 6 priority links | Homepage + footer |
| `data/programmatic/index.ts` | Re-exports | Route registry |

**No** `about.ts`, `responsible-gambling.ts`, `authors.ts`, `terms.ts`, or `press.ts` data files exist.

---

## 6. Components (51 TSX)

### Homepage sections (reuse candidates)
- `BlacklistedCasinosSection` — renders `blacklistedCasinos`, links to `/blogs/avoid-*`
- `BonusTracker` — renders `bonusOffers` with filters
- `ResponsibleGamblingSection` — 4 resource cards (links to `/contact`, `/privacy`, `/cookies`)
- `InternalSeoGuidesSection`, `PremiumHero`, `TrustPillars`, `JackpotWinnersFeed`, `TrendingNewsSection`, `HomeBlogPreview`, `TopCasinosWidget`

### Page layouts (reuse candidates)
- `LegalPage` — privacy/cookies renderer from `legal.ts`
- `ProgrammaticPageLayout` — crypto/payment/hub pages
- `how-we-review/page.tsx` — bespoke but uses `GlassCard`, `SectionHeader`, schema helpers

### UI primitives (4)
- `SectionHeader`, `GlassCard`, `NeonBadge`, `AnimatedCounter`

---

## 7. SEO Utilities

| File | Exports / role |
|------|----------------|
| `lib/seo/metadata.ts` | `buildPageMetadata()` — canonical, OG, robots |
| `lib/seo/schema.ts` | `organizationSchema`, `websiteSchema`, `breadcrumbSchema`, `webPageSchema`, `faqPageSchema`, `articleSchema` (**unused**), `reviewSchema`, `methodologyPageUrl` |
| `lib/seo/sitemap-config.ts` | Static + programmatic + blog + news sitemap builders |
| `lib/seo/route-registry.ts` | Programmatic route registry |
| `lib/seo/programmatic-validation.ts` | Route/data backing checks |

### Live SEO (verified)
- `robots.txt`: Allow `/`, Disallow `/api/`, `/go/`; sitemap declared
- `manifest.webmanifest`: `CasinoPulse` name
- Canonicals OK on `/`, `/how-we-review`, `/compare`, `/crypto/*`, `/blogs/*`
- **News bug:** `/news/news-1` canonical = `https://casinopuls.site/news` (layout-level, not per-article)
- `articleSchema` defined but **never imported** on news pages

### Schema on live pages
- Sitewide: `NewsMediaOrganization` + `WebSite` (`sameAs: t.me/casinojournalbd`)
- `/how-we-review`: `WebPage`, `BreadcrumbList`, `FAQPage`
- `/blogs/review-stake`: `Review`, `Rating`, `isBasedOn` → `/how-we-review`

---

## 8. Validators & Scripts

| Script | Purpose |
|--------|---------|
| `scripts/seo/validate-generated-routes.ts` | Programmatic routes have backing data |
| `scripts/seo/validate-internal-discovery.ts` | 6 priority links on homepage |
| `scripts/seo/validate-brand-entity.ts` | Forbids legacy brand strings in `src/` |
| `scripts/seo/validate-live-routes.sh` | 66 production URLs → 200 |
| `scripts/postbuild-standalone.sh` | Standalone deploy artifacts |
| `scripts/request-indexing.mjs` | IndexNow + Bing ping |

**Prebuild:** all 3 TS validators pass on current tree.

**Gap:** No validator for news canonical, missing trust routes, or legacy social handles.

---

## 9. Strategy Docs (Untracked — Not Product)

These exist on disk but are **planning documents only**, not implemented routes:

- `AUTHORITY_ASSET_SCORECARD.md`
- `AUTHORITY_BASELINE_SCORE.md`
- `AUTHORITY_COMPETITOR_REPORT.md`
- `AUTHORITY_FLOW_MAP.md`
- `DIGITAL_PR_PLAN.md`
- `ENTITY_GAP_ANALYSIS.md`
- `GSC_INDEXING_PRIORITY.md`
- `TOPICAL_AUTHORITY_ROADMAP.md`

Also committed: `ARCHITECTURE.md`, `BRAND_ENTITY_AUDIT.md`, `README.md`

---

## 10. Partial Implementations

| Feature | What exists | What is missing |
|---------|-------------|-----------------|
| **Blacklist** | 4-entry data file + homepage section + 16 `avoid-*` blogs | `/blacklist` route, indexable page, sourcing evidence |
| **Bonuses** | 6-entry data file + homepage tracker with filters | `/bonuses` route, nav points to `#bonus-tracker` |
| **How we review** | Full page + data + FAQ schema + review linkage | Git commit; author bios |
| **Responsible gambling** | Homepage section + footer text + bullets on methodology | Dedicated `/responsible-gambling` page |
| **News** | 9 routes in sitemap, SSR pages | Per-article metadata, canonical, Article schema; content ~17 words avg |
| **Reviews** | 43 pages, Review JSON-LD on casino posts | Depth (~200w templates), primary research |
| **Compare** | Live hub page via `ProgrammaticPageLayout` | Interactive comparison, data engine |
| **Affiliate `/go/*`** | Route exists, robots disallowed | Redirects to contact placeholder, not partner URLs |

---

## 11. Dead Code

| Item | Location | Evidence |
|------|----------|----------|
| `articleSchema()` | `lib/seo/schema.ts` | Exported, zero imports in app |
| News layout metadata | `app/news/layout.tsx` | Applies listing canonical to all `/news/[id]` |
| Strategy doc claims | `AUTHORITY_*.md` etc. | Reference `/blacklist`, `/bonuses`, `/reports` — all 404 |

---

## 12. Duplicate / Overlap Patterns (Not Separate Files Yet)

| Pattern | Files involved |
|---------|----------------|
| Responsible gambling copy | `ResponsibleGamblingSection.tsx`, `how-we-review.ts` (`responsibleGamblingPoints`), footer translations |
| Affiliate disclosure | `how-we-review.ts` (`editorialIndependence`), `ResponsibleGamblingSection` card, `legal.ts` cookies |
| Blacklist narrative | `blacklist.ts` (4), `blogs.ts` avoid templates (16), `BlacklistedCasinosSection` |
| Bonus data | `bonuses.ts` (6), `casinos.ts` bonus fields, `BonusTracker` |
| Legal page pattern | `privacy/page.tsx` + `cookies/page.tsx` both use `LegalPage` + `legal.ts` |

---

## 13. Pages Marketed But Not Implemented

| Claim | Where claimed | Reality |
|-------|---------------|---------|
| "bonus tracking" | `siteConfig.description`, OG, homepage "Live Bonus Tracker" | Widget on homepage only; `/bonuses` 404 |
| "blacklist alerts" | `siteConfig.description`, nav "Blacklist", homepage section | Section on homepage only; `/blacklist` 404 |
| "Authority casino media" | Meta, hero, trust bars | Thin news + template reviews |
| "Research list" (blacklist) | `BlacklistedCasinosSection` → `/casinos?tab=bad` | Casino listing, not blacklist DB |
| Research reports | Strategy docs, GSC doc | **404** |
| Editorial team / About | Strategy docs | **404** |
| Press / media kit | `DIGITAL_PR_PLAN.md` | **404** |

---

## 14. Brand Entity (Verified)

- **Clean in UI:** `CasinoPulse`, monogram `CP` — no `Casino Journal BD` / `CasinoPulse India` in `src/`
- **Legacy contamination (live):**
  - `siteConfig.social.twitter`: `@casinojournalbd`
  - `siteConfig.social.telegram`: `https://t.me/casinojournalbd`
  - `organizationSchema().sameAs` emits telegram URL
  - Homepage HTML contains `t.me/casinojournalbd`

---

## 15. Content Depth (Source Data)

| Type | Count | Avg words (`content.en`) |
|------|-------|--------------------------|
| Good casino reviews | 20 | 246 |
| Bad casino reviews | 16 | 176 |
| Ranking reviews | 4 | 200 |
| Daily blogs | 3 | 12 |
| News articles | 9 | **17** |

---

## Summary Table

| Category | Count / status |
|----------|----------------|
| Live routes | 18 app routes, 66 sitemap URLs |
| Missing trust routes | 6+ (`/blacklist`, `/bonuses`, `/about`, `/terms`, `/responsible-gambling`, `/press`) |
| Data files | 15 (no about/author/terms) |
| Components | 51 |
| SEO helpers | 5 files |
| Validators | 3 prebuild + 1 live |
| Uncommitted product work | `/how-we-review` + 6 modified files |
| Dead schema | `articleSchema` unused |
