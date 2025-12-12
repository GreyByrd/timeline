import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2000s/Event1";
import Event2 from "./2000s/Event2";

const Decade2000s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event2 id={2} />
    </ScrollyElement>
  );
};

export default Decade2000s;
