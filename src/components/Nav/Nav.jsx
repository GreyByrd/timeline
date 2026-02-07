import React, { useRef } from "react";

const HorizontalScrollWithAnchors = () => {
  const containerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById("#decade + 1");
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
        <button onClick={() => scrollToSection("decade1")}>Section 1</button>
        <button onClick={() => scrollToSection("decade2")}>Section 2</button>
        <button onClick={() => scrollToSection("decade3")}>Section 3</button>
      </nav>
    </div>
  );
};
