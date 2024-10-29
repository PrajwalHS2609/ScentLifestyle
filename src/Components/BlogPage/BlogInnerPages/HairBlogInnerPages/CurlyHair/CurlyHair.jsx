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
import curlyHairUnderstand from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Understanding the Appeal of Curly Hair.png";
import curlyHairAssess from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Assess Your Face Shape.png";
import curlyHairNatural from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Consider Your Natural Hair Texture.png";
import curlyHairTypes from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Explore Different Types of Curly Hairstyles.png";
import curlyHairUpkeep from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Are You Ready for the Upkeep.png";
import curlyHairActive from "./../../../../../Images/Blog/Is Curly Hair the Right Style/How Active Is Your Lifestyle.png";
import curlyHairProsCons from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Pros and Cons of Curly Hair.png";
import curlyHairConsult from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Consulting with a Professional Stylist.png";
import curlyHairTemporary from "./../../../../../Images/Blog/Is Curly Hair the Right Style/Try Temporary Curly Styles First.png";
import curlyHairVerdict from "./../../../../../Images/Blog/Is Curly Hair the Right Style/The Verdict_ Is Curly Hair for You.png";
import CurlyHairVerdict from "./CurlyHairVerdict";
import CurlyHairTemporary from "./CurlyHairTemporary";
import CurlyHairImg from "./CurlyHairImg";

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
        <CurlyHairImg />
        <CurlyHairHead />
        <br />
        <HairServImg hairBotoxImg={curlyHairUnderstand} />
        <CurlyHairUnderstand />
        <br />
        <HairServImg hairBotoxImg={curlyHairAssess} />
        <CurlyHairAssess />
        <br />
        <HairServImg hairBotoxImg={curlyHairNatural} />
        <CurlyHairNatural />
        <br />
        <HairServImg hairBotoxImg={curlyHairTypes} />
        <CurlyHairTypes />
        <br />
        <HairServImg hairBotoxImg={curlyHairUpkeep} />
        <CurlyHairUpkeep />
        <br />
        <HairServImg hairBotoxImg={curlyHairActive} />
        <CurlyHairActive />
        <br />
        <HairServImg hairBotoxImg={curlyHairTemporary} />
        <CurlyHairTemporary />
        <br />
        <HairServImg hairBotoxImg={curlyHairProsCons} />
        <CurlyHairProsCons />
        <br />
        <HairServImg hairBotoxImg={curlyHairConsult} />
        <CurlyHairConsult />
        <br />
        <HairServImg hairBotoxImg={curlyHairVerdict} />
        <CurlyHairVerdict />
      </div>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default CurlyHair;
