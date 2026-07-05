#!/bin/bash
# CasinoPulse India — full VPS deploy (run as root on 95.111.233.120)
# Usage: bash deploy-server.sh
set -e

APP_DIR="/var/www/casino-news-blog"
REPO="https://github.com/gagpoghosyan99/casino-news-blog.git"
DOMAIN="casinopuls.site"
WWW="www.casinopuls.site"
SITE_URL="https://casinopuls.site"
APP_PORT=3002

export DEBIAN_FRONTEND=noninteractive

apt-get update -qq
apt-get install -y -qq git nginx certbot python3-certbot-nginx dnsutils curl

if ! command -v node &>/dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
command -v pm2 &>/dev/null || npm install -g pm2

mkdir -p /var/www
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR"
  git fetch origin
  git reset --hard origin/main
else
  rm -rf "$APP_DIR"
  git clone "$REPO" "$APP_DIR"
  cd "$APP_DIR"
fi

[ -f .env ] || cp .env.example .env
sed -i '/^PORT=/d' .env
sed -i '/^NEXT_PUBLIC_SITE_URL=/d' .env
echo "PORT=$APP_PORT" >> .env
echo "NEXT_PUBLIC_SITE_URL=$SITE_URL" >> .env

npm ci
npm run build

pm2 delete casino-news-blog 2>/dev/null || true
PORT=$APP_PORT pm2 start .next/standalone/server.js --name casino-news-blog
pm2 save

rm -f /etc/nginx/sites-enabled/casino-blog /etc/nginx/sites-enabled/default

cat > /etc/nginx/sites-available/casino-news-blog <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN $WWW;

    location / {
        proxy_pass http://127.0.0.1:$APP_PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 60s;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/casino-news-blog /etc/nginx/sites-enabled/casino-news-blog
nginx -t
systemctl restart nginx

certbot --nginx -d "$DOMAIN" -d "$WWW" \
  --non-interactive --agree-tos -m "admin@$DOMAIN" --redirect \
  --reinstall 2>/dev/null || \
certbot --nginx -d "$DOMAIN" -d "$WWW" \
  --non-interactive --agree-tos -m "admin@$DOMAIN" --redirect

nginx -t && systemctl reload nginx

echo "Deploy complete: $SITE_URL (app port $APP_PORT)"
echo "DNS:" $(dig +short "$DOMAIN" A @8.8.8.8)
pm2 status
