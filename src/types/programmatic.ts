export type ContentQuality = "expanded" | "stub";

export interface ProgrammaticSection {
  heading: string;
  body: string;
}

export interface ProgrammaticPage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ProgrammaticSection[];
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
