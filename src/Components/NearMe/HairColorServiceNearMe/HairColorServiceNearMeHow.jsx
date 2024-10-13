import React from "react";
import point from "./../../../Images/point.png";

const HairColorServiceNearMeHow = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>How to Care for Your Hair Color</h5>
      <p>
        Once you’ve achieved your desired look with SCENT’s{" "}
        <a href="https://scentlifestyle.com/global-hair-color-salon-near-me">hair color services</a>
        near me, it’s important to take steps to maintain your color and keep
        your hair healthy. Here are a few tips to help your color last longer:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Use Color-Safe Shampoo and Conditioner:{" "}
          </span>
          <p>
            Invest in high-quality, sulfate-free products designed to protect
            color-treated hair.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Limit Heat Styling:{" "}
          </span>
          <p>
            Excessive heat can cause your color to fade faster. When using heat
            tools, always apply a heat protectant spray.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Protect Your Hair from the Sun:{" "}
          </span>
          <p>
            UV rays can cause your color to fade. Use a leave-in conditioner
            with UV protection or wear a hat when spending time outdoors.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Schedule Regular Touch-Ups:{" "}
          </span>
          <p>
            To keep your color looking fresh, book regular touch-up appointments
            at SCENT for hair color services near me. This will help you
            maintain the vibrancy of your color and ensure that your hair always
            looks its best.{" "}
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairColorServiceNearMeHow;
