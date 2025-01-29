import React from "react";
import point from "./../../../../../Images/point.png";

const TenReasonHaircutHow = () => {
  return (
    <div className="pediManicureWhat">
      <h5>How Often Should You Get a Haircut?</h5>
      <p>
        The frequency of your haircuts depends on your hair type, style, and
        personal preference:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Men’s Haircuts:{" "}
          </span>
          <p>
            Men with short styles or trendy haircuts may need a trim every 3-4
            weeks to maintain a polished look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Women’s Haircuts:
          </span>
          <p>
            Women with medium to long hair can schedule trims every 6-8 weeks to
            prevent split ends and maintain health.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Trendy Haircuts:
          </span>
          <p>
            Styles that require precision and structure, like bobs or fades,
            often need more frequent visits to keep their shape.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TenReasonHaircutHow;
