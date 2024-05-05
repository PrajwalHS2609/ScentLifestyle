import React from "react";
import HairServiceCard from "./HairServiceCard";
import "./HairServiceCard.css";

const HairServiceCardContain = () => {
  return (
    <div className="hairCardContainer">
      <HairServiceCard
        heading="Haircut & Styling"
        para="
        Get cutting-edge haircuts and trims at SCENT salon for women and men. Our skilled stylists provide trending styles and professional blow-dry for a stunning look. Whether classic or modern, our unisex salon offers options for all occasions. Experience a transformation with Dyson tools. Check out our latest offers in Bangalore today!"
        goto="Haircut & Styling"
        img="https://img.freepik.com/free-photo/hairdresser-taking-care-her-client_23-2149319763.jpg?t=st=1714391249~exp=1714394849~hmac=7a3369becdf02ecb20b94a284c58f7b2ec2a07d0ba28d54ed81968a84697a039&w=996"
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
        // para="Choose from a range of different hair spa treatments based on your hair type and needs at a Bodycraft salon near you. They can also be customised to treat various hair concerns, such as oiliness, frizz, dryness, and an itchy scalp. Get an intense hair spa to relax and rejuvenate your scalp and tresses with our Olaplex treatment specially designed for chemically treated hair. It prevents instances of breakage, reverses damage, and makes hair healthier."
        goto="Hair Treatments"
        img="https://img.freepik.com/premium-photo/hairdresser-drying-womans-hair_798657-17098.jpg?w=900"
      />
      <HairServiceCard
        heading="Beard Styling"
        para="Creating distinctive beard styles that reflect your personality. Our skilled professionals specialize in the art of beard grooming, crafting looks from classic to modern. Using meticulous shaping techniques, we tailor each style to accentuate your unique features, ensuring a stunning result that complements your individuality."
        goto="Beard Styling"
        img="https://img.freepik.com/free-photo/brunette-man-lies-with-open-eyes-while-barber-cuts-his-beard_1304-2776.jpg?t=st=1714371443~exp=1714375043~hmac=c0f11cdac36f9320bcaab047cdc9aa22c09ce87a30a1ad54c87e29df3bf59882&w=900"
        link={"/beard"}
      />
      <HairServiceCard
        heading="Mustache"
        // para="Choose from a range of different hair spa treatments based on your hair type and needs at a Bodycraft salon near you. They can also be customised to treat various hair concerns, such as oiliness, frizz, dryness, and an itchy scalp. Get an intense hair spa to relax and rejuvenate your scalp and tresses with our Olaplex treatment specially designed for chemically treated hair. It prevents instances of breakage, reverses damage, and makes hair healthier."
        goto="Mustache"
        img="https://img.freepik.com/free-photo/half-man-s-face-with-beard_171337-17203.jpg?t=st=1714371661~exp=1714375261~hmac=b0ab5f1a49059c0c64246cc3f4f3dce7cda027e06eb204a96195ded5f2f8453d&w=900"
      />
    </div>
  );
};

export default HairServiceCardContain;
