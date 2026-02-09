import { Link } from "react-scroll";
import Nav from "../Navbar/Nav.css";

const Nav = () => {
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
    </nav>
  );
};

export default Nav;
