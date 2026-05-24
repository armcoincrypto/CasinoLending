#!/bin/bash
set -e
rm -f /etc/nginx/sites-enabled/casino-blog

cat > /etc/nginx/sites-available/casino-news-blog <<'NGINX'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name 95.111.233.120 _;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection upgrade;
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
echo "HTTP status:" $(curl -s -o /dev/null -w "%{http_code}" http://95.111.233.120/)
