import React from "react";

const Navbar = React.forwardRef((props, ref) => {
  const NavLinks = [
    { name: "Home", link: "#top" },
    { name: "About", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <nav id="Navbar" className={styles.navbar} ref={ref}>
      {NavLinks.map((navlink) => {
        return (
          <a key={navlink.name} href={navlink.link}>
            {navlink.name}
          </a>
        );
      })}
    </nav>
  );
});

export default Navbar;
