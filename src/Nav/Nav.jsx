import React from "react";

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
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
