import { sampleNews } from "@/data/news";
import { NewsArticle } from "@/types";

/**
 * News service — currently returns curated sample data.
 * Replace fetchFromExternalApi() with your news API + AI rewrite pipeline.
 */
export async function fetchNewsArticles(
  options: { refresh?: boolean } = {}
): Promise<NewsArticle[]> {
  // When ready, swap this for real API integration:
  // const raw = await fetchFromExternalApi();
  // return rewriteForIndianContext(raw);

  void options.refresh;
  return sampleNews;
}

async function fetchFromExternalApi(): Promise<unknown[]> {
  const apiKey = process.env.NEWS_API_KEY;
  const apiUrl = process.env.NEWS_API_URL;

  if (!apiKey || !apiUrl) {
    throw new Error("News API not configured");
  }

  const response = await fetch(`${apiUrl}?apiKey=${apiKey}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("News API request failed");
  }

  return response.json();
}

async function rewriteForIndianContext(rawArticles: unknown[]): Promise<NewsArticle[]> {
  // TODO: Use OpenAI/Claude to rewrite headlines and content for Indian audience
  void rawArticles;
  return sampleNews;
}
