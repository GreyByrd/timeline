import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2000s/Event1";
import Event2 from "./2000s/Event2";
import Event3 from "./2000s/Event3";
import Event4 from "./2000s/Event4";
import Event5 from "./2000s/Event5";
import Event6 from "./2000s/Event6";
import Event7 from "./2000s/Event7";
import Event8 from "./2000s/Event8";
import Event9 from "./2000s/Event9";
import Event10 from "./2000s/Event10";
import Event11 from "./2000s/Event11";

const Decade2000s = () => {
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
      <Event10 id={10} />
      <Event11 id={11} />
    </ScrollyElement>
  );
};

export default Decade2000s;
