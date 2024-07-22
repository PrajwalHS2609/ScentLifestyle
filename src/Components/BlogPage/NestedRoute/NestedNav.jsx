import React from "react";
import "./Nested.css";
import { Link } from "react-router-dom";
const NestedNav = () => {
  return (
    <div className="nestedNav">
      <li>
        <Link to={"/blog"}>All</Link>
      </li>
      <li>
        <Link to={"/blog/hair"}>Hair</Link>
      </li>
      <li>
        <Link to={"/blog/nail"}>Nail</Link>
      </li>
      <li>
        <Link to={"/blog/facial"}>Facial</Link>
      </li>
      <li>
        <Link to={"/blog/spa"}>Spa</Link>
      </li>
      <li>
        <Link to={"/blog/beauty-essential"}>Beauty Essentials</Link>
      </li>
      <li>
        <Link to={"/blog/eye-lashes"}>Eye Lashes</Link>
      </li>
      <li>
        <Link to={"/blog/bridal-makeup"}>Bridal Makeup</Link>
      </li>
      <li>
        <Link to={"/blog/hair"}>Eyebrow Microblading</Link>
      </li>
    </div>
  );
};

export default NestedNav;
