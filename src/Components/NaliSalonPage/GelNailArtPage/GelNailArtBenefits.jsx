import React from "react";
import checked from "./../../../Images/checked.png";

const GelNailArtBenefits = () => {
  return (
    <div className="nailExtensionWhy">
      <h5> Benefits of Getting Gel Nail Art at SCENT </h5>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Technicians:{" "}
          </span>{" "}
          The team at SCENT is highly skilled and experienced in gel nail art,
          ensuring professional and beautiful results every time.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            High Quality Products:{" "}
          </span>{" "}
          Only top-tier products are used to ensure the longevity and quality of
          your gel nails.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Personalized Service:{" "}
          </span>{" "}
          Each client receives personalized attention, ensuring that the final
          result matches their vision.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Hygiene and Safety:{" "}
          </span>{" "}
          SCENT prioritizes cleanliness and hygiene, using sterilized tools and
          maintaining a clean environment.
        </li>
      </ul>
    </div>
  );
};

export default GelNailArtBenefits;
