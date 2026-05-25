#!/bin/bash
# Quick refresh on VPS — run ON THE SERVER after: ssh root@95.111.233.120
set -e

APP_DIR="/var/www/casino-news-blog"
APP_PORT=3002
SITE_URL="https://casinopuls.site"

cd "$APP_DIR"
git fetch origin
git reset --hard origin/main

sed -i '/^PORT=/d' .env 2>/dev/null || true
sed -i '/^NEXT_PUBLIC_SITE_URL=/d' .env 2>/dev/null || true
[ -f .env ] || cp .env.example .env
echo "PORT=$APP_PORT" >> .env
echo "NEXT_PUBLIC_SITE_URL=$SITE_URL" >> .env

npm ci
npm run build

pm2 delete casino-news-blog 2>/dev/null || true
PORT=$APP_PORT pm2 start npm --name casino-news-blog -- start
pm2 save

nginx -t && systemctl reload nginx

echo "Done. Local app: $(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:$APP_PORT/)"
echo "Live: $SITE_URL"
