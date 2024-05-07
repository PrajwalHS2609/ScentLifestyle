import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutContainer">
      <img
        src="https://images.unsplash.com/photo-1521490878864-a50e9fcb5718?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="aboutContent">
        <div className="innerAboutContent">
          <div className="aboutContentTxt1">
            <pre>
              <span>Beyond the Salon</span> <br />
              <div className="aboutUnderline"></div>
              Where Beauty Meets Luxury
            </pre>
          </div>
          <div className="aboutContentTxt2">
            <p>
              SCENT is a sanctum where life comes to beauty and beauty to life.
              a makeover at scent will be the crown of your looks. Our salons
              are distinguished for international trends and upscale services.
              Personal care is complimentary with all salon services such as
              Hairstyling, coloring, nail and skin treatments. we understand
              elegance, we make it happen. Pampering yourself is on your mind?
              <span>Spa, pedicure, manicure, massage…name it.</span>
            </p>

            <p>We indulge you.</p>
            <p>
              We have seven salons located in the significant locations in the
              city. Premium services with a touch of hedonism, opulence, and
              luxury are part of the scent experience. Take time out, unwind,
              put your feet up! Experience a confident boosting makeover. Bring
              the oomph back into your persona. Come out like the metaphorical
              butterfly looking your best. As it is said – we bring life to
              beauty and beauty to life. with scent we let the world know who
              you are!
            </p>
          </div>
          <div className="aboutContentTxt3">
            <pre>
              <Link to={"/about"}> MORE ABOUT US </Link>
            </pre>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="aboutIcon"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
