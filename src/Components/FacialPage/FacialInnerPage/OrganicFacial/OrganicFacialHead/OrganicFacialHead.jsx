import React from "react";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import OrganicFacialService from "../OrganicFacialService/OrganicFacialService";
import "./OrganicFacialHead.css"
const OrganicFacialHead = () => {
  return (
    <div className="organicFacialHead">
      <InnerNavi
        link="/facial"
        service="Facial"
        currService="Organic Facial"
      />

      <div className="organicFacialHead">
        <h1>
          Experience the Best Organic Facial Services in Bangalore at SCENT
        </h1>
        <p>
          In the bustling city of Bangalore, finding a sanctuary where you can
          unwind and pamper yourself with luxurious yet natural beauty
          treatments can be a challenge. Fortunately, SCENT offers the perfect
          solution with its highly acclaimed{" "}
          <a href="https://scentlifestyle.com/organic-facial-services">
            organic facial services in Bangalore
          </a>
          . Our treatments are designed to rejuvenate your skin using the finest
          organic ingredients, providing a holistic approach to skincare that is
          both effective and gentle.
        </p>
      </div>

      <OrganicFacialService />
      <div className="organicFacialHead">
        <h2>The Essence of Organic Facial Services in Bangalore</h2>
        <p>
          At SCENT, our{" "}
          <a href="https://scentlifestyle.com/organic-facial-services">
            organic facial services in Bangalore
          </a>{" "}
          are more than just a beauty treatment; they are a journey towards
          healthier, radiant skin. We believe in harnessing the power of nature
          to deliver exceptional skincare results. Our facials utilize organic
          ingredients free from harmful chemicals and synthetic additives,
          ensuring that your skin receives the purest care possible.
        </p>
      </div>
    </div>
  );
};

export default OrganicFacialHead;
