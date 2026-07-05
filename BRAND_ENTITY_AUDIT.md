# Brand Entity Audit — CasinoPulse

Audit date: 2026-07-05  
Canonical public brand: **CasinoPulse**

## Summary

The site previously exposed fragmented brand identities across UI, metadata, schema, translations, and legal copy. All public-facing surfaces were unified to **CasinoPulse**.

## Variants Found (Pre-Fix)

| Variant | Category | Example Locations | Resolution |
|---------|----------|-----------------|------------|
| Legacy journal name | UI, Metadata, Schema, Translations | `siteConfig`, header, footer, OG titles | Renamed to CasinoPulse |
| Regional suffix variant | Footer, Layout metadata, Legal | Copyright, page titles, privacy/cookie intros | Renamed to CasinoPulse |
| Monogram initials | Header, Footer | Logo badge `CJ` | Changed to `CP` with `aria-label="CasinoPulse"` |

## Classification by Surface

### UI
- Header brand text → `translations.siteName` → CasinoPulse
- Footer brand text → CasinoPulse
- Logo monogram → CP
- Trust pillars title → Why CasinoPulse
- Responsible gambling subtitle → CasinoPulse (translation key)

### Metadata
- Root layout → `siteConfig.name`
- Section layouts → `buildPageMetadata()` with CasinoPulse suffix
- OpenGraph `siteName` → CasinoPulse via `siteConfig`

### Structured Data
- Organization schema → CasinoPulse
- WebSite schema → CasinoPulse (added)
- Article / Review publisher → CasinoPulse via `siteConfig`

### Translations
- English + Hindi `siteName`, `featuredTitle`, `footerDesc` → CasinoPulse

### Legal Content
- Privacy / cookie policy entity references → CasinoPulse

### PWA
- Added `src/app/manifest.ts` → name + short_name = CasinoPulse

### Internal / Non-Public (unchanged)
- Deploy script comments
- npm package name `casino-news-blog`
- Legacy social handles (`@casinojournalbd`) — external URLs only

## Canonical Rules (Post-Fix)

```text
Public brand: CasinoPulse
Organization name: CasinoPulse
Publisher: CasinoPulse
Website name: CasinoPulse
Logo alt / aria-label: CasinoPulse
```

## Validation

- `npm run validate:brand-entity` — static source scan
- Production grep — homepage must not contain legacy public brand strings
