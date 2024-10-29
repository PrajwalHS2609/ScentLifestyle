import React from "react";
import point from "./../../../../../Images/point.png";

const CurlyHairUpkeep = () => {
  return (
    <div className="pediManicureWhat">
      <h5>5. Are You Ready for the Upkeep?</h5>
      <p>
        One of the most important factors in deciding on{" "}
        <a href="https://scentlifestyle.com/is-curly-hair-the-right-style-for-you-heres-how-to-find-out">
          curly hair is understanding the upkeep involved
        </a>
        . While curly hair is undoubtedly stunning, it requires dedication to
        maintain, as curls can lose shape, frizz up, or become dry if not
        properly cared for. Here’s what you should consider in terms of curly
        hair maintenance:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Moisture:{" "}
          </span>
          <p>
            Curls thrive on moisture, which means frequent conditioning and deep
            conditioning treatments to keep them hydrated and frizz-free.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Styling Products:{" "}
          </span>
          <p>
            You may need to invest in curl creams, gels, leave-in conditioners,
            and oils to keep your curls looking fresh and defined.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Drying Time:{" "}
          </span>
          <p>
            Air drying is often preferred to prevent frizz, but it can take
            longer. Alternatively, using a diffuser can speed up the process
            without disrupting the curl pattern.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Regular Trims:{" "}
          </span>
          <p>
            Curls can develop split ends easily, so regular trims are essential
            to maintaining shape and health.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          If you’re prepared to commit to these steps, curly hair can be
          incredibly rewarding, giving you a unique and head-turning look.
        </p>
      </ul>
    </div>
  );
};

export default CurlyHairUpkeep;
