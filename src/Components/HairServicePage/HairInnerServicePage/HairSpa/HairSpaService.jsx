import React from "react";
import InnerCard from "../../../InnerServicePage/InnerCard/InnerCard";
import "./HairSpaService.css";
const HairSpaService = () => {
  return (
    <div className="hairSpaServiceContainer">
      <h2>SCENT's Unique Hair Spa Services in Bangalore </h2>
      <p>
        At SCENT, we pride ourselves on offering a range of unique and tailored
        Hair Spa Services in Bangalore. Our experienced stylists and therapists
        work closely with you to understand your specific hair needs and
        concerns, ensuring a personalized experience that delivers exceptional
        results. Here’s a glimpse of what you can expect from our hair spa
        offerings:
      </p>
      <div className="hairSpaServiceContent">
        <InnerCard
          head="Hydration Boost Spa"
          para="Ideal for dry and dehydrated hair, this treatment focuses on replenishing moisture and restoring softness. It includes a deep conditioning mask and a relaxing head massage to revitalize your hair and scalp."
        />
        <InnerCard
          head="Anti-Dandruff Spa:"
          para="This specialized treatment targets dandruff and scalp irritation. It includes a thorough scalp cleanse, exfoliation, and a soothing mask to eliminate flakes and soothe the scalp."
        />
        <InnerCard
          head="Strengthening Spa: "
          para="Perfect for weak and brittle hair, this treatment focuses on strengthening the hair shaft and preventing breakage. It includes a protein-rich mask and a nourishing oil massage to fortify your hair."
        />
        <InnerCard
          head="Color Care Spa: "
          para="Designed for colored and chemically treated hair, this spa treatment includes a color-protecting mask and a gentle cleanse. It helps maintain the vibrancy of your hair color while nourishing and repairing the hair."
        />
        <InnerCard
          head="Detox Spa:"
          para="This detoxifying treatment is perfect for those exposed to pollution and toxins. It includes a deep cleanse, exfoliation, and a revitalizing mask to detoxify the scalp and hair."
        />
      </div>
    </div>
  );
};

export default HairSpaService;
