import React from "react";
import point from "./../../../../../Images/point.png";

const OrganicPedicureTreatment = () => {
  return (
    <div className="pediManicureHead">
      <h2>2. Organic Pedicure for Cracked Heels</h2>
      <p>
        For those who prefer a natural approach, an{" "}
        <a href="https://scentlifestyle.com/organic-pedicure"> Organic Pedicure is an excellent choice</a>. This treatment
        uses eco-friendly, chemical-free products to nourish and heal the skin
        naturally.
      </p>
      <ul>
        <h4>Steps Involved in an Organic Pedicure:</h4>
        <li>
          {" "}
          <span>1. Herbal Foot Soak:</span>
          <p>
            The feet are soaked in warm water infused with herbs like chamomile,
            lavender, or tea tree oil. These ingredients have healing and
            anti-inflammatory properties.
          </p>
        </li>
        <li>
          <span> 2. Natural Scrub:</span>
          <p>
            Organic scrubs made from ingredients like sugar, sea salt, or
            oatmeal are used to exfoliate the skin gently.
          </p>
        </li>
        <li>
          <span> 3. Mask Application:</span>
          <p>
            A hydrating foot mask made from avocado, honey, or aloe vera is
            applied to deeply moisturize and repair cracked heels.{" "}
          </p>
        </li>
        <li>
          <span>4. Massage:</span>
          <p>
            An organic oil, such as coconut or jojoba oil, is used for a
            soothing foot massage.
          </p>
        </li>
        <li>
          <span>5. Finishing Touch:</span>
          <p>
            Nails are shaped, and non-toxic nail polish can be applied for a
            clean and polished look.
          </p>
        </li>
      </ul>
      <ul>
        <h4>Benefits of an Organic Pedicure:</h4>
        <p>
          With so many Hair Spa treatments available, you might wonder why Shea
          Butter is the best choice. Here’s why:
        </p>
        <li>
          <span>
            <img src={point} alt="point" /> Gentle on sensitive skin.
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Packed with natural healing properties.
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" /> Reduces environmental impact while
            providing effective foot care.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default OrganicPedicureTreatment;
