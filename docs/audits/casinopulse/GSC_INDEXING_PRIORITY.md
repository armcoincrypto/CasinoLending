# GSC Indexing Priority — CasinoPulse

**Date:** July 2026  
**Property:** https://casinopuls.site  
**Tools:** Google Search Console, IndexNow (`npm run request-indexing`), Bing Webmaster

---

## Indexing Infrastructure (Current)

| Tool | Status |
|------|--------|
| Google Search Console verification | ✅ `googlef91513d4d4cddbfe` |
| Dynamic sitemap | ✅ ~65 URLs |
| IndexNow key | ✅ `/a7f3c9e2b1d84f6indexnow.txt` |
| IndexNow submit script | ✅ `scripts/request-indexing.mjs` |
| Live route validator | ✅ 65/65 HTTP 200 |
| Review/Article JSON-LD on detail pages | ❌ Not yet deployed |

---

## Tier 1 — Request Indexing Immediately

**Business priority:** Highest commercial + programmatic intent URLs

| URL | Type | Action |
|-----|------|--------|
| https://casinopuls.site/crypto/usdt-casino | Crypto programmatic | GSC URL inspect → Request indexing |
| https://casinopuls.site/crypto/bitcoin-casino | Crypto programmatic | Same |
| https://casinopuls.site/crypto/ethereum-casino | Crypto programmatic | Same |
| https://casinopuls.site/payment/paytm | Payment programmatic | Same |
| https://casinopuls.site/india-casino-payments | Payment hub | Same |
| https://casinopuls.site/compare | Commercial hub | Same |
| https://casinopuls.site/ | Homepage (authority hub) | Same |

**Batch command after deploy:**

```bash
cd /var/www/casino-news-blog
npm run request-indexing
```

Then in GSC → URL Inspection → paste each Tier 1 URL → **Request indexing** (Google does not fully replace this via IndexNow).

---

## Tier 2 — Index Within 7 Days

### Top reviews (crypto + payment relevance first)

| URL | Rationale |
|-----|-----------|
| `/blogs/review-stake` | Top crypto casino |
| `/blogs/review-bc-game` | Crypto flagship |
| `/blogs/review-cloudbet` | Bitcoin brand |
| `/blogs/review-bitcasino` | BTC niche |
| `/blogs/review-rollbit` | Crypto community |
| `/blogs/review-duelbits` | Crypto |
| `/blogs/best-upi-casinos-indian-players` | Payment intent |
| `/blogs/india-online-gambling-regulations-2026` | Geo/regulatory |

### Top blacklist / avoid pages

| URL | Rationale |
|-----|-----------|
| `/blogs/avoid-mostbet` | High complaint volume |
| `/blogs/avoid-melbet` | High complaint volume |
| `/blogs/avoid-1xbet` | High search volume brand |
| `/blogs/avoid-fairspin` | Fake license angle |

### Core listings

| URL | Rationale |
|-----|-----------|
| `/casinos` | Commercial hub |
| `/blogs` | Review index |
| `/news` | Freshness signal |

---

## Tier 3 — Standard Sitemap Crawl (No Manual Request)

- Remaining 32 review/avoid blogs
- 9 news articles (expand content before pushing)
- Legal: `/privacy`, `/cookies`, `/contact`

---

## Tier 0 — Hold Until Enhanced (Do Not Push Yet)

| URL | Reason |
|-----|--------|
| `/news/news-*` (stub content) | Thin content risk — expand first |
| Future `/blacklist`, `/bonuses` | Index only when pages ship with 800+ words/data |

---

## Post-Launch Indexing Workflow

```text
1. Deploy to production (standalone PM2)
2. npm run validate:live
3. npm run request-indexing
4. GSC → Sitemaps → resubmit sitemap.xml
5. GSC → URL Inspection → Tier 1 manual requests
6. Monitor Coverage report for 14 days
7. Fix any "Crawled – currently not indexed" with internal links + content depth
```

---

## Monitoring Cadence

| Check | Frequency |
|-------|-----------|
| GSC Coverage (valid vs. excluded) | Weekly |
| GSC Performance by page (Tier 1 URLs) | Weekly |
| IndexNow submission after each deploy | Every deploy |
| Sitemap new URL count vs. registry | Every build (automated) |

---

## Expected Indexing Timeline

| Tier | Expected Google indexing |
|------|--------------------------|
| Tier 1 (strong internal links + sitemap) | 3–14 days |
| Tier 2 | 2–6 weeks |
| New report pages (when launched) | Request immediately + PR citations accelerate |

---

## Priority Additions (When Built)

Immediately index upon launch:

1. `/how-we-review`
2. `/blacklist`
3. `/bonuses`
4. `/reports/south-asia-casino-payments-2026`
5. `/reports/crypto-casino-adoption-2026`
6. `/payment/upi`
7. `/crypto/tron-casino`

Add to sitemap registry + run full indexing batch same day as deploy.
