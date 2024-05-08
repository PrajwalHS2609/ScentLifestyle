import React from "react";
import HairServiceCard from "./HairServiceCard";
import "./HairServiceCard.css";
import cut from "./../../../Images/hair cut.jpg";
import beard from "./../../../Images/beard styling.jpg";
const HairServiceCardContain = () => {
  return (
    <div className="hairCardContainer">
      <HairServiceCard
        heading="Haircut & Styling"
        para="
        Get cutting-edge haircuts and trims at SCENT salon for women and men. Our skilled stylists provide trending styles and professional blow-dry for a stunning look. Whether classic or modern, our unisex salon offers options for all occasions. Experience a transformation with Dyson tools. Check out our latest offers in Bangalore today!"
        goto="Haircut & Styling"
        img={cut}
      />
      <HairServiceCard
        heading="Highlights & Streaks"
        para="
        Transform your look with our Hair Colour & Highlights services. Choose from bold global hair colours to delicate highlights, meticulously crafted by our skilled stylists. Each colour is tailored to your style, ensuring a personalized and stunning result that boosts your confidence and radiance."
        goto="Highlights & Streaks"
        img="https://img.freepik.com/premium-photo/beauty-young-woman-portrait_200196-667.jpg?w=900"
      />
      <HairServiceCard
        heading="Hair Spa"
        para=" At SCENT salon nearby, select from various hair spa treatments for your specific needs. Customize options to tackle oiliness, frizz, dryness, and scalp itchiness. Experience our intense hair spa with Olaplex treatment for chemically treated hair, for relaxation and rejuvenation. See reduced breakage, reversed damage, and improved hair health."
        goto="Hair Spa"
        img="https://img.freepik.com/premium-photo/spa-treatments-top-view-hairdressera-s-hands-washing-hair-her-customer-salon-before-hairstyling-process_283617-2683.jpg?w=900"
      />
      <HairServiceCard
        heading="Hair Treatments"
        para="Experience luxurious hair treatments at SCENT Salon Spa. Our hair experts offer a range of treatments tailored to your hair's specific needs, whether it's hydration, repair, or nourishment. From deep conditioning masks to scalp treatments, we'll pamper your locks and leave them looking healthier and more vibrant than ever."
        goto="Hair Treatments"
        img="https://img.freepik.com/premium-photo/hairdresser-drying-womans-hair_798657-17098.jpg?w=900"
      />
      <HairServiceCard
        heading="Beard Styling"
        para="Creating distinctive beard styles that reflect your personality. Our skilled professionals specialize in the art of beard grooming, crafting looks from classic to modern. Using meticulous shaping techniques, we tailor each style to accentuate your unique features, ensuring a stunning result that complements your individuality."
        goto="Beard Styling"
        img={beard}
        link={"/beard"}
      />
      <HairServiceCard
        heading="Mustache"
        para="
        Get the perfect mustache style at SCENT Salon Spa. Our skilled barbers will shape and groom your mustache to perfection, ensuring you leave with a polished and handsome look. Whether you prefer a classic style or something more modern, we've got you covered. Book your appointment today and elevate your grooming game with SCENT."
        goto="Mustache"
        img="https://img.freepik.com/free-photo/half-man-s-face-with-beard_171337-17203.jpg?t=st=1714371661~exp=1714375261~hmac=b0ab5f1a49059c0c64246cc3f4f3dce7cda027e06eb204a96195ded5f2f8453d&w=900"
      />
    </div>
  );
};

export default HairServiceCardContain;
