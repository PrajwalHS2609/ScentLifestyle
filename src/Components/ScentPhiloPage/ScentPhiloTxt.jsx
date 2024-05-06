import React from "react";
import "./ScentPhiloPage.css";
import philoVid from "./../../video/ScentHomeVid.mp4";
const ScentPhiloTxt = () => {
  return (
    <div className="scentPhiloTxtContainer">
      <div className="scentPhiloTxtContent1">
        <p>
          Scent gently draws you into a world of serenity and sensuousness. Here
          your vision of style comes to life, a new YOU – top to toe.
        </p>
        <p>
          Feel indulged in the plush and swanky salons of scent. Sole aim here
          is to make YOU feel and look your best.
        </p>
        <p>
          Music, art, aromas- a visit to scent is a feast to all senses. Decor’,
          services, accessories all evolving a’la mode. come indulge, as we say,
          at scent,
        </p>
\        <h1>
          “haircut <span>just</span> an excuse …”
        </h1>
      </div>
      <div className="scentPhiloTxtContent2">
        <video src={philoVid} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default ScentPhiloTxt;
