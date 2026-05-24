# CasinoPulse India

A casino news and review website built for the Indian community worldwide. Half landing page, half content site — with casino reviews, news, blogs, dark/light mode, and English/Hindi support.

## Features

- **Landing + content hybrid** — Hero, featured section, casino preview, news preview on home
- **Dark / Light mode** — Toggle in header, persisted in localStorage
- **Bilingual** — English and Hindi (हिन्दी) via header language switcher
- **Casinos** — Top 20 trusted + Top 20 to avoid, with bonus/withdrawal info
- **Referral system** — Click casino logo/name → `/go/[slug]` → your referral URL from `.env`
- **Blogs** — 40 casino reviews (20 good + 20 bad) + daily update posts
- **News API** — Backend scaffold ready for external API + AI rewrite pipeline
- **Contact form** — Working API endpoint (connect email service later)

## Quick Start

```bash
# Install Node.js 18+ first, then:
npm install
cp .env.example .env
# Edit .env with your referral links
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Referral Codes

Copy `.env.example` to `.env` and set URLs like:

```
REFERRAL_PARIMATCH=https://parimatch.com/register?ref=YOUR_CODE
REFERRAL_1XBET=https://1xbet.com/?ref=YOUR_CODE
```

Each casino's `envKey` in `src/data/casinos.ts` maps to `REFERRAL_{ENVKEY}`.

When a referral is missing, users are sent to `/contact?casino=slug&referral=pending`.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── casinos/page.tsx      # Good/Bad casino lists
│   ├── blogs/                # Blog listing + detail
│   ├── news/                 # News listing + detail
│   ├── contact/page.tsx      # Contact form
│   ├── go/[slug]/route.ts    # Referral redirect
│   └── api/                  # News + contact APIs
├── components/               # UI components
├── data/                     # Casino, blog, news data
├── lib/                      # i18n, referrals, news service
└── context/                  # Theme + locale providers
```

## News API (Future)

The news backend in `src/lib/news-service.ts` currently serves sample data. To connect a real API:

1. Set `NEWS_API_KEY` and `NEWS_API_URL` in `.env`
2. Implement `fetchFromExternalApi()` and `rewriteForIndianContext()`
3. Call `POST /api/news` to trigger a refresh

## Deploy

```bash
npm run build
npm start
```

Works on Vercel, Netlify, or any Node.js host. Set environment variables in your hosting dashboard.

## Push to GitHub

```bash
git add .
git commit -m "Initial casino news blog site"
git push -u origin main
```
