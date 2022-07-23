import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  const handleResize = () => {
    if (openBurger && window.innerWidth > 990) setOpenBurger(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openBurger]);

  const closeBurgerMenu = () => {
    setOpenBurger(false);
  };
  return (
    <div className="mobile-nav">
      <GiHamburgerMenu
        style={{ color: "white", transform: "scale(1.2)" }}
        className="burger-icon"
        onClick={() => setOpenBurger(!openBurger)}
      />

      <AnimatePresence>
        {openBurger && (
          <NavLinks
            closeBurgerMenu={closeBurgerMenu}
            isOpenBurger={openBurger}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
