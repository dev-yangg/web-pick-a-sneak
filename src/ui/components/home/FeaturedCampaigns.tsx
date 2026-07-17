import { featuredCampaigns } from "../../../content/home.content";
import CalloutCard from "../CalloutCard";

export default function FeaturedCampaigns() {
  return (
    <section>
      <div className="w-app-content-boundary mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 page-padded-section">
        {featuredCampaigns.map(({ headline, description, to, ctaTitle }) => (
          <CalloutCard
            key={`${headline}${ctaTitle}`}
            headline={headline}
            description={description}
            to={to}
            ctaTitle={ctaTitle}
            headlineWrapper="h3"
          />
        ))}
      </div>
    </section>
  );
}
