import React from "react";
import checked from "./../../../Images/checked.png";

const BalayageColorNearMeWhyChoose = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why SCENT is the Best Salon for Balayage Hair Color Near Me </h5>
      <p>
        When it comes to balayage, SCENT has earned a reputation for excellence.
        Here’s why clients love coming to us for their hair transformations:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Flawless Results{" "}
          </span>
          <p>
            With years of experience and advanced training, our colorists know
            how to deliver flawless balayage every time. Whether you’re going
            for subtle highlights or a bold color transformation, SCENT is the
            best choice for balayage hair color near me.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Luxurious Salon Experience{" "}
          </span>
          <p>
            At SCENT, we believe that getting your hair done should be a
            luxurious, relaxing experience. Our salon is designed to be a
            peaceful retreat where you can unwind while we work our magic.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Commitment to Quality{" "}
          </span>
          <p>
            We’re dedicated to using the highest-quality products and the latest
            techniques to ensure that you leave the salon with beautiful,
            healthy hair. Our commitment to excellence is why so many people
            trust SCENT for their balayage hair color near me.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default BalayageColorNearMeWhyChoose;
