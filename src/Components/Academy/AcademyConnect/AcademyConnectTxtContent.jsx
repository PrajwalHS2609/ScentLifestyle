import React from "react";
import { Link } from "react-router-dom";
const AcademyConnectTxtContent = () => {
  return (
    <>
      <div className="academyConnect-content2">
        <h2>SCENT</h2>
        <h3> ACADEMY</h3>
      </div>
      <div className="academyConnect-content2">
        <p>
          Embrace the luxury, sophistication, and elite training that comes with
          joining us. Elevate your career with our distinguished curriculum and
          master the cutting-edge techniques pioneered by the legendary Sassoon
          Connect Academy. Become an exceptional hairstylist set apart in the
          industry.
        </p>
        <b>
          Enroll at Scent Academy today and transform your passion into a
          profession.
        </b>
        <Link to={"/contact-us"}>
          <button>BOOK NOW</button>
        </Link>
      </div>
    </>
  );
};

export default AcademyConnectTxtContent;
