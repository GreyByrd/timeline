import { ScrollyProvider } from "react-scrolly-telling";
import Decade1970s from "./components/decades/Decade1970s";
import Decade1980s from "./components/decades/Decade1980s";

const App = () => {
  return (
    <ScrollyProvider>
      <Decade1970s />
      <Decade1980s />
      <Decade1990s />
    </ScrollyProvider>
  );
};

export default App;
