import { ScrollyProvider } from "react-scrolly-telling";
import DecadeIntro from "./components/decades/DecadeIntro";
import Decade1970s from "./components/decades/Decade1970s";
import Decade1980s from "./components/decades/Decade1980s";
import Decade1990s from "./components/decades/Decade1990s";
import Decade2000s from "./components/decades/Decade2000s";
import Decade2010s from "./components/decades/Decade2010s";
import Decade2020s from "./components/decades/Decade2020s";

const App = () => {
  return (
    <section className="main-wrapper">
      <nav className="internal-nav">
        <ul>
          <li>
            <a href="#1970" onClick={(e) => goToLink(e, true)}>
              Panel 1
            </a>
          </li>
          <li>
            <a href="#1980" onClick={(e) => goToLink(e, true)}>
              Panel 2
            </a>
          </li>
          <li>
            <a href="#1990" onClick={(e) => goToLink(e, true)}>
              Panel 3
            </a>
          </li>
        </ul>
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
    </section>
  );
};

export default App;
