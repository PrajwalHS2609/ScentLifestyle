import React from "react";
import InnerCard from "../../../InnerServicePage/InnerCard/InnerCard";

const GoldFacialPop = () => {
  return (
    <div className="organicFacialService">
      <h5>Popular Gold Facial Treatments</h5>
      <p>
        Several variations of <a href="https://scentlifestyle.com/gold-facial-services">gold facials</a> are available in Bangalore, each
        offering unique benefits. Some of the most sought-after Gold Facial
        Services in Bangalore include:
      </p>
      <div className="organicFacialServiceCard">
        <InnerCard
          head="24K Gold Facial:"
          para="This luxurious treatment uses 24-karat gold leaf or gold-infused products to deliver maximum anti-aging and skin-brightening benefits. The 24K gold facial is known for its opulent experience and exceptional results."
        />
        <InnerCard
          head="Gold Collagen Facial: "
          para="Combining the benefits of gold and collagen, this facial targets signs of aging and promotes skin elasticity. The collagen component helps to plump the skin, while the gold particles provide a radiant glow."
        />
        <InnerCard
          head="Gold Caviar Facial: "
          para="Infused with both gold particles and caviar extract, this facial offers intense hydration and nourishment. It is ideal for individuals with dry or mature skin, as it helps to restore moisture and vitality."
        />
        <InnerCard
          head="Gold Radiance Facial: "
          para="This treatment focuses on enhancing the skin's natural radiance and luminosity. The gold radiance facial includes exfoliation, massage, and the application of gold-infused serums and masks to achieve a glowing complexion."
        />
      </div>
    </div>
  );
};

export default GoldFacialPop;
