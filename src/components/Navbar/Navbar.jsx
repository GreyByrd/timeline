import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navstyle.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <button className="nav-btn nav-open" onClick={toggleMenu}>
        Decades
      </button>

      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <Link to="1970" smooth={true} duration={200} onClick={closeMobileMenu}>
          1970
        </Link>
        <Link to="1980" onClick={closeMobileMenu} smooth={true} duration={200}>
          1980
        </Link>
        <Link to="1990" onClick={closeMobileMenu} smooth={true} duration={200}>
          1990
        </Link>
        <Link to="2000" onClick={closeMobileMenu} smooth={true} duration={200}>
          2000
        </Link>
        <Link to="2010" onClick={closeMobileMenu} smooth={true} duration={200}>
          2010
        </Link>
        <Link to="2020" onClick={closeMobileMenu} smooth={true} duration={200}>
          2020
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
