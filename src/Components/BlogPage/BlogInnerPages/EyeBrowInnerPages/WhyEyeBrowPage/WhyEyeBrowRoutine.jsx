import React from "react";
import point from "./../../../../../Images/point.png";

const WhyEyeBrowRoutine = () => {
  return (
    <div className="blogWhat-content">
      <h5>4. It Complements Your Makeup Routine</h5>
      <p>
        One of the main reasons{" "}
        <a href="https://scentlifestyle.com/why-eyebrow-shaping-is-the-secret-to-a-polished-look">
          eyebrow shaping is the secret to a polished look
        </a>{" "}
        is how it complements your makeup routine. Perfectly shaped brows
        provide a solid foundation for the rest of your makeup, making
        everything from eyeshadow to eyeliner look more cohesive.
      </p>
      <ul>
        <h4>How Shaped Eyebrows Enhance Makeup:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Better Definition for Eye Makeup:{" "}
          </span>
          <p>
            Shaped brows create a clean canvas for eye makeup, allowing colors
            and liners to pop and be more defined.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Enhances Facial Contouring:{" "}
          </span>
          <p>
            Brows can act as a guide when contouring your face, helping you
            define your cheekbones and jawline more precisely.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Natural Makeup Looks Better:{" "}
          </span>
          <p>
            Even on no-makeup days, having well-groomed brows makes your face
            look more put-together, giving you an effortless polished look
            without much effort.
          </p>
        </li>
      </ul>
      <p>
        Whether you’re going for a full glam makeup look or a simple, natural
        face, shaped brows help bring everything together seamlessly.
      </p>
      <br />
    </div>
  );
};

export default WhyEyeBrowRoutine;
