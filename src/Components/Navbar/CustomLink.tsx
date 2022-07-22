import React, { FC } from "react";
import { Link } from "react-router-dom";

type LinkProps = {
  to: any;
  children: React.ReactNode;
  closeBurgerMenu?: () => void;
};
const CustomLink: FC<LinkProps> = ({ to, children, closeBurgerMenu }) => {
  return (
    <Link to={to}>
      <li onClick={closeBurgerMenu}>{children}</li>
    </Link>
  );
};

export default CustomLink;
