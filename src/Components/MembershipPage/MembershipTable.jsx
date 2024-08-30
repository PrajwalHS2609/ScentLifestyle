import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import "./MembershipTable.css"; // Make sure to include the CSS file

const MembershipTable = () => {
  return (
    <div className="membershipTable">
      <div className="membershipTableWrapper">
        <div className="membershipTableContent1">
          <div
            id="membershipTableContent1Item1"
            className="membershipTableContent1Item"
          >
            <h3>TYPE</h3>
          </div>
          <div
            id="membershipTableContent1Item2"
            className="membershipTableContent1Item"
          >
            <h3>SILVER</h3>
          </div>
          <div
            id="membershipTableContent1Item3"
            className="membershipTableContent1Item"
          >
            <h3>RUBY</h3>
          </div>
          <div
            id="membershipTableContent1Item4"
            className="membershipTableContent1Item"
          >
            <h3>GOLD</h3>
          </div>
          <div
            id="membershipTableContent1Item5"
            className="membershipTableContent1Item"
          >
            <h3>DIAMOND</h3>
          </div>
          <div
            id="membershipTableContent1Item6"
            className="membershipTableContent1Item"
          >
            <h3>SAPPHIRE</h3>
          </div>
          <div
            id="membershipTableContent1Item7"
            className="membershipTableContent1Item"
          >
            <h3>PLATINUM</h3>
          </div>
        </div>
        <div className="membershipTableContent2">
          <div
            id="membershipTableContent2Item1"
            className="membershipTableContent2Item"
          >
            <li>
              <h3>PAY</h3>
            </li>
            <li>
              <h3>LOAD</h3>
            </li>
            <li>
              <h3>EXTRA BENEFITS</h3>
            </li>
            <li>
              <h3>VALIDITY</h3>
            </li>
          </div>
          <div
            id="membershipTableContent2Item2"
            className="membershipTableContent2Item"
          >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div
            id="membershipTableContent2Item3"
            className="membershipTableContent2Item"
          >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div
            id="membershipTableContent2Item4"
            className="membershipTableContent2Item"
          >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div
            id="membershipTableContent2Item5"
            className="membershipTableContent2Item"
          >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div
            id="membershipTableContent2Item6"
            className="membershipTableContent2Item"
          >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div
            id="membershipTableContent2Item7"
            className="membershipTableContent2Item"
          >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
      </div>
      {/* <table>
        <tr className="tableRow1">
          <th>TYPE</th>
          <th>SILVER</th>
          <th>RUBY</th>
          <th>GOLD</th>
          <th>DIAMOND</th>
          <th>SAPPHIRE</th>
          <th>PLATINUM</th>
        </tr>
        <tr className="tableRow2">
          <th>PAY</th>
          <th>10000</th>
          <th>20000</th>
          <th>30000</th>
          <th>50000</th>
          <th>75000</th>
          <th>100000</th>
        </tr>
        <tr className="tableRow3">
          <th>LOAD</th>
          <th>11000</th>
          <th>27000</th>
          <th>45000</th>
          <th>75000</th>
          <th>110000</th>
          <th>150000</th>
        </tr>
        <tr className="tableRow4">
          <th>EXTRA BENEFITS</th>
          <th>1000</th>
          <th>7000</th>
          <th>15000</th>
          <th>25000</th>
          <th>35000</th>
          <th>50000</th>
        </tr>
        <tr className="tableRow5">
          <th>VALIDITY</th>
          <th>1 YEAR</th>
          <th>1 YEAR</th>
          <th>1 YEAR</th>
          <th>2 YEAR</th>
          <th>2 YEAR</th>
          <th>3 YEAR</th>
        </tr>
      </table> */}
    </div>
  );
};

export default MembershipTable;
