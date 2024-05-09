import React from "react";
import FranchiseHead from "./FranchiseHead";
import FranchisePara from "./FranchisePara";
import FranchiseForm from "./FranchiseForm";
import FranchiseContact from "./FranchiseContact";
import FranchiseNavBg from "./FranchiseNavBg";
import LastComp from './../LastComp/LastComp';
import FranchiseImg from "./FranchiseImg";

const FranchisePage = () => {
  return (
    <div className="franchisePageContainer">
      <FranchiseNavBg />
      <FranchiseImg/>
      <FranchiseHead />
      <FranchisePara />
      <FranchiseForm />
      <FranchiseContact />
      <LastComp/>
    </div>
  );
};

export default FranchisePage;
