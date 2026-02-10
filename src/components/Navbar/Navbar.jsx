import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <p>
        <strong>Decades</strong>
      </p>
      <Link to="1970" smooth={true} duration={600} className="pointer">
        1970
      </Link>
      <Link to="1980" smooth={true} duration={600} className="pointer">
        1980
      </Link>
      <Link to="1990" smooth={true} duration={600} className="pointer">
        1990
      </Link>
      <Link to="2000" smooth={true} duration={600} className="pointer">
        2000
      </Link>
      <Link to="2010" smooth={true} duration={600} className="pointer">
        2010
      </Link>
      <Link to="2020" smooth={true} duration={600} className="pointer">
        2020
      </Link>
    </nav>
  );
};

export default Navbar;
