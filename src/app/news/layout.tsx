import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Casino News India | CasinoPulse",
  description:
    "Latest online casino news for Indian players — payments, regulation, sports betting, crypto, and live casino updates.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
