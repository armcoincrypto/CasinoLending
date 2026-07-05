# PRODUCT_REALITY_GAP_REPORT.md

**Audit date:** 2026-07-05  
**Production verified via live HTTP + HTML inspection**

Classification key:
- **REAL** — Live route, substantive content, matches marketing claim
- **PARTIAL** — Some implementation; key product promise unfulfilled
- **PLACEHOLDER** — Data/UI exists but thin, unsourced, or non-indexable
- **404** — Route does not exist
- **OVERSTATED** — Live but marketing exceeds actual capability

---

## Product Surface Audit

| Product | Classification | HTTP | Evidence |
|---------|----------------|------|----------|
| `/how-we-review` | **REAL** | 200 | ~2,124 visible words; FAQPage + WebPage + BreadcrumbList schema; scoring table; editorial independence; linked from footer + review CTAs + Review `isBasedOn`. **Caveat:** uncommitted in git; process claims exceed what template reviews demonstrate. |
| `/blacklist` | **404** | 404 | No route. Data: 4 entries in `blacklist.ts`. Homepage `BlacklistedCasinosSection` is only surface. Nav links to `/#blacklist`. |
| `/bonuses` | **404** | 404 | No route. Data: 6 entries in `bonuses.ts`. Homepage `BonusTracker` with filters is only surface. Nav links to `/#bonus-tracker`. |
| `/about` | **404** | 404 | No route, no data file, no content in `legal.ts`. Strategy docs reference it; product does not implement it. |
| `/responsible-gambling` | **PARTIAL** | 404 (dedicated route) | Homepage `ResponsibleGamblingSection` (4 cards), footer disclaimer, `responsibleGamblingPoints` on `/how-we-review`. No standalone indexable page. Resource links point to `/contact` and `/privacy`, not RG specialists. |
| `/press` | **404** | 404 | Mentioned only in `DIGITAL_PR_PLAN.md`. No route or assets. |
| `/compare` | **PARTIAL** + **OVERSTATED** | 200 | Live static hub via `ProgrammaticPageLayout` + `hub-pages.ts`. ~608 visible words. No comparison tool, no filterable data, no operator table. Marketed in nav as "Compare". |
| `/news/[id]` | **PARTIAL** + **OVERSTATED** | 200 | 9 articles live and in sitemap. **Critical SEO flaw:** canonical = `/news` for all articles. No Article schema. Content avg **17 words** (stubs ending in `...`). Marketed as news authority. |
| Casino reviews (`/blogs/review-*`, `/blogs/avoid-*`) | **PARTIAL** | 200 | 43 pages live. Review JSON-LD on casino categories. Template-generated ~176–246 words source. Methodology CTA on reviews. No licensing evidence, test logs, or complaint sourcing in content. |
| Crypto guides (`/crypto/*`) | **PARTIAL** | 200 | 3 pages (BTC, ETH, USDT). Templated programmatic copy ~200w source, ~844w live with chrome. Indexed, internally linked from homepage + footer + methodology. Not original research. |
| Payment guides (`/payment/*`) | **PARTIAL** | 200 | **1 page** (Paytm only). Same template pattern. No payment database. |
| `/india-casino-payments` | **PARTIAL** | 200 | Hub page, static sections. Links from nav as "Guides". |
| Homepage blacklist widget | **PLACEHOLDER** | N/A (anchor) | 4 casinos, complaint counts (847, 612, etc.) with no cited sources. Links to avoid blogs, not `/blacklist`. |
| Homepage bonus tracker | **PLACEHOLDER** | N/A (anchor) | 6 bonuses, filter UI. Not indexable. Not a "database". |
| Research reports (`/reports/*`) | **404** | 404 | Planned in strategy docs only. |
| Affiliate `/go/*` | **PLACEHOLDER** | 307 | Redirects to `/contact?casino=X&referral=pending`. Robots disallowed. Not monetization-ready. |
| Editorial / author identity | **PLACEHOLDER** | N/A | Byline `"CasinoPulse Editorial"` on all posts. No author pages. |
| Terms of service | **404** | 404 | No `/terms`; only privacy + cookies |

---

## Marketing vs Reality Matrix

| Marketing claim | Location | Reality classification |
|-----------------|----------|------------------------|
| "bonus tracking" | `siteConfig.description`, OG | **OVERSTATED** — hash widget, not `/bonuses` |
| "blacklist alerts" | `siteConfig.description`, nav | **OVERSTATED** — homepage section, not `/blacklist` |
| "Authority casino media" | Meta, hero, trust bars | **OVERSTATED** — thin news, template reviews |
| "Live Bonus Tracker" | Homepage section title | **PLACEHOLDER** — 6 static offers |
| "Blacklisted Casinos" | Homepage section | **PLACEHOLDER** — 4 unsourced entries |
| "How We Review" | Footer, review CTAs | **REAL** |
| "Compare Casinos" | Nav, `/compare` | **PARTIAL** — static guide, not a tool |
| "Online Casino News" | `/news`, sitemap | **OVERSTATED** — 17-word stubs, canonical bug |

---

## E-E-A-T Product Gaps

| Trust element | Status |
|---------------|--------|
| Methodology page | **REAL** |
| About / editorial team | **404** |
| Author pages | **404** |
| Responsible gambling page | **PARTIAL** (fragments only) |
| Affiliate disclosure | **PARTIAL** (homepage + methodology + cookies) |
| Fact-checking evidence | **PLACEHOLDER** (claimed, not shown in reviews) |
| Blacklist as citable asset | **404** |
| Research reports | **404** |

---

## SEO Product Gaps (Live-Proven)

| Issue | Severity | Proof |
|-------|----------|-------|
| News canonical → listing URL | **P0** | `curl` `/news/news-1` → `canonical: …/news` |
| No Article schema on news | **P0** | `articleSchema` unused |
| Legacy `sameAs` in Organization schema | **P1** | `t.me/casinojournalbd` in live HTML |
| Homepage meta oversells assets | **P1** | Description mentions tracking/alerts; routes 404 |
| Nav hash links for Bonuses/Blacklist | **P1** | Not crawlable product URLs |

---

## Content Quality by Type

| Type | Verdict | Would compete with CasinoGuru / AskGamblers? |
|------|---------|---------------------------------------------|
| `/how-we-review` | Moderate standalone page | No — no unique data |
| Casino reviews | Weak templates | No |
| News | Placeholder stubs | No |
| Programmatic guides | Thin templates | No |
| Blacklist widget data | Placeholder | No |
| Bonus widget data | Placeholder | No |

---

## Priority Product Gaps (Owner View)

1. **Repo ≠ production** — `/how-we-review` live but uncommitted  
2. **News SEO broken** — canonical + no Article schema  
3. **Trust routes missing** — `/about`, `/responsible-gambling`  
4. **Asset routes missing** — `/blacklist`, `/bonuses` (data exists, pages do not)  
5. **Meta oversell** — homepage description promises unbuilt products  
6. **Entity split** — `casinojournalbd` in schema/social vs `CasinoPulse` in UI  

---

## What NOT to Classify as REAL (Despite Live 200)

- `/news/news-*` — live but **OVERSTATED** as news product (content + SEO broken)
- `/compare` — live but **OVERSTATED** as comparison product
- Homepage blacklist/bonus sections — **PLACEHOLDER**, not databases
- 43 blog reviews — **PARTIAL** at best (indexed templates, not investigations)
