import React from "react";
import checked from "./../../../Images/checked.png";

const GlobalColorNearMeWhy = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why SCENT is the Best Global Hair Color Salon Near Me</h5>
      <p>
        When it comes to finding a global hair color salon near me, there’s no
        better choice than SCENT. Our dedication to staying on top of the latest
        trends, providing personalized services, and using high-quality products
        sets us apart from other salons in the area. Here’s why clients love
        coming to SCENT:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Long-Lasting Results
          </span>
          <p>
            At SCENT, we use the best products and techniques to ensure that
            your color lasts longer and stays vibrant. Whether you’re getting
            highlights, lowlights, or a full-color transformation, you can trust
            that SCENT, the top global hair color salon near me, will deliver
            results that last.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />A Team of Experts{" "}
          </span>
          <p>
            Our team of professional colorists has years of experience working
            with clients from all over the world. No matter what look you’re
            going for, our stylists have the knowledge and expertise to bring
            your vision to life. SCENT is the global hair color salon near me
            that you can rely on for flawless results every time.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Competitive Pricing{" "}
          </span>
          <p>
            At SCENT, we believe that everyone deserves to look and feel their
            best. That’s why we offer competitive pricing on all of our
            services. As the leading global hair color salon near me, we provide
            top-quality services at a price that fits your budget.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default GlobalColorNearMeWhy;
