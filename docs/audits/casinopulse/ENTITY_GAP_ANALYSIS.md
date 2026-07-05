# Entity Gap Analysis — CasinoPulse

**Date:** July 2026  
**Brand:** CasinoPulse  
**Domain:** casinopuls.site

---

## Brand Search Baseline

| Query | Expected finding today | Gap severity |
|-------|------------------------|--------------|
| `CasinoPulse` | Limited/no Knowledge Panel | **High** |
| `casinopuls.site` | Site links only | Medium |
| `CasinoPulse casino reviews` | Weak/none | **High** |
| `CasinoPulse blacklist` | None | **High** |
| `CasinoPulse India` | Legacy fragment risk (being cleaned) | Medium |

**Observation:** Technical entity cleanup (P0.2) unified on-site signals. Off-site entity graph is **near empty** — primary authority bottleneck.

---

## On-Site Entity Signals (Post P0.2)

| Signal | Status | Notes |
|--------|--------|-------|
| Unified brand name | ✅ PASS | CasinoPulse across UI, metadata, schema |
| Organization schema | ✅ PASS | NewsMediaOrganization in layout |
| WebSite schema | ✅ PASS | Added with publisher |
| Manifest | ✅ PASS | name/short_name = CasinoPulse |
| Consistent URL | ✅ PASS | casinopuls.site |
| Author entities | ❌ GAP | Reviews lack named author pages |
| About page | ❌ GAP | No `/about` editorial team page |
| sameAs array | ⚠️ PARTIAL | Only Telegram in schema |

---

## Social & Profile Audit

| Platform | Current state | Recommendation | Priority |
|----------|---------------|----------------|----------|
| **X (Twitter)** | Legacy handle risk (`@casinojournalbd` in config) | Register `@CasinoPulse` or `@CasinoPulseIN`; link from site footer | **High** |
| **LinkedIn** | Not found | Company page: CasinoPulse — casino media, South Asia | **High** |
| **Telegram** | `t.me/casinojournalbd` in schema sameAs | Migrate or add `t.me/CasinoPulse`; update sameAs | Medium |
| **YouTube** | Not found | Optional: short explainer videos (methodology, payment guides) | Medium |
| **Medium** | Not found | Republish report excerpts (canonical to site) | Low |
| **Reddit** | Not found | Brand account for AMAs in r/IndiaGambling — organic only, no spam | Low |
| **GitHub** | Not found | Optional: open-source embed widget for payment comparison | Low |
| **Crunchbase** | Not found | Skip until legal entity registered | Low |
| **Facebook** | Not found | Optional for BD/PK audience reach | Low |
| **Instagram** | Not found | Low priority for this niche | Skip |

---

## Directory & Citation Opportunities (Legitimate)

| Directory type | Examples | Value | Action |
|----------------|----------|-------|--------|
| Google Business Profile | If eligible editorial office | Entity signal | Evaluate legal eligibility |
| Bing Places | Web property | Minor | Add when brand email stable |
| Industry directories | iGaming affiliate associations (ethical ones) | Trust | Apply when editorial standards documented |
| Crunchbase / AngelList | Startup databases | Low for media brand | Defer |
| Wikipedia | Notable brand threshold unmet | High but unrealistic short-term | Long-term if reports cited |
| Wikidata | Structured entity | Medium long-term | Create item when sameAs stable |
| Podcast directories | Apple/Spotify show if podcast launched | Medium | Phase 2 |

---

## Entity Schema Enhancements (Recommended)

Update `organizationSchema()` sameAs when profiles live:

```json
{
  "@type": "NewsMediaOrganization",
  "name": "CasinoPulse",
  "url": "https://casinopuls.site",
  "logo": "https://casinopuls.site/og-default.png",
  "sameAs": [
    "https://t.me/CasinoPulse",
    "https://twitter.com/CasinoPulse",
    "https://www.linkedin.com/company/casinopulse"
  ]
}
```

Add `Person` schema for lead editors on `/about` and review bylines.

---

## Brand Mention Strategy

| Tactic | Entity impact |
|--------|---------------|
| Original reports with “Source: CasinoPulse” in PDF footer | Repeatable citations |
| Expert quotes in third-party articles | Brand + author entities |
| Consistent boilerplate in outreach | “CasinoPulse (casinopuls.site)” |
| IndexNow + GSC for fast indexing of report URLs | Discoverability |
| Press kit with logo usage guidelines | Controlled brand rendering |

---

## Consistency Checklist

- [ ] Footer social icons → live profiles only (no dead links)
- [ ] Email domain: `press@casinopuls.site` or `editorial@casinopuls.site`
- [ ] Author headshots + bios (E-E-A-T)
- [ ] Update `siteConfig.social` to match live handles
- [ ] Wikidata item (6–12 month horizon)
- [ ] Google Knowledge Panel monitoring in Search Console

---

## Entity Gap Priority

1. **Launch `/about` + author pages** (on-site E-E-A-T)
2. **LinkedIn + X profiles** with matching branding
3. **Expand sameAs** in Organization schema
4. **Press/media kit** page
5. **Telegram channel rebrand** or parallel CasinoPulse channel
6. **Wikidata** after 10+ independent citations exist

**Entity score today:** 4/10 on-site, **2/10 off-site**  
**6-month target:** 7/10 on-site, 5/10 off-site
