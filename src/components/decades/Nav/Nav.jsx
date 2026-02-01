import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Nav = styled.div`
  display: flex;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0 10px;
  }
`;

function Navigation() {
  return (
    <Wrapper>
      <Nav className="Nav">
        <h2>Navigation</h2>
        <li>Test1</li>
      </Nav>
    </Wrapper>
  );
}

export default Navigation;
