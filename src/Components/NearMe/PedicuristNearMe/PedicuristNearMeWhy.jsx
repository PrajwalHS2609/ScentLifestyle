import React from "react";
import checked from "./../../../Images/checked.png";

const PedicuristNearMeWhy = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why Choose SCENT for Your Pedicure Near Me?</h5>
      <p>
        When you search for a pedicurist near me, you have plenty of options—but
        here’s why SCENT is your top choice for a luxurious pedicure experience:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Expert Technicians{" "}
          </span>
          <p>
            At SCENT, our skilled and experienced pedicurists are dedicated to
            providing you with the best possible care. We take the time to
            understand your unique needs and deliver personalized services that
            leave your feet looking and feeling amazing.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Relaxing Environment{" "}
          </span>
          <p>
            We believe in creating a peaceful and relaxing environment for all
            of our clients. Our spa-like setting is designed to help you unwind
            and enjoy a serene experience, allowing you to focus on relaxation
            while we take care of your feet.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> High-Quality Products
          </span>
          <p>
            We only use top-quality products for our pedicures to ensure that
            your nails and skin stay healthy and radiant. From nourishing creams
            to long-lasting polishes, we ensure that every product used is of
            the highest quality.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Tailored Pedicure Services
          </span>
          <p>
            Whether you’re looking for a basic pedicure or a more luxurious
            experience, SCENT offers a variety of options to suit your needs.
            Our pedicurist near me services can be customized based on your
            preferences, ensuring that you get exactly what you want.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Convenient Booking
          </span>
          <p>
            Booking a pedicure at SCENT is easy and convenient. With our
            user-friendly online booking system and flexible appointment times,
            we make it simple for you to schedule a relaxing session at your
            convenience. We also offer walk-in appointments, making it easier
            than ever to pamper yourself.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default PedicuristNearMeWhy;
