import React from "react";
import point from "./../../../../../Images/point.png";

const HairBleachAlternate = () => {
  return (
    <div className="pediAndMainCureBenefits">
      <h3>Alternative Solutions to Frequent Bleaching</h3>
      <p>
        If you’re looking for lighter hair without the risks of frequent
        bleaching, consider these alternatives:
      </p>
      <li>
        <h6> Highlighting or Balayage</h6>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />{" "}
              <p>
                These techniques lighten specific sections of hair rather than
                the entire head, reducing overall damage.
              </p>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <h6> Toning Treatments</h6>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />
              <p>
                A toner can help neutralize unwanted brassy tones and enhance
                your current color without the need for additional bleach.
              </p>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <h6> Gradual Lightening</h6>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />{" "}
              <p>
                Lighten your hair in stages over several months to minimize
                damage.
              </p>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <h6> Hair Extensions</h6>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />{" "}
              <p>
                Use extensions to achieve a lighter look without coloring your
                natural hair.
              </p>
            </span>
          </li>
        </ul>
      </li>
      <br />
    </div>
  );
};

export default HairBleachAlternate;
