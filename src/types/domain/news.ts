export type NewsCategory =
  | "jackpots"
  | "regulations"
  | "casino-launches"
  | "crypto-casinos"
  | "esports-betting"
  | "vip-stories"
  | "scandals"
  | "bonus-campaigns";

export interface NewsArticleMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  readTime: number;
  views: number;
  trendingScore: number;
  publishedAt: string;
  image?: string;
  source?: string;
  tags: string[];
}

export type ArticleStatus = "draft" | "pending_review" | "published" | "archived";
