import React from "react";
import checked from "./../../../Images/checked.png";

const BridalBenefits = () => {
  return (
    <div className="nailExtensionWhy">
      <h5>
        {" "}
        The Benefits of Hiring Professional Bridal Makeup Artists in Bangalore{" "}
      </h5>
      <p>
        Opting for professional Bridal Makeup Artists in Bangalore comes with
        numerous benefits that can make a significant difference on your wedding
        day:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Flawless Look:{" "}
          </span>{" "}
          Professional makeup artists have the expertise to create a flawless
          look that enhances your features and matches your wedding theme.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Stress-Free Experience:{" "}
          </span>{" "}
          On your big day, the last thing you want is stress. Our Bridal Makeup
          Artists in Bangalore take care of everything, allowing you to relax
          and enjoy the moment.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Long-Lasting Makeup:{" "}
          </span>{" "}
          With high-quality products and expert application, your makeup will
          last throughout the day and night, ensuring you look stunning in every
          photo.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Customized Looks:{" "}
          </span>{" "}
          Every bride has a unique vision for her wedding day. Professional
          makeup artists can create a customized look that aligns with your
          style and preferences.
        </li>
      </ul>
    </div>
  );
};

export default BridalBenefits;
