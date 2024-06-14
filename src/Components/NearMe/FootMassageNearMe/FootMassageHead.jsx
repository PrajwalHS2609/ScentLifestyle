import React from "react";
import "../NearMe.css";
import { Link } from "react-router-dom";

const FootMassageHead = () => {
  return (
    <div className="nearHeadContainer">
      <h2>Foot Massage Near Me: Relax and Rejuvenate at SCENT Salon </h2>
      <p>
        In the hustle and bustle of everyday life, finding moments of relaxation
        and rejuvenation is crucial for maintaining overall well-being. If
        you're searching for a{" "}
        <Link to="/foot-massage-near-me">"foot massage near me,"</Link> look no
        further than <Link to={"/"}>SCENT Salon</Link>. Situated conveniently
        and renowned for its exceptional spa services,
        <Link to="/spa">
          SCENT Salon offers a variety of foot massage treatments ,
         </Link>
        designed to soothe your tired feet, alleviate stress, and promote
        relaxation.
      </p>
    </div>
  );
};

export default FootMassageHead;
