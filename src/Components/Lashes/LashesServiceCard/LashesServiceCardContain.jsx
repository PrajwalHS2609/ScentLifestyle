import React from "react";
import "./LashesServiceCard.css";
import ServiceCards from "../../MainServicePages/ServiceCards/ServiceCards";
const LashesServiceCardContain = () => {
  return (
    <div className="lashesCardContainer">
      <ServiceCards
        heading="Eye Lash Extensions"
        para="Enhance the volume of your lashes with our corner set eyelash extensions, designed to add thickness and depth to your natural lashes."
        goto="Eye Lash Extensions"
        img="https://img.freepik.com/free-photo/human-female-eye-false-lashes-liner_186202-5177.jpg?t=st=1714718360~exp=1714721960~hmac=6261650e889880a63069e2337825f7194ae7c2eaf30bfbf969a239104a79ad29&w=740"
      />
    </div>
  );
};

export default LashesServiceCardContain;
