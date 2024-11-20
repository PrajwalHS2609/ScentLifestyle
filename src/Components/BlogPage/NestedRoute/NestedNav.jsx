import React from "react";
import "./Nested.css";
import { NavLink } from "react-router-dom";
const NestedNav = () => {
  return (
    <div className="nestedNav">
      <li className="nestedNav1">
        <NavLink to={"/blog"}>All</NavLink>
      </li>
      <li className="nestedNav2">
        <NavLink to={"/blog/hair-blog"}>Hair</NavLink>
      </li>
      <li className="nestedNav3">
        <NavLink to={"/blog/nail-blog"}>Nail</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/blog/facial-blog"}>Facial</NavLink>
      </li> */}
      <li className="nestedNav4">
        <NavLink to={"/blog/spa-blog"}>Spa</NavLink>
      </li>
      <li className="nestedNav5">
        <NavLink to={"/blog/beauty-essentials-blog"}>Beauty Essentials</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/eye-lashes-blog"}>Eye Lashes</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/blog/bridal-makeup-blog"}>Bridal Makeup</NavLink>
      </li> */}
      <li>
        <NavLink to={"/blog/eyebrow-microblading-blog"}>
          Eyebrow Microblading
        </NavLink>
      </li>
    </div>
  );
};

export default NestedNav;
