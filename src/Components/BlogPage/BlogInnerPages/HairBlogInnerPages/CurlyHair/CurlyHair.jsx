import React from "react";
import { Helmet } from "react-helmet";
import WhatsApp from "../../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../../LastComp/LastComp";
import CurlyHairHead from "./CurlyHairHead";
import CurlyHairUnderstand from "./CurlyHairUnderstand";
import CurlyHairAssess from "./CurlyHairAssess";
import CurlyHairNatural from "./CurlyHairNatural";
import CurlyHairTypes from "./CurlyHairTypes";
import CurlyHairUpkeep from "./CurlyHairUpkeep";
import CurlyHairActive from "./CurlyHairActive";
import CurlyHairProsCons from "./CurlyHairProsCons";
import CurlyHairConsult from "./CurlyHairConsult";
import HairServImg from "../../HairBotox/HairServImg";

const CurlyHair = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Is Curly Hair the Right Style for You? Here’s How to Find Out{" "}
        </title>
        <meta
          name="description"
          content="Is Curly Hair the Right Style for You? Here’s How to Find Out "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/is-curly-hair-the-right-style-for-you-heres-how-to-find-out"
        />
      </Helmet>
      <div className="hairTrimContent">
        <CurlyHairHead />
        <br />
        {/* <HairServImg hairBotoxImg={glamorousPony} /> */}
        <CurlyHairUnderstand />
        <br />
        {/* <HairServImg hairBotoxImg={glamorousPony} /> */}
        <CurlyHairAssess />
        <br />
        <CurlyHairNatural />
        <br />
        <CurlyHairTypes />
        <br />
        <CurlyHairUpkeep />
        <br />
        <CurlyHairActive />
        <br />
        <CurlyHairProsCons />
        <br />
        <CurlyHairConsult />
      </div>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default CurlyHair;
