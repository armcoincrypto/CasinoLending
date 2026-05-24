#!/bin/bash
set -e

# Remove IP from deweb so casino site can own port 80 for this IP
sed -i 's/ 95.111.233.120//g' /etc/nginx/sites-available/deweb

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
        proxy_read_timeout 60s;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/casino-news-blog /etc/nginx/sites-enabled/casino-news-blog

cd /var/www/casino-news-blog
export PORT=3002
pm2 delete casino-news-blog 2>/dev/null || true
pm2 start npm --name casino-news-blog -- start
pm2 save

sleep 5
nginx -t
systemctl reload nginx

echo "PM2:" && pm2 status
echo "App:" $(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3002/)
echo "Public:" $(curl -s -o /dev/null -w "%{http_code}" http://95.111.233.120/)
