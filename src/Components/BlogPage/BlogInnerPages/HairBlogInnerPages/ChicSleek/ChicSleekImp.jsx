import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekImp = () => {
  return (
    <div className="pediManicureWhat">
      <h5>The Importance of Customization</h5>
      <p>
        One of the most important aspects of choosing the right haircut is
        customization. A haircut that looks great on one person may not
        necessarily suit someone else. That’s why it’s essential to work with
        your stylist to find a haircut that’s tailored to your individual needs.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Face Shape:{" "}
          </span>
          <p>
            Your face shape plays a crucial role in determining which haircut
            will suit you best. For example, women with round faces may want to
            opt for a haircut with longer layers that elongate the face, while
            those with square faces might prefer soft, face-framing layers to
            soften their features.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Hair Type:{" "}
          </span>
          <p>
            Your hair type is another critical factor to consider. For example,
            women with fine hair may want to choose a haircut that adds volume,
            such as a layered bob or a blunt cut, while those with thick hair
            might prefer a haircut that reduces bulk, such as a textured pixie
            or a curly shag.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekImp;
