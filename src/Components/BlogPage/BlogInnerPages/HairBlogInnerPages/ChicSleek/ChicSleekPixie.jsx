import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekPixie = () => {
  return (
    <div className="blogWhat-content">
      <h5>Bold and Beautiful: The Pixie Cut</h5>
      <p>
        For women who want to make a bold statement, the pixie cut is the
        ultimate choice. This short, edgy haircut is all about confidence and
        individuality. The pixie cut can be styled in numerous ways, from sleek
        and polished to tousled and textured, making it suitable for a variety
        of looks.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="checked" />
            Sleek Pixie:
          </span>
          <p>
            A sleek pixie cut with side-swept bangs offers a chic, feminine look
            that’s both sophisticated and playful. It’s perfect for women who
            want a low-maintenance yet stylish haircut.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="checked" />
            Textured Pixie:{" "}
          </span>
          <p>
            For a more edgy appearance, go for a textured pixie with choppy
            layers. This style adds volume and movement to the hair, making it
            ideal for women with thick hair.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekPixie;
