import React from "react";
import checked from "./../../../../Images/checked.png";

const EyeProtectFacialWhy = () => {
  return (
    <div className="bridalMakeUpPackageWhy">
      <h5>Why Choose SCENT for Eye Protection Facial Services in Bangalore</h5>
      <p>
        SCENT is renowned for its commitment to quality and customer
        satisfaction. Here are a few reasons why you should choose us for your
        Eye Protection Facial Services in Bangalore:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Estheticians:{" "}
          </span>
          <p>
            Our team comprises highly trained and experienced estheticians who
            specialize in eye care. They are knowledgeable about the latest
            techniques and products in the industry.
          </p>
        </li>

        <li>
          <span>
            <img src={checked} alt="" />
            Luxurious Experience:{" "}
          </span>{" "}
          <p>
            We strive to provide a relaxing and indulgent experience for our
            clients. From the moment you step into our salon, you will be
            pampered and cared for.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Customized Treatments:{" "}
          </span>{" "}
          <p>
            {" "}
            We understand that each person's skin is unique. That's why we
            customize our treatments to address your specific concerns and
            needs.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            High-Quality Products:{" "}
          </span>{" "}
          <p>
            {" "}
            We use only the finest products in our treatments, ensuring that
            your skin receives the best care possible.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Convenient Location:{" "}
          </span>{" "}
          <p>
            Our salon is conveniently located in Bangalore, making it easy for
            you to schedule and attend your appointments.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EyeProtectFacialWhy;
