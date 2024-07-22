import React from "react";
import checked from "./../../../../Images/checked.png";

const SnowWhiteFacialExp = () => {
  return (
    <div className="bridalMakeUpPackageWhy">
      <h5>Exceptional Customer Experience at SCENT </h5>
      <p>
        What sets SCENT’s Snow White Facial Services in Bangalore apart from the
        rest? Here are some key differentiators:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expertise{" "}
          </span>
          <p>
            Our team of estheticians are highly trained and experienced in
            delivering top-notch{" "}
            <a href="https://scentlifestyle.com/service">skincare treatments</a>
            . They are passionate about helping you achieve your best skin ever.
          </p>
        </li>

        <li>
          <span>
            <img src={checked} alt="" />
            Personalization:{" "}
          </span>{" "}
          <p>
            We understand that every individual’s skin is unique. That’s why we
            customize each facial to address your specific needs and concerns.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Ambiance:{" "}
          </span>{" "}
          <p>
            {" "}
            Our salon provides a tranquil and luxurious environment where you
            can relax and unwind. We aim to make every visit a pampering
            experience.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Results:{" "}
          </span>{" "}
          <p>
            Our facials deliver visible results that you can see and feel. Many
            of our clients report immediate improvements in their skin’s
            texture, tone, and clarity.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SnowWhiteFacialExp;
