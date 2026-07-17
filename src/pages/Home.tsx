import RecommendationList from "../ui/components/home/RecommendationList";
import TrustIndicators from "../ui/components/home/TrustIndicators";
import Hero from "../ui/components/home/Hero";
import FeaturedCampaigns from "../ui/components/home/FeaturedCampaigns";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <RecommendationList />
      <FeaturedCampaigns />
    </main>
  );
}
