import React from "react";
import "./BeardStyle.css";
import BeardCard from "./BeardCard";
const BeardStyleCard = () => {
  return (
    <div className="beardStyleCardWrapper">
      <BeardCard
        head="Mustache Colour"
        para="Define your facial aesthetic with a moustache colour treatment, that adds depth and character to your facial hair."
        price="200"
      />
      <BeardCard
        head="Beard Colouring"
        para="Beard colouring enhances your beard with a natural-looking hue that enhances its texture and appearance"
        price="500"
      />
      <BeardCard
        head="Beard Shaping"
        para="Sculpt and refine your beard's contours to complement your facial structure, emphasising your best features for a polished look."
        price="349"
      />
      <BeardCard
        head="Moisturising Beard Shave"
        para="Experience a nourishing grooming ritual that does more than a shave- offering deep hydration and leaving you feeling soft and smooth."
        price="449"
      />
      <BeardCard
        head="Signature Beard Styling"
        para="Define your neckline, shape your sideburns and remove any hair that appears on your cheeks above your beard line."
        price="500"
      />
      <BeardCard
        head="Nourishing Beard Spa"
        para="Treat yourself to a luxurious beard spa experience where you will benefit from nourishing treatments that promote hair health and soothe the skin."
        price="699"
      />
    </div>
  );
};

export default BeardStyleCard;
