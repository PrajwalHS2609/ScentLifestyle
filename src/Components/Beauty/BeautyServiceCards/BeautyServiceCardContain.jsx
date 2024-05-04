import React from "react";
import "./BeautyServiceCard.css";
import BeautyServiceCard from "./BeautyServiceCard";
const BeautyServiceCardContain = () => {
  return (
    <div className="beautyCardContainer">
      <BeautyServiceCard
        heading="Face"
        para=""
        goto="Face"
        img="https://img.freepik.com/premium-photo/closeup-shot-attractive-young-indian-woman-with-beautiful-skin_116547-83528.jpg?w=900"
      />
      <BeautyServiceCard
        heading="Arms"
        para=""
        goto="Arms"
        img="https://img.freepik.com/free-photo/beautiful-girl-with-clean-perfect-skin_144627-4995.jpg?t=st=1714715538~exp=1714719138~hmac=95004995863b2955e0f1078de76a3837f09d857a398a10ac2d1c89acb94d954d&w=900"
      />
      <BeautyServiceCard
        heading="Legs"
        para=""
        goto="Legs"
        img="https://img.freepik.com/free-photo/perfect-female-legs-isolated-white-background_231208-10242.jpg?t=st=1714715917~exp=1714719517~hmac=b480c59ab98a5b675ffb77cacd89c63c9350a335ae63e2e8b06120e9ccee381e&w=360"
      />
      <BeautyServiceCard
        heading="Neck"
        para=""
        goto="Neck"
        img="https://img.freepik.com/free-photo/brunette-young-woman-posing_144627-35822.jpg?t=st=1714715948~exp=1714719548~hmac=6b3024086b2a628a3e60a1a402f4b6b74e29ee9aabeed8bac2aab64fedc100f0&w=900"
      />
      <BeautyServiceCard
        heading="Back"
        para=""
        goto="Back"
        img="https://img.freepik.com/free-photo/back-view-woman-with-water-drops-skin_23-2149379990.jpg?t=st=1714716002~exp=1714719602~hmac=9e023f7d2c589d053c5b0b2e031b94e39e88319d116017fc0793a3ce8137133b&w=360"
      />
    </div>
  );
};

export default BeautyServiceCardContain;
