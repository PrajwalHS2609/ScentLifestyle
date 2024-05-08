import React from "react";
import MemberShipPriceCard from "./MemberShipPriceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
const MembershipPrice = () => {
  return (
    <div className="membershipPriceContainer">
      <MemberShipPriceCard
        txt="You Pay"
        price1="10000"
        price2="15000"
        price3="20000"
        price4="25000"
        rupee={
          <FontAwesomeIcon
            icon={faIndianRupee}
            className="rupeeIcon"
          ></FontAwesomeIcon>
        }
      />
      <MemberShipPriceCard
        txt="You Get"
        price1="11000"
        price2="18000"
        price3="25000"
        price4="35000"
        rupee={
          <FontAwesomeIcon
            icon={faIndianRupee}
            className="rupeeIcon"
          ></FontAwesomeIcon>
        }
      />
    </div>
  );
};

export default MembershipPrice;
