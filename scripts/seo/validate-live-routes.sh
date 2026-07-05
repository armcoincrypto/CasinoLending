#!/usr/bin/env bash
# Validates all sitemap URLs return HTTP 200 on live production.
set -euo pipefail

SITE_URL="${SITE_URL:-https://casinopuls.site}"
SITEMAP_URL="${SITEMAP_URL:-${SITE_URL}/sitemap.xml}"
TMP_DIR="${TMP_DIR:-/tmp}"
URLS_FILE="${TMP_DIR}/live-urls.txt"
STATUS_FILE="${TMP_DIR}/live-url-status.txt"

curl -fsSL "$SITEMAP_URL" -o "${TMP_DIR}/live-sitemap.xml"

grep -oP '(?<=<loc>).*?(?=</loc>)' "${TMP_DIR}/live-sitemap.xml" > "$URLS_FILE"

: > "$STATUS_FILE"
failures=0

while read -r url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$code $url" | tee -a "$STATUS_FILE"
  if [[ "$code" != "200" ]]; then
    failures=$((failures + 1))
  fi
done < "$URLS_FILE"

if [[ "$failures" -gt 0 ]]; then
  echo "Live route validation failed ($failures non-200 URLs):" >&2
  grep -v '^200 ' "$STATUS_FILE" >&2 || true
  exit 1
fi

echo "Live route validation passed ($(wc -l < "$URLS_FILE") URLs)."
