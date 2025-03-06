import React from "react";
import "./About.css";
import ownerImg from "./../../Images/OwnerImg.jpg";
const AboutOwner = () => {
  return (
    <div className="aboutOwner-container">
      <img src={ownerImg} alt="owner Img" />
      <div className="aboutOwner-content">
        <h6>
          the <span>promoter</span>
        </h6>
        <h2>Krishma Lobo</h2>
        <p>
          Krishma hailing from Goa and born into a business family with
          education in design is a brand herself synonymous with passion,
          innovation, and success. As a trailblazer in the premium lifestyle and
          salon industry, Krishma has redefined luxury through the highly
          acclaimed salon chain, Scent. With a tagline as intriguing as "Haircut
          just an excuse...," Scent is more than service—it’s an experience, and
          Krishma is the architect behind it all.
        </p>
        <p>
          Krishma has ambitious plan for growth and feels that the enviorment is
          conducive to take the salons global strategically.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutOwner;
