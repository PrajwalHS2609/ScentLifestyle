import React from "react";
import point from "./../../../Images/point.png";

const NailExtensionInSahakaraMaintain = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>How to Maintain Your Nail Extensions</h5>
      <p>
        Nail extensions require a bit of care to keep them looking fabulous.
        Here are some tips from our experts at SCENT:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Avoid using your nails as tools{" "}
          </span>
          <p>
            Nail extensions are durable, but using them to pry open objects can
            lead to cracks or breaks.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Moisturize your hands and cuticles
          </span>
          <p>
            Keeping your cuticles hydrated can help your extensions last longer
            and maintain their shine.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Schedule regular fills{" "}
          </span>
          <p>
            For the best results, visit SCENT for touch-ups every 2-3 weeks to
            maintain the strength and appearance of your nail extensions near
            Sahakara Nagar.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Use gentle nail polish removers
          </span>
          <p>
            Harsh removers can weaken extensions, so it’s best to choose an
            acetone-free option.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionInSahakaraMaintain;
