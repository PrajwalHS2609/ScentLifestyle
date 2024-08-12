import React from "react";
import "./LastComp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import TSS from "./../../Images/TSS.png";
const LastComp = () => {
  return (
    <div className="lastContainer">
      <div className="lastContent1">
        <div className="lastItem1" id="lastItem1">
          <div className="lastTxt1">
            <h3 >
              <Link to={"/service"}>Services</Link>
            </h3>
          </div>
          <div className="lastTxt2">
            <div className="lastTxt">
              <Link to={"/hair-salon"}>Hair</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/nails-salon"}>Nails</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/facial"}>Facial</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/beauty-essentials"}>Beauty Essentials</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/spa"}>Spa</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/eye-lashes"}>Lashes</Link>
            </div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem2">
          <div className="lastTxt1">
            <h3 >
              <Link to={"/about"}>About us</Link>
            </h3>
          </div>
          <div className="lastTxt2">
            <div className="lastTxt">
              <Link to={"/philosophy"}>Philosophy</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/crew"}>Style Crew</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/myself"}>All About Myself</Link>
            </div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem4">
          <div className="lastTxt1">
            <h3 >Work</h3>
          </div>
          <div className="lastTxt2">
            <div className="lastTxt">
              <Link to={"/salon-membership"}>Membership</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/shop"}>Shops</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/franchise"}>Franchise</Link>
            </div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem5">
          <div className="lastTxt1" id="lastTxtTerms">
            <h3 >
              <Link to={"/terms"}>Terms</Link>{" "}
            </h3>
          </div>
          <div className="lastTxt2">
            <div className="lastTxt">
              <Link to={"/terms"}>Returns & Refund Policy</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/terms"}>Cancellation Policy</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/terms"}>Payment Mode</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/terms"}>Pricing Policy</Link>
            </div>
            <div className="lastTxt">
              <Link to={"/terms"}>Shipping</Link>
            </div>
          </div>
        </div>
        <div className="lastItem1" id="lastItem3">
          <div className="lastTxt1" id="socialTxt">
            <h3 >Social Media</h3>
          </div>
          <div className="socialBlocks">
            <div className="innerSocialBlocks">
              <div className="block">
                <a href="https://www.instagram.com/scentlifestyle/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="lastIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://www.facebook.com/ScentSalonSpas/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="lastIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://in.pinterest.com/scentlifestyle/">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="lastIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="innerSocialBlocks">
              <div className="block">
                <a href="https://twitter.com/scentlifestyle">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="lastIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://www.youtube.com/@scentlifestyle">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="lastIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="block">
                <a href="https://api.whatsapp.com/send?phone=919742232700">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="lastIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastContent2">
        <div className="lastCopy">
          <div className="lastCopy1">
            <p>SCENT © Copyright 2023</p>
          </div>
          <div className="lastCopy1">
            <a href="https://tryseoservices.com/">
              <img src={TSS} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastComp;
