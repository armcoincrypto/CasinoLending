#!/bin/bash
set -e
pm2 delete casino-blog 2>/dev/null || true
pm2 delete casino-news-blog 2>/dev/null || true
cd /var/www/casino-news-blog
grep -q "^PORT=3002" .env || echo "PORT=3002" >> .env
export PORT=3002
pm2 start npm --name casino-news-blog -- start
sleep 4
pm2 status

cat > /etc/nginx/sites-available/casino-news-blog <<'NGINX'
server {
    listen 80;
    server_name 95.111.233.120;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

nginx -t
systemctl reload nginx
pm2 save
echo "LOCAL:" $(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3002/)
echo "PUBLIC:" $(curl -s -o /dev/null -w "%{http_code}" http://95.111.233.120/)
