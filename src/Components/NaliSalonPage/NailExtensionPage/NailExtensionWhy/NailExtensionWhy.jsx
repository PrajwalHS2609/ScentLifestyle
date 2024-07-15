import React from "react";
import "./NailExtensionWhy.css";
import checked from "./../../../../Images/checked.png";
const NailExtensionWhy = () => {
  return (
    <div className="NailExtensionWhy">
      <h5>Why Choose SCENT Salon for Nail Extension in Bangalore?</h5>
      <p>
        When it comes to nail extension in Bangalore, SCENT Salon stands out for
        several reasons:
      </p>
      <ul>
        <li>
          <img src={checked} alt="" />Expert Technicians: Our team of
          experienced nail technicians is trained in the latest techniques and
          trends, ensuring you receive the best service possible.
        </li>
        <li>
          <img src={checked} alt="" /><span>Quality Products:</span> We use only
          high-quality materials and products to ensure your extensions are
          durable and look stunning.
        </li>
        <li>
          <img src={checked} alt="" /><span>Personalized Service:</span> Every client is
          unique, and we tailor our services to meet your specific needs and
          preferences.
        </li>
        <li>
          <img src={checked} alt="" /><span>Hygienic Practices:</span> We maintain the
          highest standards of hygiene and sanitation to ensure your safety and
          comfort.
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionWhy;
