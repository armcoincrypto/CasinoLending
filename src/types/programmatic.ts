export type ContentQuality = "expanded" | "stub";

export interface ProgrammaticSection {
  heading: string;
  body: string;
}

export interface ProgrammaticFaq {
  question: string;
  answer: string;
}

export interface ProgrammaticRelatedLink {
  href: string;
  label: string;
}

export interface ProgrammaticPage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ProgrammaticSection[];
  faqs?: ProgrammaticFaq[];
  relatedLinks?: ProgrammaticRelatedLink[];
  relatedClusterTitle?: string;
  datePublished?: string;
  dateModified?: string;
  lastReviewed?: string;
  indexable: boolean;
  contentQuality: ContentQuality;
  keywords: string[];
}

export type ProgrammaticRouteKind = "crypto" | "payment" | "hub";

export interface RouteRegistryEntry {
  path: string;
  kind: ProgrammaticRouteKind;
  slug?: string;
  indexable: boolean;
}
