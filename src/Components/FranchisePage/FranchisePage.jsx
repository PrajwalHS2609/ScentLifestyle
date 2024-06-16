import React from "react";
import FranchiseHead from "./FranchiseHead";
import FranchisePara from "./FranchisePara";
import FranchiseForm from "./FranchiseForm";
import FranchiseContact from "./FranchiseContact";
import FranchiseNavBg from "./FranchiseNavBg";
import LastComp from "./../LastComp/LastComp";
import FranchiseImg from "./FranchiseImg";
import { Helmet } from "react-helmet";

const FranchisePage = () => {
  return (
    <div className="franchisePageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Salon Franchise in India | Beauty Salon Business Opportunity
        </title>
        <meta
          name="description" 
          content="Join the SCENT Salon franchise family and be part of a renowned brand in India. Benefit from our proven business model and comprehensive support to run your own successful salon."
        />
      </Helmet>
      <FranchiseNavBg />
      <FranchiseImg />
      <FranchiseHead />
      <FranchisePara />
      <FranchiseForm />
      <FranchiseContact />
      <LastComp />
    </div>
  );
};

export default FranchisePage;
