import React from "react";
import { Helmet } from "react-helmet";
import TenReasonHaircutImg from "./TenReasonHaircutImg";
import TenReasonHaircutHead from "./TenReasonHaircutHead";
import TenReasonHaircutHealth from "./TenReasonHaircutHealth";
import TenReasonHaircutSplitEnd from "./TenReasonHaircutSplitEnd";
import TenReasonHaircutEnchance from "./TenReasonHaircutEnchance";
import TenReasonHaircutBoost from "./TenReasonHaircutBoost";
import TenReasonHaircutManageable from "./TenReasonHaircutManageable";
import TenReasonHaircutPromote from "./TenReasonHaircutPromote";
import TenReasonHaircutStayOnTop from "./TenReasonHaircutStayOnTop";
import TenReasonHaircutAddress from "./TenReasonHaircutAddress";
import TenReasonHaircutPrioritize from "./TenReasonHaircutPrioritize";
import TenReasonHaircutHow from "./TenReasonHaircutHow";
import TenReasonHaircutChoose from "./TenReasonHaircutChoose";
import tenReasonHaircutchoose from "./../../../../../Images/Blog/10_Reason_HairCut/Choosing the Right Salon.png";
import tenReasonHaircutHow from "./../../../../../Images/Blog/10_Reason_HairCut/How Often Should You Get a Haircut.png";
import HairServImg from "../../HairBotox/HairServImg";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const TenReasonHaircut = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>10 Reasons to Schedule Regular Haircuts </title>
        <meta
          name="description"
          content="10 Reasons to Schedule Regular Haircuts - it’s a way to express your personality, enhance your confidence, and keep your hair healthy"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/10-reasons-to-schedule-regular-haircuts  "
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <TenReasonHaircutImg />
          <TenReasonHaircutHead />
          <br />
          <TenReasonHaircutHealth />
          <br />
          <TenReasonHaircutSplitEnd />
          <br />
          <TenReasonHaircutEnchance />
          <br />
          <TenReasonHaircutBoost />
          <br />
          <TenReasonHaircutManageable />
          <br />
          <TenReasonHaircutPromote />
          <br />
          <TenReasonHaircutStayOnTop />
          <br />
          <TenReasonHaircutAddress />
          <br />
          <TenReasonHaircutPrioritize />
          <br />
          <HairServImg hairBotoxImg={tenReasonHaircutHow} />
          <TenReasonHaircutHow />
          <br />
          <HairServImg hairBotoxImg={tenReasonHaircutchoose} />
          <TenReasonHaircutChoose />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>

        </div>
      </div>
    </div>
  );
};

export default TenReasonHaircut;
