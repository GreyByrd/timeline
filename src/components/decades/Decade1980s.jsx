import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1980s/Event1";
import Event2 from "./1980s/Event2";
import Event3 from "./1980s/Event3";
import Event4 from "./1980s/Event4";
import Event5 from "./1980s/Event5";

const Decade1980s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event1 id={2} />
      <Event1 id={3} />
      <Event1 id={4} />
      <Event1 id={5} />
      <Event1 id={6} />
    </ScrollyElement>
  );
};

export default Decade1980s;
