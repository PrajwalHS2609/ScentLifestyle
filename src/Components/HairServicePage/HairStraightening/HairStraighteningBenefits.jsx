import React from "react";
import point from "./../../../Images/point.png";

const HairStraighteningBenefits = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>
        Benefits of Choosing SCENT’s Hair Straightening Salon in Bangalore
      </h5>
      <p>
        With SCENT’s hair straightening salon in Bangalore, you can expect more
        than just a straightened hairstyle. Here are some benefits of choosing
        our services:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Expert Consultation:{" "}
          </span>
          <p>
            Our hair experts consult with you to understand your preferences,
            hair type, and condition before recommending the ideal treatment.
            This ensures that the results align perfectly with your
            expectations.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Advanced Technology:{" "}
          </span>
          <p>
            SCENT uses the latest hair straightening technology and products
            that are safe and effective. We prioritize your hair’s health and
            use only quality products that provide long-lasting results without
            damage.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Personalized Experience:{" "}
          </span>
          <p>
            Every client’s hair is unique, which is why our stylists offer
            personalized care. Our approach ensures that you get a hair
            straightening treatment tailored to your specific needs.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Damage-Free Results:{" "}
          </span>
          <p>
            Our top-quality products and techniques protect your hair from
            excessive damage, leaving you with smooth, healthy, and vibrant
            straight hair.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairStraighteningBenefits;
