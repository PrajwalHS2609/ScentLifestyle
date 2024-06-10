import React from "react";
import HairServiceCard from "./HairServiceCard";
import "./HairServiceCard.css";
import cut from "./../../../Images/hair cut.jpg";
import beard from "./../../../Images/beard styling.jpg";
import ServiceCards from "../../MainServicePages/ServiceCards/ServiceCards";
const HairServiceCardContain = () => {
  return (
    <div className="hairCardContainer">
      <ServiceCards
        heading="Haircut & Styling"
        para="Get stylish haircuts and trims at SCENT salon. Our stylists offer trendy styles and professional blow-drys for any occasion. Experience a Dyson transformation. Visit us in Bangalore for offers!"
        goto="Haircut & Styling"
        img={cut}
        link={"/haircut-and-styling"}
      />
      <ServiceCards
        heading="Highlights & Streaks"
        para="Transform your look with our Hair Colour & Highlights. Choose from bold colours to delicate highlights, crafted by skilled stylists for a personalized, stunning result."
        goto="Highlights & Streaks"
        img="https://img.freepik.com/premium-photo/beauty-young-woman-portrait_200196-667.jpg?w=900"
        link={"/hair-highlights-and-streaks"}
      />
      <ServiceCards
        heading="Hair Spa"
        para=" Discover customized hair spa treatments at SCENT salon nearby. Reduce breakage, reverse damage, and improve hair health with our intense Olaplex treatment for chemically treated hair."
        goto="Hair Spa"
        img="https://img.freepik.com/premium-photo/spa-treatments-top-view-hairdressera-s-hands-washing-hair-her-customer-salon-before-hairstyling-process_283617-2683.jpg?w=900"
        link={"/hair-spa"}
      />
      <HairServiceCard
        heading="Hair Treatments"
        para="Indulge in luxurious hair treatments at SCENT Salon Spa. Our experts cater to your hair's needs, from hydration to repair. With deep conditioning masks and scalp treatments, we'll revitalize your locks for a healthier, vibrant look."
        goto="Hair Treatments"
        img="https://img.freepik.com/premium-photo/hairdresser-drying-womans-hair_798657-17098.jpg?w=900"
        link={"/hair-treatments"}
      />
      <ServiceCards
        heading="Beard Styling"
        para="
At SCENT, we specialize in crafting unique beard styles that match your personality. Our skilled professionals use precise shaping techniques to enhance your features, ensuring a stunning look that reflects your individuality."
        goto="Beard Styling"
        img={beard}
        link={"/beard"}
      />
      <ServiceCards
        heading="Mustache"
        para="
        At SCENT Salon Spa, our skilled barbers shape mustaches to perfection for a polished, handsome look. Choose classic or modern styles. Book now and elevate your grooming game with SCENT."
        goto="Mustache"
        img="https://img.freepik.com/free-photo/half-man-s-face-with-beard_171337-17203.jpg?t=st=1714371661~exp=1714375261~hmac=b0ab5f1a49059c0c64246cc3f4f3dce7cda027e06eb204a96195ded5f2f8453d&w=900"
        link={"/mustache-styling"}
      />
    </div>
  );
};

export default HairServiceCardContain;
