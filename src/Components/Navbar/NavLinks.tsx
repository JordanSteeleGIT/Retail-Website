import React, { FC } from "react";
import CustomLink from "./CustomLink";
import { motion, AnimatePresence } from "framer-motion";

type NavLinksProps = {
  closeBurgerMenu?: () => void;
  isOpenBurger?: boolean;
};

const NavLinks: FC<NavLinksProps> = ({ closeBurgerMenu, isOpenBurger }) => {
  const animateFrom = { x: isOpenBurger ? "100%" : 0 };
  const animateTo = { x: "0px" };
  return (
    <nav>
      <motion.ul
        initial={animateFrom}
        animate={animateTo}
        transition={{ bounce: 0, stiffness: 100 }}
        exit={{ x: "100%" }}
      >
        <CustomLink to="/" closeBurgerMenu={closeBurgerMenu}>
          Home
        </CustomLink>
        <CustomLink to="/about" closeBurgerMenu={closeBurgerMenu}>
          About
        </CustomLink>
        <CustomLink to="/shop" closeBurgerMenu={closeBurgerMenu}>
          Shop
        </CustomLink>
        <CustomLink to="/donate" closeBurgerMenu={closeBurgerMenu}>
          Donate
        </CustomLink>
        <CustomLink to="/contact" closeBurgerMenu={closeBurgerMenu}>
          Contact
        </CustomLink>
      </motion.ul>
    </nav>
  );
};

export default NavLinks;
