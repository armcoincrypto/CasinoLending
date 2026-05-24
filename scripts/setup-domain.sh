#!/bin/bash
# Connect casinopuls.site to the CasinoPulse site on this VPS
set -e

DOMAIN="casinopuls.site"
WWW="www.casinopuls.site"
APP_DIR="/var/www/casino-news-blog"
APP_PORT=3002
SITE_URL="https://casinopuls.site"
SERVER_IP="95.111.233.120"

export DEBIAN_FRONTEND=noninteractive

apt-get update -qq
apt-get install -y -qq nginx certbot python3-certbot-nginx dnsutils

cd "$APP_DIR"
grep -q "^PORT=" .env && sed -i "s/^PORT=.*/PORT=$APP_PORT/" .env || echo "PORT=$APP_PORT" >> .env
grep -q "^NEXT_PUBLIC_SITE_URL=" .env && sed -i "s|^NEXT_PUBLIC_SITE_URL=.*|NEXT_PUBLIC_SITE_URL=$SITE_URL|" .env || echo "NEXT_PUBLIC_SITE_URL=$SITE_URL" >> .env

pm2 delete casino-news-blog 2>/dev/null || true
PORT=$APP_PORT pm2 start npm --name casino-news-blog -- start
pm2 save

rm -f /etc/nginx/sites-enabled/casino-blog

cat > /etc/nginx/sites-available/casino-news-blog <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN $WWW $SERVER_IP;

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

echo "=== DNS (must be $SERVER_IP) ==="
dig +short $DOMAIN A || true
dig +short $WWW A || true
echo "=== App ==="
curl -s -o /dev/null -w "app:%{http_code}\n" http://127.0.0.1:$APP_PORT/

CURRENT_IP=$(dig +short $DOMAIN A | tail -1)
if [ "$CURRENT_IP" = "$SERVER_IP" ]; then
  certbot --nginx -d "$DOMAIN" -d "$WWW" --non-interactive --agree-tos -m admin@$DOMAIN --redirect 2>&1 || true
  cd "$APP_DIR" && npm run build && pm2 restart casino-news-blog
  echo "Done: $SITE_URL"
else
  echo "DNS not pointing here yet ($DOMAIN -> ${CURRENT_IP:-none}, need $SERVER_IP)"
  echo "After DNS propagates, run on server:"
  echo "  certbot --nginx -d $DOMAIN -d $WWW"
fi
pm2 status
