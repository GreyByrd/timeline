import React from "react";

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
