import React from "react";
import FullscreenNav from "./FullscreenNav";
import Logo from "../../Images/Logo.svg";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <img src={Logo} />
          <FullscreenNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
