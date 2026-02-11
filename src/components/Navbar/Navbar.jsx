import React from "react";
import { Link } from "react-scroll";
import "./navstyle.css";

const Navbar = () => {
  return (
    <nav className="decades">
      <p>
        <strong>Decades</strong>
      </p>
      <Link className="nav-links" to="1970" smooth={true} duration={200}>
        1970
      </Link>
      <Link to="1980" smooth={true} duration={200} className="nav-links">
        1980
      </Link>
      <Link to="1990" smooth={true} duration={200} className="nav-links">
        1990
      </Link>
      <Link to="2000" smooth={true} duration={200} className="nav-links">
        2000
      </Link>
      <Link to="2010" smooth={true} duration={200} className="pointer">
        2010
      </Link>
      <Link to="2020" smooth={true} duration={600} className="pointer">
        2020
      </Link>
    </nav>
  );
};

export default Navbar;
