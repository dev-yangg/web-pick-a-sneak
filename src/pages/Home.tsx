import RecommendationList from "../ui/components/home/RecommendationList";
import TrustIndicators from "../ui/components/home/TrustIndicators";
import Hero from "../ui/components/home/Hero";
import FeaturedCampaigns from "../ui/components/home/FeaturedCampaigns";
import ScrollingBanner from "../ui/components/ScrollingBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <ScrollingBanner />
      <RecommendationList />
      <FeaturedCampaigns />
    </main>
  );
}
