import React from "react";
import point from "./../../../../../Images/point.png";

const GlamorousCrown = () => {
  return (
    <div className="pediManicureWhat">
      <h5>5. The Braided Crown</h5>
      <p>
        If you're looking for something unique and eye-catching, the braided
        crown is the way to go. This hairstyle gives off a whimsical,
        goddess-like vibe and works well with formal or semi-formal outfits.
        Plus, it’s easier than it looks!
      </p>
      <ul>
        <p>
          <span>How to Achieve the Look:</span>{" "}
        </p>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 1:{" "}
          </span>
          <p>
            Start by parting your hair down the middle. Take a section of hair
            from one side of your head and begin braiding it, working your way
            around your head like a crown.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 2:
          </span>
          <p> Secure the end of the braid with a small elastic.</p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 3:
          </span>
          <p> Repeat the process on the other side of your head. </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 4:
          </span>
          <p>
            Once both braids are done, pull them up and around the top of your
            head. Secure them with bobby pins, tucking in any loose ends.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Step 5:{" "}
          </span>
          <p>
            Gently pull at the braids to create a fuller, more voluminous look.
            Finish with a light-hold hairspray.
          </p>
        </li>
      </ul>
      <ul>
        <p>
          The braided crown is perfect for those who want to stand out with a
          hairstyle that's both elegant and intricate. Pair this style with a
          flowy dress and delicate jewelry for a complete goddess look.
        </p>
      </ul>
    </div>
  );
};

export default GlamorousCrown;
