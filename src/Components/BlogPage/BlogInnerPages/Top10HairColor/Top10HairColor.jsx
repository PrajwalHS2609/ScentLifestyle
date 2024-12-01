import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Top10HairColorHead from "./Top10HairColorHead";
import Top10HairColorImg from "./Top10HairColorImg";
import NavBg from "../../../NavBg/NavBg";
import CinnamonSpice from "./CinnamonSpice";
import CoolPlatinum from "./CoolPlatinum";
import SoftCaramel from "./SoftCaramel";
import RichChocolate from "./RichChocolate";
import PeachyRose from "./PeachyRose";
import AshBrown from "./AshBrown";
import FieryRed from "./FieryRed";
import GoldenHoney from "./GoldenHoney";
import SmokeyLilac from "./SmokeyLilac";
import DeepBurgundy from "./DeepBurgundy";
import Top10Choosing from "./Top10Choosing";
import Top10How from "./Top10How";

const Top10HairColor = () => {
  return (
    <div className="hairTrim">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Does Trimming Hair Make It Grow Faster?</title>
        <meta
          name="description"
          content="Does Trimming Hair Make It Grow Faster? Trimming your hair regularly is key to maintaining long, healthy locks. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair/does-trimming-hair-make-it-grow-faster"
        />
      </Helmet>
      <NavBg />
      <div className="hairTrimContent">
        <Top10HairColorImg />
        <InnerNavi link="/blog" service="Blog" currService="Hair Blog" />
        <Top10HairColorHead />
        <CinnamonSpice/>
        <CoolPlatinum/>
        <SoftCaramel/>
        <RichChocolate/>
        <PeachyRose/>
        <AshBrown/>
        <FieryRed/>
        <GoldenHoney/>
        <SmokeyLilac/>
        <DeepBurgundy/>
        <Top10Choosing/>
        <Top10How/>
      </div>
            
    </div>
  );
};

export default Top10HairColor;
