import React from "react";
import point from "./../../../../Images/point.png";

const NailExtensionInJakkurMaintain = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Maintenance Tips for Nail Extensions</h5>
      <p>
        To keep your nail extensions looking fabulous and lasting as long as
        possible, it’s important to follow some maintenance tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Avoid using your nails as tools{" "}
          </span>
          <p>
            Nail extensions are durable, but prying or pulling on things can
            cause them to chip or break.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Moisturize your hands and cuticles regularly{" "}
          </span>
          <p>
            Keeping your cuticles hydrated helps maintain the health of your
            nails and extends the life of your extensions.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Schedule regular fills{" "}
          </span>
          <p>
            Nail extensions need regular fills every 2-3 weeks to maintain their
            strength and appearance. Be sure to book follow-up appointments at
            SCENT for optimal results.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Use gentle nail polish removers{" "}
          </span>
          <p>
            Harsh chemicals can weaken your extensions, so we recommend using an
            acetone-free remover if you want to change your nail color.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionInJakkurMaintain;
