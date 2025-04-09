import React from "react";
import { Helmet } from "react-helmet";
import PerfectPreDateHead from "./PerfectPreDateHead";
import PerfectPreDateStart from "./PerfectPreDateStart";
import PerfectPreDateLuxury from "./PerfectPreDateLuxury";
import PerfectPreDateRadiant from "./PerfectPreDateRadiant";
import PerfectPreDateNailCare from "./PerfectPreDateNailCare";
import PerfectPreDateMakeup from "./PerfectPreDateMakeup";
import PerfectPreDatePerfect from "./PerfectPreDatePerfect";
import PerfectPreDateFinal from "./PerfectPreDateFinal";
import HairServImg from "../../HairBotox/HairServImg";
import perfectPreDateMakeup from "./../../../../../Images/Blog/PerfectPreDate/Makeup Magic_ Enhance Your Natural Beauty.png";
import perfectPreDateLuxury from "./../../../../../Images/Blog/PerfectPreDate/A Luxurious Hair Care Routine.png";
import perfectPreDateNailCare from "./../../../../../Images/Blog/PerfectPreDate/Nail Care for the Finishing Touch.png";
import perfectPreDateStart from "./../../../../../Images/Blog/PerfectPreDate/Start with a Relaxing Skincare Routine.png";
import PerfectPreDateImg from "./PerfectPreDateImg";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const PerfectPreDate = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          The Perfect Pre-Date Beauty Routine for a Magical Valentine's Day{" "}
        </title>
        <meta
          name="description"
          content="The Perfect Pre-Date Beauty Routine for a Magical Valentine's Day is the perfect occasion to celebrate love, whether you’re planning a romantic dinner, a fun outing, or a cozy night in with your special someone."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/the-perfect-pre-date-beauty-routine-for-a-magical-valentines-day"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <PerfectPreDateImg />
          <PerfectPreDateHead />
          <br />
          <HairServImg hairBotoxImg={perfectPreDateStart} />
          <PerfectPreDateStart />
          <br />
          <HairServImg hairBotoxImg={perfectPreDateLuxury} />
          <PerfectPreDateLuxury />
          <br />
          <PerfectPreDateRadiant />
          <br />
          <HairServImg hairBotoxImg={perfectPreDateNailCare} />
          <PerfectPreDateNailCare />
          <br />
          <HairServImg hairBotoxImg={perfectPreDateMakeup} />
          <PerfectPreDateMakeup />
          <br />
          <PerfectPreDatePerfect />
          <br />
          <PerfectPreDateFinal />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>

        </div>
      </div>
    </div>
  );
};

export default PerfectPreDate;
