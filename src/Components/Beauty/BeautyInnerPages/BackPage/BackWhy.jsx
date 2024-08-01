import React from "react";
import checked from "./../../../../Images/checked.png";

const BackWhy = () => {
  return (
    <div className="faceWhyContainer">
      <h5>
        Why SCENT Stands Out for Body Back Waxing, De-tan & Threading in
        Bangalore{" "}
      </h5>
      <p>
        Choosing SCENT for your{" "}
        <a href="https://scentlifestyle.com/body-back-waxing-detan-threading-salon-in-bangalore">
          Body Back Waxing, De-tan & Threading in Bangalore
        </a>{" "}
        ensures that you receive top-quality service and care. Our team of
        professionals is dedicated to providing a comfortable and effective
        experience. Here’s why our clients trust us:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expertise :{" "}
          </span>
          <p>
            {" "}
            Our staff are highly trained and experienced in all aspects of body
            back waxing, de-tan treatments, and threading. They stay updated
            with the latest trends and techniques to offer the best services.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Quality Products :{" "}
          </span>
          <p>
            {" "}
            We use premium products that are gentle on the skin and effective in
            delivering results. From our waxing waxes to de-tan formulations,
            every product is selected to ensure the highest quality.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Personalized Service :{" "}
          </span>
          <p>
            {" "}
            We believe in customizing our services to suit your unique skin type
            and preferences. Our consultations help us understand your needs and
            provide treatments that align with your beauty goals.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BackWhy;
