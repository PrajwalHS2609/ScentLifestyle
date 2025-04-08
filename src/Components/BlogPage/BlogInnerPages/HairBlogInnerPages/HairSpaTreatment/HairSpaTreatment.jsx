import React from "react";
import { Helmet } from "react-helmet";
import HairSpaTreatmentImg from "./HairSpaTreatmentImg";
import HairSpaTreatmentHead from "./HairSpaTreatmentHead";
import HairServImg from "../../HairBotox/HairServImg";
import hairWhyScentImg from "./../../../../../Images/Blog/Hair_Spa_Treatments/Why SCENT is Your Go-To Destination for Hair Spa Treatments.png";
import hairWhyImg from "./../../../../../Images/Blog/Hair_Spa_Treatments/Why Regular Hair Spa Treatments Are Essential.png";
import hairDiffImg from "./../../../../../Images/Blog/Hair_Spa_Treatments/The difference between Hair Spa for Women and Hair Spa for Men.png";
import hairFinalImg from "./../../../../../Images/Blog/Hair_Spa_Treatments/Final Thoughts.png";
import DeepNourishment from "./DeepNourishment";
import RepairHairDamage from "./RepairHairDamage";
import BoostHairGrowth from "./BoostHairGrowth";
import EliminatesDandruff from "./EliminatesDandruff";
import TamesFrizz from "./TamesFrizz";
import AddsShine from "./AddsShine";
import RelievesStress from "./RelievesStress";
import EnhancesColor from "./EnhancesColor";
import CustomizableHairType from "./CustomizableHairType";
import HairSpaTreatmentDiff from "./HairSpaTreatmentDiff";
import HairSpaTreatmentHow from "./HairSpaTreatmentHow";
import HairSpaTreatmentWhy from "./HairSpaTreatmentWhy";
import HairSpaTreatmentFinal from "./HairSpaTreatmentFinal";
import HairSpaTreatmentWhyScent from "./HairSpaTreatmentWhyScent";
import BlogPost from "../../../BlogPost/BlogPost";
import BlogCategories from "../../../BlogCategories/BlogCategories";

const HairSpaTreatment = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Top Benefits of Regular Hair Spa Treatments </title>
        <meta
          name="description"
          content="Top Benefits of Regular Hair Spa Treatments. From rejuvenating the scalp to improving hair texture, hair spa sessions provide unmatched benefits for everyone."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/top-benefits-of-regular-hair-spa-treatments"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <HairSpaTreatmentImg />
          <HairSpaTreatmentHead />
          <br />
          <HairServImg hairBotoxImg={hairWhyImg} />
          <HairSpaTreatmentWhy />
          <DeepNourishment />
          <RepairHairDamage />
          <BoostHairGrowth />
          <EliminatesDandruff />
          <TamesFrizz />
          <AddsShine />
          <RelievesStress />
          <EnhancesColor />
          <CustomizableHairType />
          <br />
          <HairServImg hairBotoxImg={hairDiffImg} />
          <HairSpaTreatmentDiff />
          <br />
          <HairSpaTreatmentHow />
          <br />
          <HairServImg hairBotoxImg={hairWhyScentImg} />
          <HairSpaTreatmentWhyScent />
          <br />
          <HairServImg hairBotoxImg={hairFinalImg} />
          <HairSpaTreatmentFinal />
          <br />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
};

export default HairSpaTreatment;
