import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2000s/Event1";
import Event2 from "./2000s/Event2";
import Event3 from "./2000s/Event3";
import Event4 from "./2000s/Event4";
import Event5 from "./2000s/Event5";

const Decade2000s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event2 id={2} />
      <Event3 id={3} />
      <Event4 id={4} />
      <Event5 id={5} />
    </ScrollyElement>
  );
};

export default Decade2000s;
