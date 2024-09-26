import React from "react";
import point from "./../../../../../Images/point.png";

const WhyEyeBrowFrame = () => {
  return (
    <div className="pediManicureWhat">
      <h5>1. Eyebrows Frame Your Face</h5>
      <p>
        One of the most important roles of eyebrows is framing your face. Just
        like a picture needs a frame to bring out its best features, your face
        relies on well-shaped eyebrows to highlight your eyes, nose, and
        cheekbones. The right brow shape can bring balance and harmony to your
        facial features, enhancing your natural beauty.
      </p>
      <ul>
        <h4>How Eyebrow Shaping Affects Your Look:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Defines Your Eyes:{" "}
          </span>
          <p>
            A well-shaped brow will draw attention to your eyes, making them
            appear larger and more awake.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Balances Facial Proportions:{" "}
          </span>
          <p>
            Eyebrow shaping helps to create symmetry, balancing out uneven
            features or emphasizing strong ones.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Enhances Expression:{" "}
          </span>
          <p>
            Eyebrows play a key role in your facial expressions. Shaped brows
            can soften or sharpen your expressions, depending on your desired
            look.
          </p>
        </li>
      </ul>
      <p>
        No matter what your face shape is—round, square, heart-shaped, or
        oval—the right eyebrow shape can accentuate your best features. This is
        why eyebrow shaping is not just a grooming routine but a beauty secret
        for achieving a polished and refined appearance.
      </p>
      <br />
    </div>
  );
};

export default WhyEyeBrowFrame;
