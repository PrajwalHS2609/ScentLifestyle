import React from "react";
import { Helmet } from "react-helmet";
import WhatsApp from "../../../../HomePage/WhatsApp/WhatsApp";
import BodyDTanTreatmentImg from "./BodyDTanTreatmentImg";
import BodyDTanTreatmentHead from "./BodyDTanTreatmentHead";
import BodyDTanTreatmentBenefits from "./BodyDTanTreatmentBenefits";
import BodyDTanTreatmentScience from "./BodyDTanTreatmentScience";
import BodyDTanTreatmentHow from "./BodyDTanTreatmentHow";
import BodyDTanTreatmentWhyChoose from "./BodyDTanTreatmentWhyChoose";
import BodyDTanTreatmentCommon from "./BodyDTanTreatmentCommon";
import BodyDTanTreatmentVerses from "./BodyDTanTreatmentVerses";
import BodyDTanTreatmentEnhance from "./BodyDTanTreatmentEnhance";
import bodyDTanTreatmentHowImg from "./../../../../../Images/Blog/Body_D-Tan_Treatment/How to Incorporate Body D-Tan into Your Skincare Routine.png";
import bodyDTanTreatmentWhyImg from "./../../../../../Images/Blog/Body_D-Tan_Treatment/Why Choose D-Tan for Anti-Aging.png";
import bodyDTanTreatmentChoosingImg from "./../../../../../Images/Blog/Body_D-Tan_Treatment/Choosing the Right Body D-Tan Treatment.png";
import HairServImg from "../../HairBotox/HairServImg";

const BodyDTanTreatment = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>The Role of Body D-Tan in Anti-Aging Skincare</title>
        <meta
          name="description"
          content="The Role of Body D-Tan in Anti-Aging Skincare, explaining how this treatment can help combat visible signs of aging while restoring your skin’s natural glow. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/the-role-of-body-d-tan-in-anti-aging-skincare"
        />
      </Helmet>
      <div className="hairTrimContent">
        <BodyDTanTreatmentImg />
        <BodyDTanTreatmentHead />
        <br />
        <BodyDTanTreatmentBenefits />
        <br />
        <BodyDTanTreatmentScience />
        <br />
        <HairServImg hairBotoxImg={bodyDTanTreatmentHowImg} />
        <BodyDTanTreatmentHow />
        <br />
        <HairServImg hairBotoxImg={bodyDTanTreatmentWhyImg} />
        <BodyDTanTreatmentWhyChoose />
        <br />
        <BodyDTanTreatmentCommon />
        <br />
        <HairServImg hairBotoxImg={bodyDTanTreatmentChoosingImg} />
        <BodyDTanTreatmentVerses />
        <br />
        <BodyDTanTreatmentEnhance />
      </div>
            
    </div>
  );
};

export default BodyDTanTreatment;
