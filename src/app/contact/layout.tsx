import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact CasinoPulse",
  description:
    "Contact CasinoPulse for editorial corrections, partnership inquiries, or general questions about our casino reviews and South Asia guides.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
