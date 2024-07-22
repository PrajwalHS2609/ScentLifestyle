import React from "react";
import InnerCard from "../../../../InnerServicePage/InnerCard/InnerCard";
import "./OrganicFacialService.css"
const OrganicFacialService = () => {
  return (
    <div className="organicFacialService">
      <h5>Our Signature Organic Facial Services in Bangalore</h5>
      <p>
        SCENT offers a variety of{" "}
        <a href="https://scentlifestyle.com/service"> organic facial services in Bangalore</a> tailored to meet
        different skin needs and concerns. Here are some of our most popular
        treatments:
      </p>
      <div className="organicFacialServiceCard">
        <InnerCard
          head="Hydrating Organic Facial :"
          para="Perfect for dry or dehydrated skin, this facial uses organic ingredients like aloe vera, cucumber, and hyaluronic acid to deeply hydrate and replenish moisture."
        />
        <InnerCard
          head="Anti-Aging Organic Facial: "
          para="This treatment targets signs of aging such as fine lines, wrinkles, and dullness. It incorporates organic ingredients like rosehip oil, green tea, and vitamin C to rejuvenate and revitalize your skin."
        />
        <InnerCard
          head="Brightening Organic Facial: "
          para="Ideal for those seeking a radiant complexion, this facial uses ingredients like turmeric, licorice root, and vitamin E to brighten and even out skin tone."
        />
        <InnerCard
          head="Purifying Organic Facial:"
          para="Designed for oily or acne-prone skin, this facial includes ingredients like tea tree oil, charcoal, and clay to detoxify and purify your skin."
        />
        <InnerCard
          head="Calming Organic Facial: "
          para="For sensitive or irritated skin, this facial uses soothing ingredients like chamomile, calendula, and oatmeal to calm and heal."
        />
      </div>
    </div>
  );
};

export default OrganicFacialService;
