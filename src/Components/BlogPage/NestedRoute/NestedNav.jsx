import React from "react";
import "./Nested.css";
import {NavLink} from "react-router-dom";
const NestedNav = () => {
  return (
    <div className="nestedNav">
      <li className="nestedNav1">
        <NavLink to={"/blog"}>All</NavLink>
      </li>
      <li className="nestedNav2">
        <NavLink to={"/blog/hair"}>Hair</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/nail"}>Nail</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/facial"}>Facial</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/spa"}>Spa</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/beauty-essential"}>Beauty Essentials</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/eye-lashes"}>Eye Lashes</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/bridal-makeup"}>Bridal Makeup</NavLink>
      </li>
      <li>
        <NavLink to={"/blog/hair"}>Eyebrow Microblading</NavLink>
      </li>
    </div>
  );
};

export default NestedNav;
