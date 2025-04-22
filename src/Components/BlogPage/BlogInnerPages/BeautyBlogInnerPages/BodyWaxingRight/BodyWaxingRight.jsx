import React from "react";
import { Helmet } from "react-helmet";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import BodyWaxingRightHead from "./BodyWaxingRightHead";
import BodyWaxingRightTips from "./BodyWaxingRightTips";
import BodyWaxingRightWhat from "./BodyWaxingRightWhat";
import BodyWaxingRightFinal from "./BodyWaxingRightFinal";
import BodyWaxingRightImg from "./BodyWaxingRightImg";
import BodyWaxingRightWho from "./BodyWaxingRightWho";
import BodyWaxingRightPros from "./BodyWaxingRightPros";
import BodyWaxingRightCons from "./BodyWaxingRightCons";
import BodyWaxingRightHome from "./BodyWaxingRightHome";
import HairServImg from "../../HairBotox/HairServImg";
import bodyWaxingRightWhat from "./../../../../../Images/Blog/BodyWaxingRight/What Is Body Waxing.png";
import bodyWaxingRightCons from "./../../../../../Images/Blog/BodyWaxingRight/The Cons of Body Waxing.png";
import bodyWaxingRightPros from "./../../../../../Images/Blog/BodyWaxingRight/The Pros of Body Waxing.png";
import bodyWaxingRightTips from "./../../../../../Images/Blog/BodyWaxingRight/Tips for a Successful Waxing Experience.png";
import bodyWaxingRightFinal from "./../../../../../Images/Blog/BodyWaxingRight/Final Thoughts_ Is Body Waxing Right for You.png";
import bodyWaxingRightHouse from "./../../../../../Images/Blog/BodyWaxingRight/Is At-Home Waxing a Good Option.png";

const BodyWaxingRight = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Is Body Waxing Right for You? Pros, Cons & Tips</title>
        <meta
          name="description"
          content="Is Body Waxing Right for You? Pros, Cons & Tips. Considering waxing for a vacation, a special occasion, or simply to maintain smooth skin. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/is-body-waxing-right-for-you-pros-cons-and-tips"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <BodyWaxingRightImg />
          <InnerNavi
            link="/blog"
            service="Blog"
            currService="Beauty Essentials Blog"
          />
          <BodyWaxingRightHead />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingRightWhat} />
          <BodyWaxingRightWhat />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingRightPros} />
          <BodyWaxingRightPros />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingRightCons} />
          <BodyWaxingRightCons />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingRightTips} />
          <BodyWaxingRightTips />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingRightHouse } />
          <BodyWaxingRightHome />
          <br />
          <BodyWaxingRightWho />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingRightFinal} />

          <BodyWaxingRightFinal />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default BodyWaxingRight;
