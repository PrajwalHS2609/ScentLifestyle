import React from "react";
import "./LastComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter,
  faGoogle,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const LastComp = () => {
  return (
    <div className="lastContainer">
      <div className="lastContent1">
        <div className="lastItem1" id="lastItem1">
          <div className="lastTxt1">
            <h1>Services</h1>
          </div>
          <div className="lastTxt2">
            <div className="lastTxt">
              <Link to={"/hair"}>Hair</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/nails"}>Nails</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/facial"}>Facial</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/beauty"}>Beauty Essentials</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/spa"}>Spa</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/Lashes"}>Lashes</Link>
            </div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem2">
          <div className="lastTxt1">
            <h1>About us</h1>
          </div>
          <div className="lastTxt2">
            <div className="lastTxt">Philosophy</div>
            <div className="lastTxt">Style Crew</div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem4">
          <div className="lastTxt1">
            <h1>Work</h1>
          </div>
          <div className="lastTxt2">
            <div className="lastTxt">Lookbook</div>
            <div className="lastTxt">Media</div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem5">
          <div className="lastTxt1" id="lastTxtTerms">
           <Link to={"/terms"}><h1>Terms</h1></Link> 
          </div>
          <div className="lastTxt2">
            <div className="lastTxt"><Link to={"/terms"}>Returns & Refund Policy</Link></div>
            <div className="lastTxt"><Link to={"/terms"}>Cancellation Policy</Link></div>
            <div className="lastTxt"><Link to={"/terms"}>Payment Mode</Link></div>
            <div className="lastTxt"><Link to={"/terms"}>Pricing Policy</Link></div>
            <div className="lastTxt"><Link to={"/terms"}>Shipping</Link></div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem3">
          <div className="lastTxt1" id="socialTxt">
            <h1>Social Media</h1>
          </div>
          <div className="socialBlocks">
            <div className="innerSocialBlocks">
              <div className="block">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lastIcon"
                ></FontAwesomeIcon>
              </div>
              <div className="block">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="lastIcon"
                ></FontAwesomeIcon>
              </div>
              <div className="block">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="lastIcon"
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="innerSocialBlocks">
            <div className="block">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="lastIcon"
                ></FontAwesomeIcon>
              </div>
              <div className="block">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="lastIcon"
                ></FontAwesomeIcon>
              </div>
              <div className="block">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="lastIcon"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastContent2">
        <div className="lastCopy">
          <div className="lastCopy1">
            <p>BOUNCE © Copyright 2019</p>
          </div>
          <div className="lastCopy1">
            <img
              src="https://www.bouncehere.com/wp-content/themes/bounce/images/spalon.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastComp;
