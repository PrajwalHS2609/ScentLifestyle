import React from "react";
import checked from "./../../../../Images/checked.png";

const NailExtensionInSahakaraWhyChoose = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Why Choose SCENT for Nail Extensions Near Sahakara Nagar?</h5>
      <p>
        There are many reasons why SCENT is the go-to choice for nail extensions
        near Sahakara Nagar:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Expertise{" "}
          </span>
          <p>
            Our team has years of experience in nail care, ensuring you get
            top-notch results every time.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Personalized Service{" "}
          </span>
          <p>
            Each client receives individualized attention, with our nail artists
            taking the time to understand your style preferences and needs.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Quality Products{" "}
          </span>
          <p>
            We use only the highest quality products to ensure durability,
            safety, and satisfaction.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Exceptional Hygiene Standards{" "}
          </span>
          <p>
            Your health and safety are our top priorities. We maintain rigorous
            hygiene practices for a worry-free experience.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionInSahakaraWhyChoose;
