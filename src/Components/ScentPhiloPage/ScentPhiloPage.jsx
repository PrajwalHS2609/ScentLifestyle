import React from "react";
import "./ScentPhiloPage.css";
import ScentPhiloHead from "./ScentPhiloHead";
import ScentPhiloTxt from "./ScentPhiloTxt";
import NavBg from "../NavBg/NavBg";
import { Helmet } from "react-helmet";

const ScentPhiloPage = () => {
  return (
    <div className="scentPhiloPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SCENT Philosophy - haircut just an excuse …</title>
        <meta
          name="description"
          content="Scent gently draws you into a world of serenity and sensuousness. Here your vision of style comes to life, a new YOU – top to toe."
        />
        <link rel="canonical" href="https://scentlifestyle.com/philosophy" />
      </Helmet>
      <NavBg />
      <div className="scentPhiloPageContent">
        <ScentPhiloHead />
        <ScentPhiloTxt />
        </div>
      
    </div>
  );
};

export default ScentPhiloPage;
