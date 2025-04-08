import React from "react";
import point from "./../../../../../Images/point.png";

const LashesExtensionChoosing = () => {
  return (
    <div className="blogBenefits-content">
      <h3>Common Questions About Eyelash Extensions</h3>
      <p>
        Not all eyelash extensions are created equal. To achieve the perfect
        look for your special occasion, consider these factors:
      </p>
      <li>
        <h6>1. Eye Shape</h6>
        <p>
          Your eye shape plays a significant role in determining the most
          flattering lash style:
        </p>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />
              Almond Eyes:{" "}
            </span>
            <p>
              Almost any style works! Cat-eye or doll-eye styles are popular
              choices.
            </p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Round Eyes:{" "}
            </span>
            <p>
              Opt for styles that elongate the eyes, like a wispy or cat-eye
              look.
            </p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Hooded Eyes:{" "}
            </span>
            <p> Focus on length and curl to open up the eyes.</p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Monolid Eyes:{" "}
            </span>
            <p>Volume lashes with a dramatic curl can enhance definition.</p>
          </li>
        </ul>
      </li>
      <li>
        <h6>2. Event Type</h6>
        <p>The nature of the event will influence your lash choice:</p>
        <ul>
          <li>
            <span>
              <img src={point} alt="point" />
              Weddings:{" "}
            </span>
            <p>Natural or hybrid lashes for an elegant, timeless look.</p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Parties and Galas:{" "}
            </span>
            <p> Bold, volume lashes for maximum impact.</p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Corporate Events:{" "}
            </span>
            <p> Classic, subtle styles for a polished appearance.</p>
          </li>
          <li>
            <span>
              <img src={point} alt="point" />
              Monolid Eyes:{" "}
            </span>
            <p>Volume lashes with a dramatic curl can enhance definition.</p>
          </li>
        </ul>
      </li>
      <li>
        <h6>3. Personal Style</h6>
        <p>
          Your personality and comfort level with bold makeup should also guide
          your decision. If you prefer understated elegance, go for classic
          extensions. If you’re all about making a statement, volume lashes will
          be your best friend.
        </p>
      </li>
      <br />
    </div>
  );
};

export default LashesExtensionChoosing;
