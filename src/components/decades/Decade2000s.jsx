import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2000s/Event1";
import Event2 from "./2000s/Event2-jeane";
import Event3 from "./2000s/Event3-heather";
import Event4 from "./2000s/Event4-suzi";
import Event5 from "./2000s/Event5-dianeharpen";
import Event6 from "./2000s/Event6-lisal";
import Event7 from "./2000s/Event7-asuman";
import Event8 from "./2000s/Event8-wangari";
import Event9 from "./2000s/Event9-berger";
import Event10 from "./2000s/Event10-fawe";
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
