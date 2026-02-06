import React, { useRef } from "react";

const HorizontalScrollWithAnchors = () => {
  const containerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById("section + 1");
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
        <button onClick={() => scrollToSection("section1")}>Section 1</button>
        <button onClick={() => scrollToSection("section2")}>Section 2</button>
        <button onClick={() => scrollToSection("section3")}>Section 3</button>
      </nav>
    </div>
  );
};

export default HorizontalScrollWithAnchors;
