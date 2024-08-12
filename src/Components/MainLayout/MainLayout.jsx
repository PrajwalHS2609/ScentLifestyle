import React from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbar1 = location.pathname !== "/offer";
  const hideNavbar2 = location.pathname !== "/lp-hair-botoxx";
  const hideNavbar3 = location.pathname !== "/lp-hair-treatment";
  const hideNavbar4 = location.pathname !== "/lp-olaplex";
  const hideNavbar5 = location.pathname !== "/lp-hair-highlights-and-streaks";

  return (
    <div>
      {hideNavbar1 &&
        hideNavbar2 &&
        hideNavbar3 &&
        hideNavbar4 &&
        hideNavbar5 && <NavBar />}
      {children}
    </div>
  );
};

export default MainLayout;
