import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekBlunt = () => {
  return (
    <div className="blogWhat-content">
      <h5>The Classic Elegance of the Blunt Cut</h5>
      <p>
        Blunt cuts are all about clean lines and sharp edges. This haircut is
        perfect for women who want a polished, sophisticated look. Blunt cuts
        work best on straight or slightly wavy hair, as the sharp edges can be
        lost on curly or highly textured hair.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Blunt Bob:{" "}
          </span>
          <p>
            A blunt bob is a classic, elegant choice that’s perfect for women
            with fine to medium hair. It’s a timeless style that never goes out
            of fashion
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Blunt Lob:{" "}
          </span>
          <p>
            A blunt lob offers the same clean lines as the bob but with added
            length. This style is great for women who want a bit more
            versatility in their haircut.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekBlunt;
