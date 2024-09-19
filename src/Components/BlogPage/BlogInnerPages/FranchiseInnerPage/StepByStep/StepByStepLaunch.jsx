import React from "react";
import point from "./../../../../../Images/point.png";

const StepByStepLaunch = () => {
  return (
    <div className="pediManicureWhat">
      <h5>7. Launch a Strong Marketing Campaign</h5>
      <p>
        A successful salon franchise needs a strong marketing strategy to
        attract new customers and retain existing ones. Leverage both online and
        offline marketing channels to create buzz about your salon and drive
        foot traffic.
      </p>
      <ul>
        <h4>Effective Marketing Strategies:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Social Media:{" "}
          </span>
          <p>
            Use platforms like Instagram and Facebook to showcase your salon’s
            services, share customer testimonials, and promote special offers.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Google My Business:{" "}
          </span>
          <p>
            Optimize your Google My Business listing to improve local search
            visibility and attract nearby customers.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Loyalty Programs:{" "}
          </span>
          <p>
            Implement a loyalty program that rewards repeat customers with
            discounts or special services.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Referral Programs:{" "}
          </span>
          <p>
            Encourage satisfied customers to refer friends and family by
            offering referral incentives.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Partnerships:{" "}
          </span>
          <p>
            Partner with local businesses, influencers, or event organizers to
            increase brand visibility.
          </p>
        </li>
        <p>
          Additionally, offering introductory discounts or promotional packages
          can entice new customers to try your services and help build your
          brand's reputation in the market.
        </p>
      </ul>

      <br />
    </div>
  );
};

export default StepByStepLaunch;
