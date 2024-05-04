import React, { useRef, useState } from "react";
import "./Navbar2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRef = useRef();
  
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(500px)";
  };

  let handleDropDown = () => {
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      console.log("up");
    }
  };
  return (
    <div className="menuContainer">
      <ul className="menuContent">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/service"}>Service</Link>
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop" id="menudrop2">
            <div className="dropItems" id="dropItem2">
              <Link to={"/hair"}>
                <pre> Hair</pre>
              </Link>
            </div>
            <div className="dropItems" id="dropItem2">
              <Link to={"/nails"}>
                <pre> Nails</pre>
              </Link>
            </div>
            <div className="dropItems" id="dropItem2">
              <Link to={"/facial"}>
                <pre> Facials</pre>
              </Link>
            </div>
            <div className="dropItems" id="dropItem2">
              <Link to={"/beauty"}>
                <pre> Beauty essentials</pre>
              </Link>
            </div>
            <div className="dropItems" id="dropItem2">
              <Link to={"/spa"}>
                <pre> Spa</pre>
              </Link>
            </div>
            <div className="dropItems" id="dropItem2">
              <Link to={"/lashes"}>
                <pre> Lashes</pre>
              </Link>
            </div>
          </div>
        </li>
        <li><Link to={"/location"}>Memberships</Link></li>
        <li>Shops</li>
        <li>News</li>
        <li>Contact us</li>
      </ul>
      <ul onClick={showSideBar} className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="hamIcon"></FontAwesomeIcon>
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h1>
            <h1 className="cross">
              <FontAwesomeIcon
                icon={faX} onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h1>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/service"}>
                Services
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/hair"}>Hair</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/nails"}>Nail</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/facial"}>Facials</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/beauty"}>Beauty Essentials</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/spa"}>Spa</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/lashes"}>Lashes</Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul>
            <h1>Membership</h1>
          </ul>
          <ul>
            <h1>Shops</h1>
          </ul>
          <ul>
            <h1>News</h1>
          </ul>
          <ul>
            <h1>Contact Us</h1>
          </ul>
          <ul>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h2></h2>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
