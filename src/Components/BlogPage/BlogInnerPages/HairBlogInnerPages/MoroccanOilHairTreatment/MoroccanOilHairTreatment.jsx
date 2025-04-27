import React from "react";
import { Helmet } from "react-helmet";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";
import HairServImg from "../../HairBotox/HairServImg";
import MoroccanOilHairTreatmentImg from "./MoroccanOilHairTreatmentImg";
import MoroccanOilHairTreatmentHead from "./MoroccanOilHairTreatmentHead";
import MoroccanOilHairTreatmentContent1 from "./MoroccanOilHairTreatmentContent1";
import MoroccanOilHairTreatmentContent2 from "./MoroccanOilHairTreatmentContent2";
import moroccanOil2 from "./../../../../../Images/Blog/moroccan_oil/3rd Phara.png";
import moroccanOil3 from "./../../../../../Images/Blog/moroccan_oil/6 Para.png";

const MoroccanOilHairTreatment = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>How Moroccanoil Hair Treatment Can Rescue Damaged Hair? </title>
        <meta
          name="description"
          content="How Moroccanoil Hair Treatment Can Rescue Damaged Hair? Offers a transformative answer that nourishes, protects, and revives your locks from within. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/how-moroccanoil-hair-treatment-can-rescue-damaged-hair"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <MoroccanOilHairTreatmentImg />
          <MoroccanOilHairTreatmentHead />
          <HairServImg hairBotoxImg={moroccanOil2} />
          <MoroccanOilHairTreatmentContent1 />
          <HairServImg hairBotoxImg={moroccanOil3} />
          <MoroccanOilHairTreatmentContent2 />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default MoroccanOilHairTreatment;
