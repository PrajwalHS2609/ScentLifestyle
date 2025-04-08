import React from "react";
import point from "./../../../../../Images/point.png";

const PerfectPreDateMakeup = () => {
  return (
    <div className="blogWhat-content">
      <h5>Makeup Magic: Enhance Your Natural Beauty</h5>
      <p>
        Your makeup should complement your natural beauty and make you feel
        amazing. Here’s how to create a flawless Valentine’s Day makeup look:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Primer & Base:{" "}
          </span>
          <p>
            Start with a primer to create a smooth canvas, followed by a
            long-lasting foundation or BB cream for a natural finish.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Romantic Eyes:{" "}
          </span>
          <p>
            Opt for soft, romantic eyeshadows in warm tones like rose, peach, or
            champagne. A bit of shimmer on the inner corners will make your eyes
            pop.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Defined Brows:{" "}
          </span>
          <p>
            Well-groomed brows frame your face, so fill them in lightly for a
            polished look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Flirty Lashes:{" "}
          </span>
          <p>
            Curl your lashes and apply lengthening mascara, or opt for
            natural-looking false lashes for extra volume.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Blush & Glow:{" "}
          </span>
          <p>
            Apply a rosy or peachy blush to the apples of your cheeks for a
            youthful glow. A touch of highlighter on the high points of your
            face will add a radiant finish.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Perfect Lips:{" "}
          </span>
          <p>
            Exfoliate your lips with a lip scrub and apply a hydrating lip balm
            before adding a long-lasting lipstick or lip gloss in a flattering
            shade like classic red, soft pink, or nude.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PerfectPreDateMakeup;
