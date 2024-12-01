import React from "react";
import FranchiseHead from "./FranchiseHead";
import FranchisePara from "./FranchisePara";
import FranchiseForm from "./FranchiseForm";
import FranchiseContact from "./FranchiseContact";
import FranchiseImg from "./FranchiseImg";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";

const FranchisePage = () => {
  return (
    <div className="franchisePageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Salon Franchise in India - 100% ROI Guaranteed Business</title>
        <meta
          name="description"
          content="SCENT Salon Franchise in India. A Lucrative Opportunity for you to build a beauty empire. It is an imperative milestone for us to open up our franchise doors to you."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/franchise"
        />
      </Helmet>
      <NavBg/>
      <FranchiseImg />
      <FranchiseHead />
      <FranchisePara />
      <FranchiseForm />
      <FranchiseContact />
      
    </div>
  );
};

export default FranchisePage;
