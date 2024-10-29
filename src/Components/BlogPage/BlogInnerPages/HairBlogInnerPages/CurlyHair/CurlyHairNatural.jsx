import React from "react";
import point from "./../../../../../Images/point.png";

const CurlyHairNatural = () => {
  return (
    <div className="pediManicureWhat">
      <h5>3. Consider Your Natural Hair Texture</h5>
      <p>
        Your natural hair texture can be a strong indicator of how easily you’ll
        be able to maintain and style curls. Hair texture typically falls into
        four types: straight, wavy, curly, and coily. Here’s how each texture
        might respond to curly styles:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Straight Hair:{" "}
          </span>
          <p>
            Straight hair can hold curls with the help of styling products,
            curling irons, or perms, but achieving natural-looking curls might
            require more frequent styling.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Wavy Hair:{" "}
          </span>
          <p>
            Wavy hair has a natural inclination towards curls and may require
            less effort to define and maintain a curly style.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Curly Hair:{" "}
          </span>
          <p>
            If you already have a curly or semi-curly texture, working with your
            natural curls can be easier. It just may require some care with
            defining products.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Coily Hair:{" "}
          </span>
          <p>
            Coily hair has the tightest curl pattern, which may benefit from
            moisture and curl-enhancing products but will naturally maintain a
            curly structure.{" "}
          </p>
        </li>
      </ul>
      <ul>
        <p>
          If your hair is naturally straight, you may need a perm or regular
          heat styling to achieve and sustain curly hair. Knowing your hair type
          can help set realistic expectations for what your curls might look
          like and how much work you’ll need to put in.
        </p>
      </ul>
    </div>
  );
};

export default CurlyHairNatural;
