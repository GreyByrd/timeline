import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1990s/Event1";
import Event2 from "./1990s/Event2";

const Decade1990s = () => {
  return (
    <ScrollyElement horizontal>
      <Event1 id={1} />
      <Event2 id={2} />
    </ScrollyElement>
  );
};

export default Decade1990s;
