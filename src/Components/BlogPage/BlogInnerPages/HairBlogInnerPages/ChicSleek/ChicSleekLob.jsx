import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekLob = () => {
  return (
    <div className="pediManicureWhat">
      <h5>The Versatility of the Lob</h5>
      <p>
        The lob, or long bob, is another haircut that has gained immense
        popularity in recent years. It’s a perfect middle ground between long
        and short hair, offering the best of both worlds. The lob is a versatile
        haircut that can be styled in numerous ways, making it a great option
        for women who love to switch up their look.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Sleek Pixie:
          </span>
          <p>
            Straight Lob: A straight lob with blunt ends is sleek and
            sophisticated, making it ideal for a professional setting. It’s also
            a great option for women with fine hair, as it adds the appearance
            of fullness.ect for women who want a low-maintenance yet stylish
            haircut.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Textured Lob:{" "}
          </span>
          <p>
            For a more relaxed look, opt for a textured lob with soft waves.
            This style is perfect for women who want a chic yet effortless look
            that works for any occasion.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekLob;
