import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2010s/Event1";
import Event2 from "./2010s/Event2";
import Event3 from "./2010s/Event3";

const Decade2000s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event2 id={2} />
      <Event3 id={3} />
    </ScrollyElement>
  );
};

export default Decade2010s;
