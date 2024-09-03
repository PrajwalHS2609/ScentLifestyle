import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import SalonFranchiseHead from "./SalonFranchiseHead";
import SalonFranchiseImg from "./SalonFranchiseImg";
import SalonFranchiseWhyChoose from "./SalonFranchiseWhyChoose";
import SalonFranchiseAdv from "./SalonFranchiseAdv";
import SalonFranchiseSteps from "./SalonFranchiseSteps";
import SalonFranchiseSuccess from "./SalonFranchiseSuccess";
import FranchiseForm from "../FranchiseForm";
import FranchiseContact from "../FranchiseContact";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const SalonFranchise = () => {
  return (
    <div className="franchisePageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Salon Franchise in Bangalore | Beauty Salon Franchise in Bangalore
        </title>
        <meta
          name="description"
          content="If you're dreaming of owning a business that combines creativity, style, and a thriving market, look no further than a Salon Franchise in Bangalore with SCENT."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/beauty-salon-franchise-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <SalonFranchiseImg />
      <SalonFranchiseHead />
      <SalonFranchiseWhyChoose />
      <FranchiseForm />
      <FranchiseContact />
      <SalonFranchiseAdv />
      <SalonFranchiseSteps />
      <SalonFranchiseSuccess />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default SalonFranchise;
