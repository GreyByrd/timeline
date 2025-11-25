import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1970s/Event1";
import Event2 from "./1970s/Event2";
import Event3 from "./1970s/Event3";
import Event4 from "./1970s/Event4";
import Event5 from "./1970s/Event5";
import Event6 from "./1970s/Event6";

const Decade1970s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event2 id={2} />
      <Event3 id={3} />
      <Event4 id={4} />
      <Event5 id={5} />
      <Event6 id={6} />
      <Event6 id={7} />
      <Event6 id={8} />
      <Event6 id={9} />
    </ScrollyElement>
  );
};

export default Decade1970s;
