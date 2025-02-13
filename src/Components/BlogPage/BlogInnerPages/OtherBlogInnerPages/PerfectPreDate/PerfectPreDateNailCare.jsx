import React from "react";
import dot from "./../../../../../Images/dot.png";

const PerfectPreDateNailCare = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Nail Care for the Finishing Touch</h5>
      <p>
        Your hands will be in the spotlight, whether you're holding hands or
        simply enjoying a delicious meal.
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Manicure & Pedicure:{" "}
          </span>
          <p>
            Treat yourself to a salon visit or give yourself a DIY manicure and
            pedicure at home. Choose a classic red, soft pink, or a neutral
            shade for a timeless look.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Cuticle Care:{" "}
          </span>
          <p>
            Hydrate your cuticles with cuticle oil to keep them looking neat and
            healthy.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PerfectPreDateNailCare;
