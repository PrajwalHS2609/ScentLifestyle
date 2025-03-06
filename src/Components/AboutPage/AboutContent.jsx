import React from "react";
import "./About.css";
import sahakaranagar from "./../../Images/sahakaranagar.jpg";
// import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="aboutContent-container">
      <div className="aboutOwner-content">
        <h2>
          about <span>us</span>
        </h2>
        <p>
          Scent has grown into a symbol of sophistication, boasting 5 thriving
          locations and an ambitious vision to expand to 300 stores in just a
          few years. This isn't just about numbers; it’s about creating
          lifestyle salon spaces where the the present and future generations
          want to belong to
        </p>
        <p>
          With a fantastic management team , experienced in handling premium
          salons , with great technical knowledge scent is the brand that is
          poised to grow
        </p>
        {/* <Link to={"/contact-us"}>
          <button>Book Now</button>
        </Link> */}
      </div>
      <img src={sahakaranagar} alt="sahakaranagar" />
    </div>
  );
};

export default AboutContent;
