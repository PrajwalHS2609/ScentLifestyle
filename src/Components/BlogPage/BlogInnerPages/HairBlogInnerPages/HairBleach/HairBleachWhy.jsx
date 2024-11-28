import React from "react";
import checked from "./../../../../../Images/checked.png";

const HairBleachWhy = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Why Is It Important to Wait Between Sessions?</h5>
      <p>
        Bleaching your hair too often can lead to irreversible damage. Here’s
        why waiting is essential:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Hair Recovery:{" "}
          </span>
          <p>
            Bleaching weakens the protein bonds in your hair, making it fragile.
            Waiting allows your hair to rebuild its structure.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Moisture Balance:{" "}
          </span>
          <p>
            Bleach strips your hair of natural oils, leading to dryness. A
            recovery period helps restore hydration and elasticity.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Scalp Health:{" "}
          </span>
          <p>
            The chemicals in bleach can irritate or damage your scalp. Waiting
            between sessions reduces the risk of chemical burns or sensitivity.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairBleachWhy;
