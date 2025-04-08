import React from "react";
import HairServImg from "../../HairBotox/HairServImg";
import { Helmet } from "react-helmet";
import WhyEyeBrowHead from "./WhyEyeBrowHead";
import WhyEyeBrowFrame from "./WhyEyeBrowFrame";
import WhyEyeBrowImg from "./WhyEyeBrowImg";
import WhyEyeBrowBoost from "./WhyEyeBrowBoost";
import WhyEyeBrowDefine from "./WhyEyeBrowDefine";
import WhyEyeBrowRoutine from "./WhyEyeBrowRoutine";
import WhyEyeBrowSolution from "./WhyEyeBrowSolution";
import WhyEyeBrowImp from "./WhyEyeBrowImp";
import WhyEyeBrowYouthful from "./WhyEyeBrowYouthful";
import eyeBrowFrame from "./../../../../../Images/Blog/Why_Eyebrow_Shaping/Eyebrows Frame Your Face.png";
import eyeBrowBoost from "./../../../../../Images/Blog/Why_Eyebrow_Shaping/Boosts Confidence and Self-Esteem.png";
import eyeBrowDefine from "./../../../../../Images/Blog/Why_Eyebrow_Shaping/Defines Your Personal Style.png";
import eyeBrowRoutine from "./../../../../../Images/Blog/Why_Eyebrow_Shaping/It Complements Your Makeup Routine.png";
import eyeBrowYouthful from "./../../../../../Images/Blog/Why_Eyebrow_Shaping/Keeps Your Face Looking Youthful.png";
import BlogPost from "../../../BlogPost/BlogPost";
import BlogCategories from "../../../BlogCategories/BlogCategories";

const WhyEyeBrowPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Why Eyebrow Shaping is the Secret to a Polished Look?</title>
        <meta
          name="description"
          content="When it comes to beauty and grooming, eyebrows often take center stage. They frame your face, enhance your expressions, and even have the power to transform your overall appearance. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/why-eyebrow-shaping-is-the-secret-to-a-polished-look"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <WhyEyeBrowImg />
          <WhyEyeBrowHead />
          <HairServImg hairBotoxImg={eyeBrowFrame} />
          <WhyEyeBrowFrame />
          <HairServImg hairBotoxImg={eyeBrowBoost} />
          <WhyEyeBrowBoost />
          <HairServImg hairBotoxImg={eyeBrowDefine} />
          <WhyEyeBrowDefine />
          <HairServImg hairBotoxImg={eyeBrowRoutine} />
          <WhyEyeBrowRoutine />
          <HairServImg hairBotoxImg={eyeBrowYouthful} />
          <WhyEyeBrowSolution />
          <WhyEyeBrowImp />
          <WhyEyeBrowYouthful />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
};

export default WhyEyeBrowPage;
