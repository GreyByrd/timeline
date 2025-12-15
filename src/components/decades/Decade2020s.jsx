import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2020s/Event1";
import Event2 from "./2020s/Event2";
import Event3 from "./2020s/Event3";
import Event4 from "./2020s/Event4";
import Event5 from "./2020s/Event5";
import Event6 from "./2020s/Event6";
import Event7 from "./2020s/Event7";
import Event8 from "./2020s/Event8";

const Decade2020s = () => {
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
    </ScrollyElement>
  );
};

export default Decade2020s;
