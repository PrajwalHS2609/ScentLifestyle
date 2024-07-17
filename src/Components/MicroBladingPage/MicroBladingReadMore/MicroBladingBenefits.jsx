import React from "react";
import checked from "./../../../Images/checked.png";

const MicroBladingBenefits = () => {
  return (
    <div className="nailExtensionWhy">
      <h5> The Benefits of Eyebrow Microblading in Bangalore </h5>
      <p>
        Choosing Eyebrow Microblading in Bangalore offers numerous benefits
        beyond just beautiful brows:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Time-Saving:{" "}
          </span>{" "}
          Say goodbye to the daily routine of filling in your eyebrows.
          Microblading saves you time each morning, giving you more time to
          focus on other aspects of your beauty routine.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Natural Look:{" "}
          </span>{" "}
          Our expert technicians create brows that look natural and perfectly
          shaped, enhancing your facial features.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Boosted Confidence:{" "}
          </span>{" "}
          Well-shaped eyebrows can significantly boost your confidence. With
          Eyebrow Microblading in Bangalore, you’ll feel more confident and
          ready to take on the day.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Customized to You:{" "}
          </span>{" "}
          Every brow is customized to suit your face shape, style, and
          preferences. You’ll get a look that’s uniquely yours.
        </li>
      </ul>
    </div>
  );
};

export default MicroBladingBenefits;
