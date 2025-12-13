import { ScrollyProvider } from "react-scrolly-telling";
import Decade1970s from "./components/decades/Decade1970s";
import Decade1980s from "./components/decades/Decade1980s";
import Decade1990s from "./components/decades/Decade1990s";
import Decade2000s from "./components/decades/Decade2000s";
import Decade2010s from "./components/decades/Decade2010s";

const App = () => {
  return (
    <ScrollyProvider>
      s
      <Decade1970s />
      <Decade1980s />
      <Decade1990s />
      <Decade2000s />
      <Decade2010s />
    </ScrollyProvider>
  );
};

export default App;
