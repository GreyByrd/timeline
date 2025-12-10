import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1990s/Event1";
import Event2 from "./1990s/Event2";
import Event3 from "./1990s/Event3";
import Event4 from "./1990s/Event4";

const Decade1990s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event2 id={2} />
      <Event3 id={3} />
      <Event4 id={4} />
    </ScrollyElement>
  );
};

export default Decade1990s;
