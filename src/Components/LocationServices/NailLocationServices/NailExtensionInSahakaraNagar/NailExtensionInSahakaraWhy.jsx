import React from "react";
import checked from "./../../../../Images/checked.png";

const NailExtensionInSahakaraWhy = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Why Choose Nail Extensions?</h5>
      <p>
        There are countless reasons why people opt for nail extensions near
        Sahakara Nagar. Nail extensions not only enhance the appearance of your
        nails but also allow you to experiment with different shapes, lengths,
        and designs. With nail extensions, you can:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Boost confidence with stylish, well-manicured nails.
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Strengthen weak nails and
            protect them from damage.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Add length if you have short
            nails or trouble growing them.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Explore endless design
            possibilities, from chic French tips to glamorous embellishments.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionInSahakaraWhy;
