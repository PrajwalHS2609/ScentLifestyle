import React from "react";
import point from "./../../../../../Images/point.png";

const CurlyHairTypes = () => {
  return (
    <div className="pediManicureWhat">
      <h5>4. Explore Different Types of Curly Hairstyles</h5>
      <p>
        Curly hair isn’t one-size-fits-all. From loose, beachy waves to tight
        corkscrews, there’s a spectrum of curly hairstyles to choose from. Here
        are some popular types:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Beach Waves:
          </span>
          <p>
            A looser, more relaxed style, often achieved with heat styling or by
            braiding damp hair.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Soft Curls:{" "}
          </span>
          <p>
            Medium curls that add volume and bounce without going overboard on
            texture.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Ringlets:
          </span>
          <p>
            Tighter, more defined curls that add a dramatic flair to your look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Coils:{" "}
          </span>
          <p>
            {" "}
            For those with naturally kinky hair, coils add texture and volume
            that celebrate natural curls.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          Understanding these types of curls can help you visualize what you
          want and gauge how much styling will be necessary to achieve your
          ideal curly look.
        </p>
      </ul>
    </div>
  );
};

export default CurlyHairTypes;
