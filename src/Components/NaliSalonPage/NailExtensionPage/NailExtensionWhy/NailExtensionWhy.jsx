import React from "react";
import "./NailExtensionWhy.css";
import checked from "./../../../../Images/checked.png";
const NailExtensionWhy = () => {
  return (
    <div className="nailExtensionWhy">
      <h5>Why Choose SCENT for Nail Extension in Bangalore?</h5>
      <p>
        When it comes to nail extension in Bangalore, SCENT stands out for
        several reasons:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Technicians:{" "}
          </span>
          <p>
            {" "}
            Our team of experienced nail technicians is trained in the latest
            techniques and trends, ensuring you receive the best service
            possible.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Quality Products:{" "}
          </span>{" "}
          <p>
            {" "}
            We use only high-quality materials and products to ensure your
            extensions are durable and look stunning.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Personalized Service:{" "}
          </span>{" "}
          <p>
            {" "}
            Every client is unique, and we tailor our services to meet your
            specific needs and preferences.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Hygienic Practices:{" "}
          </span>{" "}
          <p>
            {" "}
            We maintain the highest standards of hygiene and sanitation to
            ensure your safety and comfort.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionWhy;
