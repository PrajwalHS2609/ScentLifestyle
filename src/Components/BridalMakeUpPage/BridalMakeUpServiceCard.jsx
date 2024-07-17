import React from "react";
import ServiceCards from "../MainServicePages/ServiceCards/ServiceCards";
import preBridal from "./../../Images/ServicePage/Pre-Birdal Treatment.png"
import bridalPackage from "./../../Images/ServicePage/Bridal Package.png"

const BridalMakeUpServiceCard = () => {
  return (
    <div className="hairCardContainer">
      <ServiceCards
        heading="Pre-Bridal Treatments"
        para="Enhance your wedding day with SCENT's Pre-bridal Services! Tailored for the bride and groom, our packages include hair, skin, grooming, nails, and spa treatments. Contact our consultants or book online for a personalized experience in Bangalore. Make your special day unforgettable!"
        goto="Pre-Bridal Treatments"
        img={preBridal}
        link={"/haircut-and-styling"}
      />
      <ServiceCards
        heading="Bridal Package"
        para="Complete your bridal look with our personalized packages at SCENT. Led by Master Colour Expert Ms. Sanjna, our bridal packages ensure you look stunning on your special day. Visit your nearest SCENT salon in Bangalore to avail exclusive offers on our complete bridal package. Trust us to make you feel beautiful!"
        goto="Bridal Package"
        img={bridalPackage}
        link={"/hair-highlights-and-streaks"}
      />
    </div>
  );
};

export default BridalMakeUpServiceCard;
