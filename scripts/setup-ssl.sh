#!/bin/bash
# SSL for casinopuls.site on VPS (run as root: bash setup-ssl.sh)
set -e

DOMAIN="casinopuls.site"
WWW="www.casinopuls.site"
APP_PORT=3002
SERVER_IP="95.111.233.120"
APP_DIR="/var/www/casino-news-blog"
SITE_URL="https://casinopuls.site"
CERT_EMAIL="admin@casinopuls.site"

export DEBIAN_FRONTEND=noninteractive

apt-get update -qq
apt-get install -y -qq nginx certbot python3-certbot-nginx dnsutils

echo "=== DNS (must be $SERVER_IP only) ==="
dig +short "$DOMAIN" A @8.8.8.8 || true
dig +short "$WWW" A @8.8.8.8 || true

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
systemctl reload nginx

certbot --nginx -d "$DOMAIN" -d "$WWW" \
  --non-interactive --agree-tos -m "$CERT_EMAIL" --redirect

nginx -t
systemctl reload nginx

echo "=== SSL verify ==="
openssl s_client -connect 127.0.0.1:443 -servername "$DOMAIN" </dev/null 2>/dev/null \
  | openssl x509 -noout -subject -issuer -dates
curl -sI "https://$DOMAIN/" | head -8
echo "Done: $SITE_URL"
