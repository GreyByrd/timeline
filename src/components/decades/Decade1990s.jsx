import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1990s/Event1";
import Event2 from "./1990s/Event2";
import Event3 from "./1990s/Event3";
import Event4 from "./1990s/Event4";
import Event5 from "./1990s/Event5";
import Event6 from "./1990s/Event6";
import Event7 from "./1990s/Event7";
import Event8 from "./1990s/Event8";
import Event9 from "./1990s/Event9";

const Decade1990s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event2 id={2} />
      <Event3 id={3} />
      <Event4 id={4} />
      <Event5 id={5} />
      <Event6 id={6} />
      <Event7 id={7} />
      <Event8 id={8} />
      <Event9 id={9} />
    </ScrollyElement>
  );
};

export default Decade1990s;
