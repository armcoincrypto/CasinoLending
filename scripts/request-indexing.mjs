#!/usr/bin/env node

const SITE_URL = process.env.SITE_URL || "https://casinopuls.site";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "a7f3c9e2b1d84f6indexnow";
const HOST = process.env.HOST || "casinopuls.site";

async function main() {
  const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch sitemap: ${sitemapRes.status}`);
  }

  const xml = await sitemapRes.text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  if (urlList.length === 0) {
    throw new Error("No URLs found in sitemap");
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

  const indexNowRes = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  console.log(`IndexNow response: ${indexNowRes.status} ${indexNowRes.statusText}`);

  const bingRes = await fetch(
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`
  );
  console.log(`Bing sitemap ping: ${bingRes.status} ${bingRes.statusText}`);
  console.log(`Submit ${SITE_URL}/sitemap.xml in Google Search Console for Google indexing.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
