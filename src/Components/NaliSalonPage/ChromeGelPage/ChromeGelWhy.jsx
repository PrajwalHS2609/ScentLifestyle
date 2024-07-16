import React from "react";
import checked from "./../../../Images/checked.png";

const ChromeGelWhy = () => {
  return (
    <div className="nailExtensionWhy">
      <h5>Why Chrome Gel Polish is Popular? </h5>
      <p>
        The popularity of chrome gel polish has soared due to several factors:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Technicians:
          </span>{" "}
          The team at SCENT is highly skilled and experienced in gel nail art,
          ensuring professional and beautiful results every time.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            High Quality Products:
          </span>{" "}
          Only top-tier products are used to ensure the longevity and quality of
          your gel nails.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Personalized Service:
          </span>{" "}
          Each client receives personalized attention, ensuring that the final
          result matches their vision.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Hygiene and Safety:
          </span>{" "}
          SCENT prioritizes cleanliness and hygiene, using sterilized tools and
          maintaining a clean environment.
        </li>
      </ul>
    </div>
  );
};

export default ChromeGelWhy;
