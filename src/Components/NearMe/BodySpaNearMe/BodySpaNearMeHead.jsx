import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const BodySpaNearMeHead = () => {
  return (
    <div className="nearHeadContainer">
      <h2>Body Spa Near Me: Indulge in Ultimate Relaxation at SCENT Salon </h2>
      <p>
        Finding a sanctuary where you can escape the stresses of daily life and
        indulge in luxurious body treatments is essential for holistic
        your ultimate destination. Conveniently located, <Link to={"/"}>SCENT Salon</Link> is renowned
        for its exceptional <Link to={"/spa"} >body spa services</Link>, designed to rejuvenate your mind,
        body, and spirit.
      </p>
    </div>
  );
};

export default BodySpaNearMeHead;
