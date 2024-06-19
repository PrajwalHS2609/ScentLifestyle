import React, { useRef, useState } from "react";
import "./HomeRead.css";
import { Link } from "react-router-dom";

const HomeRead = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let open = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "block";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };

  return (
    <div className="homeReadContainer">
      <div className="homeReadHeadContainer">
        <button>
          <h6 className="openBut" onClick={open}>
            Read More
          </h6>
          <header>
            <h1>Scent Salon In Bangalore</h1>
          </header>
        </button>
      </div>
      <div ref={switchRef} className="homeReadDisplayContainer">
        <ul>
          <li>
            Welcome to <Link to={"/"}>SCENT Salon Spa</Link>, your premier
            destination for beauty and relaxation in Bangalore! With six
            luxurious locations across the city at ,{" "}
            <Link to={"salon-in-jpnagar"}>JP Nagar</Link>,{" "}
            <Link to={"/salon-in-lavelle-road"}>Lavelle Road</Link>,
            <Link to={"/salon-in-sahakar-nagar"}> Sahakar Nagar</Link>,{" "}
            <Link to={"/salon-in-jakkur"}>Jakkur</Link>, and{" "}
            <Link to={"/salon-in-uptown-whitefield"}>Whitefield</Link>, we bring
            you the ultimate salon and spa experience.
          </li>
          <li>
            At SCENT, we offer a comprehensive range of services to cater to all
            your beauty needs. From{" "}
            <Link to={"/hair-salon"}>expert hair styling</Link> and coloring to
            <Link to={"/spa"}>luxurious spa treatments</Link>,{" "}
            <Link to={"/nails-salon"}>flawless nail services</Link>,{" "}
            <Link to={"/hair-treatments"}>essential beauty treatments</Link>,
            and <Link to={"/eye-lashes"}>stunning eyelash enhancements</Link>,
            we provide everything you need to look and feel your best.
          </li>
          <li>
            Our team of highly skilled professionals is dedicated to providing
            you with personalized attention and exceptional service. We use only
            the finest products and state-of-the-art techniques to ensure that
            you leave our salons feeling relaxed, rejuvenated, and beautiful
          </li>
          <li>
            Experience the luxury of<Link to={"/"}> SCENT Salon Spa</Link> at
            any of our six convenient locations. Let us pamper you from head to
            toe and help you achieve your desired look with our unmatched
            expertise and hospitality. Visit us today and discover the ultimate
            beauty destination in Bangalore!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeRead;
