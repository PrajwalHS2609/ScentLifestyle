import React from "react";
import point from "./../../../../../Images/point.png";

const MakeupTips = () => {
  return (
    <div className="pediManicureWhat">
      <h5>4. Makeup Tips: Get the Perfect Holiday Look</h5>
      <p>
        Makeup plays a key role in enhancing your holiday look. Whether you
        prefer a natural, glowing look or a bold, statement makeup style, the
        festive season offers the perfect opportunity to try something new.
      </p>
      <ul>
        <h4>Effective Marketing Strategies:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Opt for a Festive Red Lip{" "}
          </span>
          <p>
            A red lip is classic and timeless, making it a must-have for any
            holiday celebration. Choose a shade that complements your skin tone
            and go for a long-lasting formula that won’t smudge. Pair it with a
            subtle eye makeup look to let your lips do all the talking.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Add Sparkle to Your Eyes{" "}
          </span>
          <p>
            The holidays are the perfect time to embrace glittery eyeshadows and
            metallic liners. Try a soft gold or silver shimmer on your eyelids
            for a glowing look, or go for bold, smoky eyes with a touch of
            sparkle. False lashes can also make your eyes stand out for extra
            drama during holiday parties.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Bronze Up Your Skin
          </span>
          <p>
            To add some warmth to your complexion during the winter months, use
            a bronzer to sculpt and define your face. Apply bronzer to the
            hollows of your cheeks, temples, and jawline for a subtle sun-kissed
            effect. Finish with a light dusting of highlighter on your
            cheekbones and down the center of your nose for a radiant, festive
            glow.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Go for the Dewy Look{" "}
          </span>
          <p>
            The holidays are all about looking fresh and glowing. Use a
            hydrating foundation or BB cream for a dewy finish, and set it with
            a light dusting of translucent powder to avoid a cakey look. Keep
            your makeup light and fresh for daytime events, and amp it up with
            bold colors and shimmer for evening celebrations.
          </p>
        </li>
      </ul>

      <br />
    </div>
  );
};

export default MakeupTips;
