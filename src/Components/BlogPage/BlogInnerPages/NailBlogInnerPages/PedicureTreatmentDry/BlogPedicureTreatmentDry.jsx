import React from "react";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import PedicureTreatmentDryImg from "./PedicureTreatmentDryImg";
import PedicureTreatmentDryHead from "./PedicureTreatmentDryHead";
import ClassicPedicureTreatment from "./ClassicPedicureTreatment";
import MedicalPedicureTreatment from "./MedicalPedicureTreatment";
import OrganicPedicureTreatment from "./OrganicPedicureTreatment";
import AtHomePedicureTreatment from "./AtHomePedicureTreatment";
import TipsPedicureTreatment from "./TipsPedicureTreatment";
import ChoosingPedicureTreatment from "./ChoosingPedicureTreatment";
import HairServImg from "../../HairBotox/HairServImg";
import classicPedicureBanner from "./../../../../../Images/Blog/Best Pedicure Treatments for Dry and Cracked Heels/Classic Pedicure Treatment for Dry Heels.png";
import organicPedicureBanner from "./../../../../../Images/Blog/Best Pedicure Treatments for Dry and Cracked Heels/Organic Pedicure for Cracked Heels.png";
import medicalPedicureBanner from "./../../../../../Images/Blog/Best Pedicure Treatments for Dry and Cracked Heels/Medical Pedicure for Severely Cracked Heels.png";
import tipsPedicureBanner from "./../../../../../Images/Blog/Best Pedicure Treatments for Dry and Cracked Heels/Tips to Prevent Dry and Cracked Heels.png";
import BlogPost from "../../../BlogPost/BlogPost";
import BlogCategories from "../../../BlogCategories/BlogCategories";

const BlogPedicureTreatmentDry = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Best Pedicure Treatments for Dry and Cracked Heels </title>
        <meta
          name="description"
          content="Best Pedicure Treatments for Dry and Cracked Heels. Fortunately, the right pedicure treatment can transform your feet, leaving them soft, smooth, and rejuvenated."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/best-pedicure-treatments-for-dry-and-cracked-heels"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <PedicureTreatmentDryImg />
          <InnerNavi
            link="/blog"
            service="Blog"
            currService="Pedicure Treatment for Dry and Cracked heel"
          />
          <PedicureTreatmentDryHead />
          <br />
          <HairServImg hairBotoxImg={classicPedicureBanner} />

          <ClassicPedicureTreatment />
          <br />
          <HairServImg hairBotoxImg={organicPedicureBanner} />

          <OrganicPedicureTreatment />
          <br />
          <HairServImg hairBotoxImg={medicalPedicureBanner} />

          <MedicalPedicureTreatment />
          <br />
          <AtHomePedicureTreatment />
          <br />
          <HairServImg hairBotoxImg={tipsPedicureBanner} />
          <TipsPedicureTreatment />
          <br />
          <ChoosingPedicureTreatment />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
};

export default BlogPedicureTreatmentDry;
