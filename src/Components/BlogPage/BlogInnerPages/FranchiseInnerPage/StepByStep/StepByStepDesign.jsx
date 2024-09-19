import React from "react";
import point from "./../../../../../Images/point.png";

const StepByStepDesign = () => {
  return (
    <div className="pediManicureWhat">
      <h5>5. Design Your Salon Layout and Interior</h5>
      <p>
        The interior design and layout of your salon franchise play a
        significant role in enhancing the customer experience. A well-designed
        salon should offer a relaxing and comfortable environment for clients
        while reflecting the brand’s identity.{" "}
        <a href="https://scentlifestyle.com/">Scent Salon</a>, for example, is
        known for its luxurious and welcoming ambiance, which contributes to the
        overall customer satisfaction.
      </p>
      <ul>
        <h4>Key Design Elements to Consider:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Branding:{" "}
          </span>
          <p>
            Incorporate the brand’s colors, logos, and design elements into the
            salon’s interior to maintain consistency with the franchise’s
            identity.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Ergonomic Layout:{" "}
          </span>
          <p>
            The salon layout should optimize space and provide a smooth workflow
            for staff, ensuring clients are served efficiently.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Comfort and Ambiance:{" "}
          </span>
          <p>
            Invest in comfortable seating, proper lighting, and soothing decor
            to create a relaxing atmosphere for clients.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Equipment:{" "}
          </span>
          <p>
            Choose high-quality salon furniture and equipment, such as styling
            chairs, mirrors, hairdryers, and manicure stations.
          </p>
        </li>
        <p>
          By focusing on these design elements, you’ll create an inviting space
          that encourages repeat visits and positive word-of-mouth referrals.
        </p>
      </ul>

      <br />
    </div>
  );
};

export default StepByStepDesign;
