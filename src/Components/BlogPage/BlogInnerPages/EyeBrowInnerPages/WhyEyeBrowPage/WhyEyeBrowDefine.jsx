import React from "react";
import point from "./../../../../../Images/point.png";

const WhyEyeBrowDefine = () => {
  return (
    <div className="blogWhat-content">
      <h5>3. Defines Your Personal Style</h5>
      <p>
        Your eyebrows can say a lot about your personal style. Whether you
        prefer a sleek, bold brow or a soft, natural look, your eyebrows play a
        huge role in defining your aesthetic. Eyebrow shaping allows you to
        customize your look according to your personality and beauty
        preferences.
      </p>
      <ul>
        <h4>Popular Eyebrow Shapes and What They Say About You:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Bold and Arched:{" "}
          </span>
          <p>
            A bold, arched brow conveys confidence and a strong sense of style.
            It’s perfect for those who like to make a statement with their look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Soft and Rounded:{" "}
          </span>
          <p>
            A softly rounded brow is gentle and feminine, giving your face a
            more approachable and friendly appearance.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Straight and Full:{" "}
          </span>
          <p>
            This brow shape offers a natural and effortless look. It’s great for
            those who want their beauty routine to feel low-maintenance while
            still looking polished.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            High Arch with a Tail:{" "}
          </span>
          <p>
            This shape gives off a dramatic and glamorous vibe, ideal for those
            who love a bold and defined look.
          </p>
        </li>
      </ul>
      <p>
        Choosing the right eyebrow shape based on your personal style can
        elevate your overall appearance and make you feel more aligned with your
        aesthetic preferences.
      </p>
      <br />
    </div>
  );
};

export default WhyEyeBrowDefine;
