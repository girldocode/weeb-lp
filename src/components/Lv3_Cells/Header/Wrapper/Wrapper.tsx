"use client";

import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";

const Wrapper: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Hamburger onClick={handleNavbar} />
      <MobileMenu isOpen={menuOpen} onClose={handleNavbar} />
    </>
  );
};

export default Wrapper;
