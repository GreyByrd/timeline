import React, { useRef } from "react";

const HorizontalScrollWithAnchors = () => {
  const containerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <button onClick={() => scrollToSection("1970")}>Section 1</button>
        <button onClick={() => scrollToSection("1980")}>Section 2</button>
        <button onClick={() => scrollToSection("1990")}>Section 3</button>
      </nav>
    </div>
  );
};

export default HorizontalScrollWithAnchors;
