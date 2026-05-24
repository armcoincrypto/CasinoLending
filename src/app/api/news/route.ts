import { NextResponse } from "next/server";
import { fetchNewsArticles } from "@/lib/news-service";

export async function GET() {
  try {
    const articles = await fetchNewsArticles();
    return NextResponse.json({ articles, source: "api" });
  } catch {
    return NextResponse.json({ articles: [], error: "Failed to fetch news" }, { status: 500 });
  }
}

export async function POST() {
  try {
    const articles = await fetchNewsArticles({ refresh: true });
    return NextResponse.json({ articles, refreshed: true });
  } catch {
    return NextResponse.json({ error: "Failed to refresh news" }, { status: 500 });
  }
}
