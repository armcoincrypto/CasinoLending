export type Locale = "en" | "hi";

export type CasinoType = "good" | "bad" | "ranking";

export interface Casino {
  id: string;
  slug: string;
  name: string;
  rank: number;
  logo: string;
  summary: {
    en: string;
    hi: string;
  };
  bonus: {
    en: string;
    hi: string;
  };
  withdrawal: {
    en: string;
    hi: string;
  };
  rating: number;
  type: CasinoType;
  blogSlug: string;
  envKey: string;
}

export interface BlogPost {
  slug: string;
  title: { en: string; hi: string };
  excerpt: { en: string; hi: string };
  content: { en: string; hi: string };
  category: "good-casino" | "bad-casino" | "daily";
  casinoSlug?: string;
  publishedAt: string;
  author: string;
  readTime: number;
}

export interface NewsArticle {
  id: string;
  title: { en: string; hi: string };
  excerpt: { en: string; hi: string };
  content: { en: string; hi: string };
  source: string;
  publishedAt: string;
  image?: string;
  category: string;
}
