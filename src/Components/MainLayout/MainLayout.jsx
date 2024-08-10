import React from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/offer";
  const hideNav1 = location.pathname !== "/botox-landing";
  const hideNav2 = location.pathname !== "/hair-treatment-landing";

  return (
    <div>
      {hideNav2 && hideNav1 && showNavbar && <NavBar />}
      {children}
    </div>
  );
};

export default MainLayout;
