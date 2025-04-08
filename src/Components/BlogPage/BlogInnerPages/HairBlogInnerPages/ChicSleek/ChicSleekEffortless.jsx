import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekEffortless = () => {
  return (
    <div className="blogWhat-content">
      <h5>The Effortless Appeal of Long Layers</h5>
      <p>
        Long layers are perfect for women who love the look of long hair but
        want to add some movement and dimension. This haircut is incredibly
        versatile and can be tailored to suit any hair type, whether straight,
        wavy, or curly. Long layers add volume and texture to the hair, giving
        it a natural, effortless look.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Face-Framing Layers:{" "}
          </span>
          <p>
            Face-framing layers are ideal for accentuating your facial features.
            They add softness and dimension to the hair, making it look fuller
            and more dynamic.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Beachy Waves:{" "}
          </span>
          <p>
            Long layers work beautifully with beachy waves, creating a relaxed,
            bohemian look. This style is perfect for women who want a carefree,
            laid-back vibe.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekEffortless;
