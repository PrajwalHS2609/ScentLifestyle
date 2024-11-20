import React from "react";
import checked from "./../../../../../Images/checked.png";

const LashesExtensionMaintain = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Maintaining Your Eyelash Extensions for Long-Lasting Glam</h5>
      <p>
        Eyelash extensions are a low-maintenance beauty solution, but proper
        care will keep them looking fabulous for as long as possible. Here are
        some aftercare tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Avoid Water for 24 Hours:{" "}
          </span>
          <p>
            Let the adhesive fully set by avoiding water, steam, or heavy
            sweating for the first 24 hours.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Skip Oil-Based Products:{" "}
          </span>
          <p>
            Use oil-free makeup and skincare products to prevent weakening the
            adhesive.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Brush Daily:{" "}
          </span>
          <p>
            Use a clean lash brush to gently comb through your lashes and
            maintain their shape.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Sleep Smart:{" "}
          </span>
          <p>
            Sleep on your back to avoid crushing your lashes, and consider using
            a silk pillowcase to reduce friction.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Schedule Refills:{" "}
          </span>
          <p>
            Keep your lashes full and fresh by booking refill appointments every
            2-3 weeks.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LashesExtensionMaintain;
