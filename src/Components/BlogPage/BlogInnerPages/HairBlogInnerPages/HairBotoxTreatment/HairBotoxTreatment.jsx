import React from "react";
import WhatsApp from "../../../../HomePage/WhatsApp/WhatsApp";
import { Helmet } from "react-helmet";
import HairBotoxTreatmentImg from "./HairBotoxTreatmentImg";
import HairBotoxTreatmentHead from "./HairBotoxTreatmentHead";
import HairBotoxTreatmentWhy from "./HairBotoxTreatmentWhy";
import HairServImg from "../../HairBotox/HairServImg";
import HairBotoxTreatmentProcess from "./HairBotoxTreatmentProcess";
import HairBotoxTreatmentBenefits from "./HairBotoxTreatmentBenefits";
import HairBotoxTreatmentCommon from "./HairBotoxTreatmentCommon";
import HairBotoxTreatmentLong from "./HairBotoxTreatmentLong";
import HairBotoxTreatmentXp from "./HairBotoxTreatmentXp/HairBotoxTreatmentXp";
import HairBotoxTreatmentVerses from "./HairBotoxTreatmentVerses";
import HairBotoxTreatmentCost from "./HairBotoxTreatmentCost";
import HairBotoxTreatmentMaintain from "./HairBotoxTreatmentMaintain";
import HairBotoxTreatmentFaq from "./HairBotoxTreatmentFaq";
import HairBotoxTreatmentTakeway from "./HairBotoxTreatmentTakeway";
import HairBotoxTreatmentScience from './HairBotoxTreatmentScience';
import hairBotoxScienceImg from "./../../../../../Images/Blog/Hair_Botox_Treatment/The Science Behind Hair Botox.png";
import hairBotoxWhyImg from "./../../../../../Images/Blog/Hair_Botox_Treatment/Why is Hair Botox a Good Choice.png";

const HairBotoxTreatment = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Hair Botox Treatment: All You Need to Know for Smooth, Healthy Hair
        </title>
        <meta
          name="description"
          content="Hair Botox Treatment: All You Need to Know for Smooth, Healthy Hair. If you're looking to rejuvenate your hair, tame frizz, and bring life back to your locks. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatment-all-you-need-to-know"
        />
      </Helmet>
      <div className="hairTrimContent">
        <HairBotoxTreatmentImg />
        <HairBotoxTreatmentHead />
        <br />
        <HairServImg hairBotoxImg={hairBotoxScienceImg} />
        <HairBotoxTreatmentScience />
        <br />
        <HairServImg hairBotoxImg={hairBotoxWhyImg} />
        <HairBotoxTreatmentWhy />
        <br />
        <HairBotoxTreatmentProcess />
        <br />
        <HairBotoxTreatmentBenefits />
        <br />
        <HairBotoxTreatmentCommon />
        <br />
        <HairBotoxTreatmentLong />
        <br />
        <HairBotoxTreatmentXp />
        <br />
        <HairBotoxTreatmentVerses />
        <br />
        <HairBotoxTreatmentCost />
        <br />
        <HairBotoxTreatmentMaintain />
        <br />
        <HairBotoxTreatmentFaq />
        <br />
        <HairBotoxTreatmentTakeway />
      </div>
            
    </div>
  );
};

export default HairBotoxTreatment;
