import React from "react";
import checked from "./../../../../../Images/checked.png";

const HairColorTryMaintain = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Styling and Maintenance Tips for Colored Hair</h5>
      <p>
        Achieving the perfect color is just the beginning. Maintaining vibrant
        color requires a bit of extra care. Here are some tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Use Color-Safe Shampoo:{" "}
          </span>
          <p>
            Preserve the brightness of your color with sulfate-free, color-safe
            shampoos and conditioners.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Avoid Overwashing:{" "}
          </span>
          <p>
            Too much washing can strip color. Aim for 2-3 times per week, using
            dry shampoo in between if needed.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Heat Protection:{" "}
          </span>
          <p>
            Color-treated hair is more susceptible to heat damage, so always use
            a heat protectant spray before styling.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Regular Touch-Ups:{" "}
          </span>
          <p>
            Colors like pastels and bright shades may fade quickly, so consider
            regular touch-ups to keep your color looking fresh.
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

export default HairColorTryMaintain;
