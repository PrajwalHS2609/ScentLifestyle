import React from "react";
import point from "./../../../../../Images/point.png";

const Top5SpaBouns = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Bonus Reasons to Book a Hair Spa Today</h5>
      <p>
        While the top 5 reasons to book a hair spa today have been covered,
        there are a few more advantages worth mentioning. A hair spa can also
        help in:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Reducing Hair Fall:{" "}
          </span>
          <p>
            With the right combination of oils, serums, and massages, a hair spa
            can help reduce hair fall by strengthening hair roots and improving
            scalp health.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Promoting Faster Hair Growth:{" "}
          </span>
          <p>
            Improved scalp circulation from a hair spa encourages hair follicles
            to produce hair more quickly, aiding in overall hair growth.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Customizable Treatments:{" "}
          </span>
          <p>
            {" "}
            Hair spa treatments can be customized to address specific concerns,
            whether it’s dandruff, hair fall, or damaged hair, making it a
            versatile option for everyone.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Top5SpaBouns;
