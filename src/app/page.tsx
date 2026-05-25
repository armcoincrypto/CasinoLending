import PremiumHero from "@/components/home/PremiumHero";
import TrustPillars from "@/components/home/TrustPillars";
import JackpotWinnersFeed from "@/components/home/JackpotWinnersFeed";
import TrendingNewsSection from "@/components/home/TrendingNewsSection";
import TopCasinosWidget from "@/components/home/TopCasinosWidget";
import BlacklistedCasinosSection from "@/components/home/BlacklistedCasinosSection";
import BonusTracker from "@/components/home/BonusTracker";
import ResponsibleGamblingSection from "@/components/home/ResponsibleGamblingSection";

export default function HomePage() {
  return (
    <>
      <PremiumHero />
      <TrustPillars />
      <JackpotWinnersFeed />
      <TrendingNewsSection />
      <TopCasinosWidget />
      <BlacklistedCasinosSection />
      <BonusTracker />
      <ResponsibleGamblingSection />
    </>
  );
}
