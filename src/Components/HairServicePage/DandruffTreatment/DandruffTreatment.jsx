import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../../LocationServices/HairLocationServices/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import DandruffTreatmentHead from "./DandruffTreatmentHead";
import DandruffTreatmentUnderstand from "./DandruffTreatmentUnderstand";
import DandruffTreatmentWhyChoose from "./DandruffTreatmentWhyChoose";
import DandruffTreatmentService from "./DandruffTreatmentService";
import DandruffTreatmentHow from "./DandruffTreatmentHow";
import DandruffTreatmentBenefits from "./DandruffTreatmentBenefits";
import DandruffTreatmentTips from "./DandruffTreatmentTips";
import DandruffTreatmentTestimonial from "./DandruffTreatmentTestimonial";
import DandruffTreatmentBook from "./DandruffTreatmentBook";
import Members from "./../../HomePage/Members/Members";
import OurSalon from "./../../HomePage/OurSalon/OurSalon";
import Partners from "./../../HomePage/Partners/Partners";
import InstaFeed from "./../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "./../../Help/HelpNearYou";
import TextLocReviews from "./../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../MainServicePages/ServiceWhy/ServiceWhy";
import dandruffTreatmentImg from "./../../../Images/SahakarNagar/Hair.png";

const DandruffTreatment = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dandruff Treatment in Bangalore | Dandruff Hair Care Cost</title>
        <meta
          name="description"
          content="Dandruff Treatment in Bangalore. Living in a dynamic city like Bangalore, where pollution, humidity, and lifestyle factors can exacerbate scalp issues, finding an effective solution is essential."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/dandruff-treatment-in-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg
        img={dandruffTreatmentImg}
        alt="dandruffTreatmentImg"
      />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Dandruff Treatment"
      />
      <DandruffTreatmentHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <DandruffTreatmentUnderstand />
      <DandruffTreatmentWhyChoose />
      <DandruffTreatmentService />
      <DandruffTreatmentHow />
      <DandruffTreatmentBenefits />
      <DandruffTreatmentTips />
      <DandruffTreatmentTestimonial />
      <DandruffTreatmentBook />
    </div>
  );
};

export default DandruffTreatment;
