import React from "react";
import checked from "./../../../../../Images/checked.png";

const HairBotoxTreatmentBenefits = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Benefits of Hair Botox Treatment</h5>
      <p>
        Hair Botox treatment offers several unique benefits that cater to
        various hair types and issues. Here’s a closer look:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Reduces Frizz:{" "}
          </span>
          <p>
            If you struggle with frizzy hair, Hair Botox can help tame it by
            smoothing out each strand, making hair look sleek and polished.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Repairs Damaged Hair:{" "}
          </span>
          <p>
            Ingredients like keratin and amino acids help repair damage, making
            it ideal for hair weakened by heat styling or chemical treatments.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Adds Volume and Shine:{" "}
          </span>
          <p>
            Hair Botox gives hair a full, healthy appearance. Collagen and
            protein work together to enhance volume and provide a beautiful,
            glossy finish.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Improves Texture:{" "}
          </span>
          <p>
            {" "}
            For those with curly or wavy hair, Hair Botox softens the texture,
            making hair easier to style and manage.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairBotoxTreatmentBenefits;
