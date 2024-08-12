import React from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbar1 = location.pathname !== "/offer";
  const hideNavbar2 = location.pathname !== "/botox-landing";
  const hideNavbar3 = location.pathname !== "/hair-treatment-landing";
  const hideNavbar4 = location.pathname !== "/olaplex-landing";
  const hideNavbar5 = location.pathname !== "/hair-color-streak-landing";

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
