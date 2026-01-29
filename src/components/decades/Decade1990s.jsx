import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1990s/Event1";
import Event2 from "./1990s/Event2-lead";
import Event3 from "./1990s/Event3-deroulet";
import Event4 from "./1990s/Event4-harriet";
import Event5 from "./1990s/Event5-christine";
import Event6 from "./1990s/Event6-campaign";
import Event7 from "./1990s/Event7-notables02";
import Event8 from "./1990s/Event8-tanya";
import Event9 from "./1990s/Event9-pamgann";

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
