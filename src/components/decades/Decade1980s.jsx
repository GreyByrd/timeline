import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1980s/Event1";
import Event2 from "./1980s/Event2-name";
import Event3 from "./1980s/Event3-JSletter";
import Event4 from "./1980s/Event4-decision";
import Event5 from "./1980s/Event5-mari";
import Event4 from "./1980s/Event6-decision02";
import Event6 from "./1980s/Event7-namechange";
import Event7 from "./1980s/Event8-celebration";
import Event8 from "./1980s/Event9-ath";
import Event9 from "./1980s/Event10-scholars";
import Event10 from "./1980s/Event11-jil";
import Event11 from "./1980s/Event12-sciac";
import Event12 from "./1980s/Event13-lorraine";
import Event13 from "./1980s/Event14";

const Decade1980s = () => {
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
      <Event12 id={12} />
      <Event13 id={13} />
    </ScrollyElement>
  );
};

export default Decade1980s;
