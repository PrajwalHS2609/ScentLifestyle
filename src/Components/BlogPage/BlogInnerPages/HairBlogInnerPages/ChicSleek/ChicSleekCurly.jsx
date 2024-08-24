import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekCurly = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Embracing Your Curls: The Curly Cut</h5>
      <p>
        For women with curly hair, finding the right haircut can be a challenge.
        The key is to embrace your natural texture and choose a haircut that
        enhances your curls rather than fights against them. The curly cut is
        all about working with your hair’s natural shape to create a look that’s
        both stylish and manageable.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Curly Bob:{" "}
          </span>
          <p>
            A curly bob is a great option for women with tighter curls. It’s a
            fun, playful haircut that’s easy to style and maintain.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Curly Layers:{" "}
          </span>
          <p>
            Adding layers to curly hair helps to define the curls and reduce
            bulk. This style is perfect for women with thick, curly hair who
            want to add some shape and movement to their look.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekCurly;
