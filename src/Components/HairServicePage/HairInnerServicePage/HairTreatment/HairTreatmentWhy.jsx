import React from "react";
import checked from "./../../../../Images/checked.png";

const HairTreatmentWhy = () => {
  return (
    <div className="headSpaWhyContainer">
      <h5>Why Choose SCENT for Hair Treatments in Bangalore?</h5>
      <p>
        Choosing SCENT for your Hair Treatments in Bangalore means opting for
        excellence in every aspect of your hair care journey. Our commitment to
        delivering superior service and outstanding results has made us a
        trusted name in the industry. Here’s why clients love SCENT:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Customized Solutions:{" "}
          </span>
          <p>
            We understand that every client's hair is unique. Our personalized
            approach ensures that you receive the perfect treatment tailored to
            your individual needs.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Experienced Professionals:
          </span>
          <p>
            Our team of skilled stylists and technicians bring a wealth of
            experience and expertise to every treatment. They are dedicated to
            helping you achieve your hair goals.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Focus on Health:{" "}
          </span>
          <p>
            We prioritize the health and well-being of your hair. Our treatments
            are designed to nourish, protect, and enhance your hair, ensuring
            long-lasting results.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Convenient Location:{" "}
          </span>
          <p>
            Located in the heart of Bangalore, SCENT is easily accessible,
            making it convenient for clients to visit us for their hair care
            needs.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairTreatmentWhy;
