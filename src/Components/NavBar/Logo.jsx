import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import scentLogo from "./../../Images/SCENT Logo.png";
const Logo = () => {
  return (
    <div>
      <div className="logo">
        <Link to={"/"}>
          <img src={scentLogo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
