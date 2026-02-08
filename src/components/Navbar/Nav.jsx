import { Link } from "react-scroll";
import Nav from "../Navbar/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <p>
        <strong>Decades</strong>
      </p>
      <Link to="1970" instant={true} duration={300} className="pointer">
        1970
      </Link>
      <Link to="1980" instant={true} duration={300} className="pointer">
        1980
      </Link>
      <Link to="1990" instant={true} duration={300} className="pointer">
        1990
      </Link>
    </nav>
  );
};

export default Nav;
