import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekShag = () => {
  return (
    <div className="blogWhat-content">
      <h5>The Modern Shag: Retro Meets Contemporary</h5>
      <p>
        The shag haircut, popularized in the 1970s, has made a major comeback in
        recent years. This layered haircut is known for its choppy ends and
        tousled texture, giving it a cool, effortless vibe. The modern shag is
        perfect for women who want a mix of retro and contemporary styles.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Classic Shag:{" "}
          </span>
          <p>
            The classic shag is a great option for women with medium to thick
            hair. Its layers add volume and movement, making it a perfect choice
            for those looking to add some edge to their look.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Curly Shag:{" "}
          </span>
          <p>
            For women with natural curls, the curly shag is a fantastic choice.
            It enhances the natural texture of the hair while providing
            structure and definition.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekShag;
