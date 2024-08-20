import React from "react";
import point from "./../../../../../Images/point.png";

const BrazilianWaxingPrepare = () => {
  return (
    <div className="pediManicureWhat">
      <h5>How to Prepare for Brazilian Waxing</h5>
      <p>
        Proper preparation can make your Brazilian Waxing experience much more
        comfortable. Here are some key tips to ensure your session goes
        smoothly:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Grow Your Hair:{" "}
          </span>
          <p>
            For the best results, make sure your hair is about ¼ inch long
            before your appointment. This is the ideal length for the wax to
            grab onto.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Exfoliate:{" "}
          </span>
          <p>
            Gently exfoliating the area a day before your appointment can help
            remove dead skin cells and prevent ingrown hairs.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Avoid Caffeine and Alcohol:{" "}
          </span>
          <p>
            These can make your skin more sensitive to pain, so it’s best to
            avoid them on the day of your appointment.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Wear Loose Clothing:{" "}
          </span>
          <p>
            After Brazilian Waxing, your skin will be sensitive, so wearing
            loose, breathable clothing will prevent irritation.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BrazilianWaxingPrepare;
