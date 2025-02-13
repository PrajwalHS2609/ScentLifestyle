import React from "react";
import check from "./../../../../../Images/checked.png";

const PerfectPreDateFinal = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Final Touches Before You Head Out</h5>
      <ul>
        <li>
          <span>
            <img src={check} alt="checked" />
            Fragrance Boost:{" "}
          </span>
          <p>
            Apply your favorite perfume to pulse points (wrists, behind the
            ears, and neck) for a lasting scent.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="checked" />
            Emergency Kit:{" "}
          </span>
          <p>
            Pack a small touch-up kit with lipstick, blotting paper, and a
            travel-sized perfume for quick fixes.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="checked" />
            Mindset & Energy:{" "}
          </span>
          <p>
            Take a deep breath, relax, and remind yourself that the best part of
            the evening is enjoying the moment.
          </p>
        </li>
      </ul>
      <p>
        This Valentine’s Day,{" "}
        <a href="https://scentlifestyle.com/the-perfect-pre-date-beauty-routine-for-a-magical-valentines-day">
          pamper yourself with this perfect pre-date beauty routine
        </a>{" "}
        and step into your date feeling gorgeous, confident, and ready for a
        magical evening!
      </p>
    </div>
  );
};

export default PerfectPreDateFinal;
