import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for CasinoPulse — how we use cookies and similar technologies.",
  path: "/cookies",
});

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
