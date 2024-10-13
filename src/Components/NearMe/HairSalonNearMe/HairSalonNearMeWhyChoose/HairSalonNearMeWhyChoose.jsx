import React from "react";
import checked from "./../../../../Images/checked.png";
import "./HairSalonNearMeWhyChoose.css";
const HairSalonNearMeWhyChoose = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why SCENT is the Go-To Hair Salon Near Me</h5>
      <p>
        With so many salons to choose from, finding the perfect hair salon near
        me can be a challenge. But SCENT stands out for several reasons:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Expert Stylists:
          </span>
          <p>
            Our team of highly trained professionals is passionate about
            hairstyling. With years of experience and a commitment to staying
            updated on the latest trends, they provide personalized
            consultations to help you achieve the look you desire.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Premium Products:{" "}
          </span>
          <p>
            At SCENT, we use only the best hair care products from trusted
            brands. From nourishing shampoos to color-safe treatments, our
            products are designed to bring out the best in your hair.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Tailored Services:{" "}
          </span>
          <p>
            Whether you need a quick trim or a complete makeover, SCENT has a
            service for you. Our menu includes haircuts, coloring, highlights,
            hair spas, keratin treatments, and more. For those searching for a
            hair salon near me that offers it all, SCENT is your one-stop
            solution.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Relaxing Atmosphere:{" "}
          </span>
          <p>
            At SCENT, we know that a visit to the salon is more than just about
            getting your hair done. It’s about taking time for yourself,
            relaxing, and enjoying a pampering experience. Our salon offers a
            serene environment where you can unwind while our stylists work
            their magic.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairSalonNearMeWhyChoose;
