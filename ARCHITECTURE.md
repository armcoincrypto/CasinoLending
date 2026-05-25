# Casino Journal BD — Architecture

**Codename:** Casino Journal BD  
**Stack:** Next.js 15 · TypeScript · Tailwind · Framer Motion

## Phase Roadmap

| Phase | Focus | Status |
|-------|--------|--------|
| **1** | Foundation — premium homepage, domain types, SEO, feature flags | In progress |
| **2** | Automation — RSS/API importers, AI summaries, jackpot feeds | Planned |
| **3** | Authority — trust scores, complaints, multilingual (bn, en, hi) | Planned |
| **4** | Monetization — affiliate analytics, programmatic SEO at scale | Planned |

## Folder Structure

```
src/
├── app/                 # Next.js App Router pages & API routes
├── components/
│   ├── home/            # Homepage sections (hero, jackpots, blacklist, etc.)
│   └── ui/              # Reusable glass/neon primitives
├── config/              # site.ts, features.ts
├── context/             # Theme, locale providers
├── data/                # Static seed data (migrates to DB in Phase 2)
├── lib/
│   ├── seo/             # metadata, schema.org helpers
│   └── format.ts
└── types/
    └── domain/          # Enterprise domain models (casino, news, jackpot…)
```

## Backend (Phase 2+)

Recommended: **NestJS + PostgreSQL + Redis** or **FastAPI + Celery**.

Core entities are defined in `src/types/domain/` and will map 1:1 to DB tables:

- `casinos`, `casino_reviews`, `casino_bonuses`, `casino_blacklist_reports`
- `news_articles`, `jackpot_news`, `trend_scores`
- `affiliate_links`, `click_events`, `api_import_logs`

## Feature Flags

See `src/config/features.ts`. Toggle AI pipeline, admin, live APIs without code removal.

## SEO

- `src/app/sitemap.ts` — dynamic sitemap
- `src/app/robots.ts` — crawl rules
- `src/lib/seo/schema.ts` — Organization, Article, Review, Breadcrumb JSON-LD
- Set `NEXT_PUBLIC_SITE_URL` in `.env`

## Deployment

```bash
docker compose up -d   # app + postgres + redis (scaffold)
npm run build && npm start
```

Nginx + Cloudflare + GitHub Actions — see `scripts/` and `docker-compose.yml`.
