import React from "react";
import FranchiseHead from "./FranchiseHead";
import FranchisePara from "./FranchisePara";
import FranchiseForm from "./FranchiseForm";
import FranchiseContact from "./FranchiseContact";
import FranchiseNavBg from "./FranchiseNavBg";
import LastComp from './../LastComp/LastComp';

const FranchisePage = () => {
  return (
    <div className="franchisePageContainer">
      <FranchiseNavBg />
      <FranchiseHead />
      <FranchisePara />
      <FranchiseForm />
      <FranchiseContact />
      <LastComp/>
    </div>
  );
};

export default FranchisePage;
