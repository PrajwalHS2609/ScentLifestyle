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
    sideBar.style.transform = "translateX(620px)";
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
            <Link to={"/hair-salon"}>
              <div className="dropItems" id="dropItem2">
                <pre> Hair Salon</pre>
              </div>
            </Link>

            <Link to={"/nails-salon"}>
              <div className="dropItems" id="dropItem2">
                <pre> Nails Salon</pre>
              </div>
            </Link>
            <Link to={"/facial"}>
              <div className="dropItems" id="dropItem2">
                <pre> Facials</pre>
              </div>
            </Link>
            <Link to={"/beauty-essentials"}>
              <div className="dropItems" id="dropItem2">
                <pre> Beauty Essentials</pre>
              </div>
            </Link>
            <Link to={"/spa"}>
              <div className="dropItems" id="dropItem2">
                <pre> Spa</pre>
              </div>
            </Link>
            <Link to={"/eye-lashes"}>
              <div className="dropItems" id="dropItem2">
                <pre>Eye Lashes</pre>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link to={"/salon-membership"}>Salon Memberships</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shops</Link>
        </li>
        <li>
          <Link to={"/franchise"}>Franchise</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact us</Link>
        </li>
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
                icon={faX}
                onClick={hideSideBar}
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
                  <Link onClick={hideSideBar} to={"/hair-salon"}>
                    Hair Salon
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/nails-salon"}>
                    Nails Salon
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/facial"}>
                    Facials
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/beauty-essentials"}>
                    Beauty Essentials
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/spa"}>
                    Spa
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/eye-lashes"}>
                    Eye Lashes
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/salon-membership"}>
                Salon Membership
              </Link>
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/shop"}>
                Shops
              </Link>{" "}
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/franchise"}>
                Franchise
              </Link>
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/contact-us"}>
                Contact Us
              </Link>
            </h1>
          </ul>
          <ul>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
