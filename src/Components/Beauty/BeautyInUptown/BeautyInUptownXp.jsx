import React from "react";
import point from "./../../../Images/point.png";

const BeautyInUptownXp = () => {
  return (
    <div className="hairsalonInUptownWhyChoose">
      <h5>
        The SCENT Experience: Combining Body Waxing, Threading & D-Tan in Uptown
        Whitefield
      </h5>
      <p>
        At SCENT, we offer a unique combination of{" "}
        <a href="https://scentlifestyle.com/offer?utm_source=Organic&&utm_medium=Festive+Offer&&utm_campaign=September+Month&&utm_id=Banner+Bar">
          Body Waxing, Threading & D-Tan in Uptown Whitefield
        </a>
        , allowing you to experience a complete transformation in just one
        visit. Whether you're preparing for a special occasion or just want to
        pamper yourself, these treatments work together to provide you with
        flawless, hair-free, and glowing skin.
      </p>
      <p>
        Here’s how you can combine these services for a full beauty experience
        at SCENT:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Body Waxing:{" "}
          </span>
          <p>
            Start with full-body waxing to remove unwanted hair and exfoliate
            your skin, leaving it smooth and soft.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Threading:{" "}
          </span>
          <p>
            Next, shape your eyebrows and remove any unwanted facial hair with
            our precise threading services.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            D-Tan:{" "}
          </span>
          <p>
            Finish your experience with a full-body D-Tan treatment to brighten
            your complexion and give your skin a natural, radiant glow.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default BeautyInUptownXp;
