import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CasinoPulse India — Best Online Casino Reviews for Indian Players",
  description:
    "Top 40 online casino reviews for Indian players. Compare bonuses, safe real-money sites, best casinos, and sites to avoid. Expert guides in English & Hindi.",
  keywords: [
    "online casino India",
    "casino reviews Indian players",
    "best online casino",
    "real money casino",
    "casino bonus",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </Providers>
      </body>
    </html>
  );
}
