# Authority Asset Scorecard — CasinoPulse

**Date:** July 2026  
**Site:** https://casinopuls.site  
**Scoring:** Linkability 0–10 (10 = highly citable, unique, data-rich, evergreen)

---

## Scoring Criteria

| Factor | Weight |
|--------|--------|
| Original data / proprietary insight | 30% |
| Utility (bookmark/reference value) | 25% |
| Uniqueness vs. SERP | 20% |
| Indexability & shareability | 15% |
| E-E-A-T signals (methodology, authors) | 10% |

---

## Current Asset Grades

| Asset | URL / Location | Linkability | Strengths | Gaps | Priority Action |
|-------|----------------|-------------|-----------|------|-----------------|
| **Homepage** | `/` | 4/10 | Brand hub, 6 guide links, trust sections | Not a citable destination; generic | Add linkable report teaser + methodology link |
| **Casino reviews** | `/blogs/review-*` (40) | 6/10 | Structured templates, ratings, EN/HI | No Review schema, no named testers, no methodology URL | Add `/how-we-review` + JSON-LD Review |
| **Avoid/blacklist reviews** | `/blogs/avoid-*` (20) | 7/10 | High intent, complaint narratives | Fragmented; no master database URL | Launch `/blacklist` database page |
| **Casinos listing** | `/casinos` | 5/10 | 40 casinos, filters | No unique data export; duplicates blog content | Add sortable trust table + embed widget |
| **News** | `/news/news-*` (9) | 2/10 | Indexed, trend scores on homepage cards | Stub body content | Expand or noindex until substantive |
| **Trending news feed** | Homepage only | 3/10 | Views/trend meta | Not indexable | Promote top stories to full articles |
| **Bonus tracker** | `/#bonus-tracker` | 4/10 | Filter UI, 6 bonuses | Hash-only; not citable | `/bonuses` database page |
| **Jackpot feed** | `/#jackpot-winners` | 3/10 | Record flags, amounts | Hash-only; seed data | `/jackpots` archive page |
| **Crypto guides** | `/crypto/*` (3) | 5/10 | Expanded programmatic copy | No unique data, no tables | Enrich + 2026 Crypto Adoption Report |
| **Payment guides** | `/payment/paytm`, `/india-casino-payments` | 6/10 | South Asia angle | Only 1 payment slug | Expand cluster + Payments Report |
| **Compare hub** | `/compare` | 4/10 | Good intent match | No comparison engine/data | Build comparison table tool |
| **Contact / legal** | `/contact`, `/privacy` | 2/10 | Trust compliance | Not linkable | Keep; not a link target |
| **Programmatic sitemap** | 65 URLs | — | Crawl integrity | Authority ≠ URLs alone | Quality over count |

**Portfolio average linkability today:** **4.4 / 10**

---

## Proposed High-Value Assets (Phase 3 Designs)

### Asset #1 — 2026 South Asia Casino Payments Report

**Target URL:** `/reports/south-asia-casino-payments-2026`

**Linkability target:** 9/10

**Contents:**
- Methodology + survey/interview framework
- Payment method penetration table: UPI, Paytm, IMPS, bKash, Nagad, JazzCash, Easypaisa, crypto (BTC, ETH, USDT, TRON)
- Average deposit/withdrawal times by method (cited ranges with sources)
- Operator acceptance matrix (which top-40 brands support which rails)
- Regulatory callouts: India, Bangladesh, Pakistan, Sri Lanka, Nepal
- Downloadable PDF + embeddable infographic
- Press release angle for regional fintech/gaming blogs

**Why it earns links:** First-party regional data scarce; finance and crypto blogs cite payment landscape reports.

---

### Asset #2 — Casino Blacklist Database

**Target URL:** `/blacklist` (+ `/blacklist/[slug]`)

**Linkability target:** 8/10

**Contents:**
- Searchable/filterable database: delayed payouts, fake licenses, player complaints
- Seed from existing `blacklist.ts` + 20 avoid-review narratives
- Complaint count, severity, risk tags, last updated
- “Submit a report” form (UGC pipeline Phase 2)
- Methodology: how brands enter/exit list
- JSON export / API (future) for journalists

**Why it earns links:** Safety queries; forums link “master avoid lists”; mirrors AskGamblers complaint moat at smaller scale.

---

### Asset #3 — 2026 Crypto Casino Adoption Report

**Target URL:** `/reports/crypto-casino-adoption-2026`

**Linkability target:** 9/10

**Contents:**
- BTC, ETH, USDT, TRON adoption rates among top operators
- Chain preference by region (IN, BD, PK)
- Average crypto withdrawal times vs. fiat
- No-KYC vs. KYC-required operator split
- Bonus structure comparison for crypto deposits
- Quotes embeddable for crypto media pitches

**Why it earns links:** Crypto editors cite stats; complements existing `/crypto/*` guides.

---

### Asset #4 — Casino Bonus Database

**Target URL:** `/bonuses` (+ filters by type/region)

**Linkability target:** 7/10

**Contents:**
- Structured bonus catalog from `bonuses.ts` expanded to 30+ offers
- Wagering, max bet, expiry, eligible games
- “Bonus fairness score” editorial metric
- Weekly refresh changelog (citable “updated” signal)
- Compare welcome vs. crypto vs. cashback packages

**Why it earns links:** Affiliate roundups reference bonus comparison tables; players bookmark.

---

### Asset #5 — Casino Payment Method Comparison Engine

**Target URL:** `/payments/compare` or enhanced `/india-casino-payments`

**Linkability target:** 8/10

**Contents:**
- Interactive matrix: method × country × top casinos
- Filters: instant withdrawal, min deposit, fees, KYC trigger
- Deep links to `/payment/[slug]` guides
- Embeddable widget for partners (white-label citation link back)

**Why it earns links:** Utility tool > static copy; regional blogs embed comparison widgets.

---

## Asset Priority Matrix

| Asset | Effort | Link potential | Traffic potential | Build order |
|-------|--------|----------------|-------------------|-------------|
| Blacklist Database | Medium | High | High | **1** |
| South Asia Payments Report | High | Very High | Medium | **2** |
| How We Review (methodology) | Low | High | Low | **3** (quick win) |
| Bonus Database | Medium | Medium | High | **4** |
| Crypto Adoption Report | High | Very High | Medium | **5** |
| Payment Comparison Engine | High | High | High | **6** |

---

## Content Types — Linkability Summary

| Type | Current Score | 6-Month Target | Key upgrade |
|------|---------------|----------------|-------------|
| News | 2 | 6 | Full articles + industry sources |
| Reviews | 6 | 8 | Methodology + Review schema + authors |
| Bonus tracker | 4 | 7 | Indexable `/bonuses` |
| Payment guides | 6 | 8 | 8+ payment slugs + report |
| Crypto guides | 5 | 8 | Report + TRON/USDT depth |
| Blacklists | 7 | 9 | Database page |
| Industry reports | 0 | 9 | 2 annual reports |
| Compare | 4 | 8 | Data-driven engine |
