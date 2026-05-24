#!/bin/bash
# Run on VPS: bash deploy-server.sh
set -e

APP_DIR="/var/www/casino-news-blog"
REPO="https://github.com/gagpoghosyan99/casino-news-blog.git"
SITE_URL="http://95.111.233.120"
APP_PORT=3002

export DEBIAN_FRONTEND=noninteractive

if ! command -v node &>/dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

apt-get update -qq
apt-get install -y -qq git nginx

if ! command -v pm2 &>/dev/null; then
  npm install -g pm2
fi

mkdir -p /var/www

if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR"
  git fetch origin
  git reset --hard origin/main
elif [ -d "$APP_DIR" ]; then
  rm -rf "$APP_DIR"
  git clone "$REPO" "$APP_DIR"
  cd "$APP_DIR"
else
  git clone "$REPO" "$APP_DIR"
  cd "$APP_DIR"
fi

if [ ! -f .env ]; then
  cp .env.example .env
fi
grep -q "^PORT=" .env && sed -i "s/^PORT=.*/PORT=$APP_PORT/" .env || echo "PORT=$APP_PORT" >> .env
grep -q "^NEXT_PUBLIC_SITE_URL=" .env && sed -i "s|^NEXT_PUBLIC_SITE_URL=.*|NEXT_PUBLIC_SITE_URL=$SITE_URL|" .env || echo "NEXT_PUBLIC_SITE_URL=$SITE_URL" >> .env

npm ci
npm run build

pm2 delete casino-news-blog 2>/dev/null || true
PORT=$APP_PORT pm2 start npm --name casino-news-blog -- start
pm2 save

rm -f /etc/nginx/sites-enabled/casino-blog
sed -i 's/ 95.111.233.120//g' /etc/nginx/sites-available/deweb 2>/dev/null || true

cat > /etc/nginx/sites-available/casino-news-blog <<NGINX
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name 95.111.233.120 _;

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
systemctl reload nginx

echo "Deploy complete: $SITE_URL (port $APP_PORT)"
