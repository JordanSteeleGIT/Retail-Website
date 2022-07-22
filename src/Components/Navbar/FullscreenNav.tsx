import React from "react";
import NavLinks from "./NavLinks";
import { AiOutlineShoppingCart } from "react-icons/ai";

const FullscreenNav = () => {
  return (
    <div className="fullscreen-nav">
      <NavLinks />
      <div className="burger-container">
        <AiOutlineShoppingCart className="cart-icon" />
      </div>
    </div>
  );
};

export default FullscreenNav;
