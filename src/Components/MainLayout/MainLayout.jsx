import React from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import UpperNav from "./../UpperNav/UpperNav";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbar1 = location.pathname !== "/offer";
  const hideNavbar2 = location.pathname !== "/lp-hair-botoxx";
  const hideNavbar3 = location.pathname !== "/lp-hair-treatment";
  const hideNavbar4 = location.pathname !== "/lp-olaplex";
  const hideNavbar5 = location.pathname !== "/lp-hair-highlights-and-streaks";
  const hideNavbar6 = location.pathname !== "/offer-testing";

  return (
    <div style={{ position: "sticky", top: "0", zIndex: "20", width: "100%" }}>
      {hideNavbar1 &&
        hideNavbar2 &&
        hideNavbar3 &&
        hideNavbar4 &&
        hideNavbar5 &&
        hideNavbar6 && <UpperNav />}
      {hideNavbar1 &&
        hideNavbar2 &&
        hideNavbar3 &&
        hideNavbar4 &&
        hideNavbar5 &&
        hideNavbar6 && <NavBar />}
      {children}
    </div>
  );
};

export default MainLayout;
