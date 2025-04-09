import React from "react";
import { Helmet } from "react-helmet";
import ClearerSkinFacialImg from "./ClearerSkinFacialImg";
import ClearerSkinFacialHeader from "./ClearerSkinFacialHeader";
import ClearerSkinFacialWhat from "./ClearerSkinFacialWhat";
import ClearerSkinFacialScience from "./ClearerSkinFacialScience";
import ClearerSkinFacialBenefits from "./ClearerSkinFacialBenefits";
import ClearerSkinFacialExpect from "./ClearerSkinFacialExpect";
import ClearerSkinFacialWhen from "./ClearerSkinFacialWhen";
import ClearerSkinFacialWhyChoose from "./ClearerSkinFacialWhyChoose";
import ClearerSkinFacialWhoBenefit from "./ClearerSkinFacialWhoBenefit";
import ClearerSkinFacialFinal from "./ClearerSkinFacialFinal";
import ClearerSkinFacialMaximize from "./ClearerSkinFacialMaximize";
import HairServImg from "../../HairBotox/HairServImg";
import clearerSkinWhyChooseImg from "./../../../../../Images/Blog/Clearer Skin, Happier You Acne Cure Facial Secrets/Why Choose Acne Cure Facials Over DIY Treatments.png";
import clearerSkinMaximizeImg from "./../../../../../Images/Blog/Clearer Skin, Happier You Acne Cure Facial Secrets/How to Maximize the Benefits of Acne Cure Facials.png";
import clearerSkinWhatImg from "./../../../../../Images/Blog/Clearer Skin, Happier You Acne Cure Facial Secrets/What Are Acne Cure Facials.png";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const ClearerSkinFacial = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Clearer Skin, Happier You: Acne Cure Facial Secrets </title>
        <meta
          name="description"
          content="Clearer Skin, Happier You: Acne Cure Facial Secrets. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/clearer-skin-happier-you-acne-cure-facial-secrets"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <ClearerSkinFacialImg />
          <ClearerSkinFacialHeader />
          <br />
          <HairServImg hairBotoxImg={clearerSkinWhatImg} />
          <ClearerSkinFacialWhat />
          <br />
          <ClearerSkinFacialScience />
          <br />
          <ClearerSkinFacialBenefits />
          <br />
          <HairServImg hairBotoxImg={clearerSkinMaximizeImg} />
          <ClearerSkinFacialMaximize />
          <br />
          <ClearerSkinFacialExpect />
          <br />
          <ClearerSkinFacialWhen />
          <br />
          <HairServImg hairBotoxImg={clearerSkinWhyChooseImg} />
          <ClearerSkinFacialWhyChoose />
          <br />
          <ClearerSkinFacialWhoBenefit />
          <br />
          <ClearerSkinFacialFinal />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>

        </div>
      </div>
    </div>
  );
};

export default ClearerSkinFacial;
