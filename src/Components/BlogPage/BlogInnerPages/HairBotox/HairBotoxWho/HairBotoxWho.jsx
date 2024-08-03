import React from "react";
import checked from "./../../../../../Images/checked.png";
import "./HairBotoxWho.css";
const HairBotoxWho = () => {
  return (
    <div className="hairBotoxWho">
      <h5>Who Can Benefit from Hair Botox?</h5>
      <p>
        Hair Botox is a versatile treatment that can benefit a wide range of
        individuals. Here are some of the people who can benefit the most from
        this treatment:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" /> Those with Frizzy Hair:
          </span>
          <p>
            Those with Frizzy Hair: If you struggle with frizz and flyaways,
            Hair Botox can help smooth your hair and give it a polished look.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Individuals with Damaged Hair:
          </span>
          <p>
            Whether your hair is damaged from heat styling, chemical treatments,
            or environmental factors, Hair Botox can help repair and strengthen
            your strands.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            People with Dry or Brittle Hair:
          </span>
          <p>
            Hair Botox provides deep hydration, making it an excellent option
            for those with dry or brittle hair.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Those with Dull or Lifeless Hair:
          </span>
          <p>
            If your hair lacks shine and vibrancy, Hair Botox can revitalize
            your tresses and enhance their natural glow.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            People with Unmanageable Hair:
          </span>
          <p>
            Hair Botox makes the hair more manageable, making it easier to style
            and maintain.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Anyone Looking for a Safe and
            Natural Hair Treatment:
          </span>
          <p>
            Hair Botox is a non-chemical treatment that is safe for all hair
            types, including color-treated and chemically processed hair.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairBotoxWho;
