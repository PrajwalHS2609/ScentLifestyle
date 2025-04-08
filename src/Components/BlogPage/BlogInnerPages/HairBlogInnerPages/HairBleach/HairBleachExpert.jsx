import React from "react";
import dot from "./../../../../../Images/dot.png";

const HairBleachExpert = () => {
  return (
    <div className="blogBenefits-content">
      <h3>Expert Tips for Your Next Bleaching Session</h3>
      <p>
        When it’s time to bleach your hair again, follow these tips for the best
        results:
      </p>
      <li>
        <h6>1. Consult a Professional</h6>
        <ul>
          <li>
            <span>
              <img src={dot} alt="dot" />
              <p>
                A professional stylist can assess your hair’s condition and
                recommend the safest approach.
              </p>
            </span>
          </li>
          <li>
            <span>
              <img src={dot} alt="dot" />
              <p>
                They have access to high-quality products that are gentler on
                your hair.
              </p>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <h6>2. Perform a Strand Test</h6>
        <ul>
          <li>
            <span>
              <img src={dot} alt="dot" />
              <p>
                Before applying bleach to your entire head, test a small section
                of hair to ensure it can handle the process.
              </p>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <h6>3. Use a Low-Volume Developer</h6>
        <ul>
          <li>
            <span>
              <img src={dot} alt="dot" />{" "}
              <p>
                A lower-volume developer (10 or 20 volume) is less damaging and
                allows for a slower, more controlled lightening process.
              </p>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <h6>4. Prioritize Scalp Protection</h6>
        <ul>
          <li>
            <span>
              <img src={dot} alt="dot" />{" "}
              <p>
                Apply a protective barrier, like petroleum jelly, around your
                hairline to prevent scalp irritation.
              </p>
            </span>
          </li>
        </ul>
      </li>

      <br />
    </div>
  );
};

export default HairBleachExpert;
