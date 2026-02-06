import { ScrollyProvider } from "react-scrolly-telling";
import Nav from "./components/Nav/Nav";
import DecadeIntro from "./components/decades/DecadeIntro";
import Decade1970s from "./components/decades/Decade1970s";
import Decade1980s from "./components/decades/Decade1980s";
import Decade1990s from "./components/decades/Decade1990s";
import Decade2000s from "./components/decades/Decade2000s";
import Decade2010s from "./components/decades/Decade2010s";
import Decade2020s from "./components/decades/Decade2020s";

const App = () => {
  return (
    <div>
      <nav>
        <button onClick={() => scrollToSection("section1")}>Section 1</button>
        <button onClick={() => scrollToSection("section2")}>Section 2</button>
        <button onClick={() => scrollToSection("section3")}>Section 3</button>
      </nav>
      <ScrollyProvider>
        <DecadeIntro />
        <Decade1970s />
        <Decade1980s />
        <Decade1990s />
        <Decade2000s />
        <Decade2010s />
        <Decade2020s />
      </ScrollyProvider>
    </div>
  );
};

export default App;
