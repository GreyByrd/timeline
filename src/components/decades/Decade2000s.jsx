import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2000s/Event1";
import Event2 from "./2000s/Event2-jeane";
import Event3 from "./2000s/Event3-suzi";
import Event4 from "./2000s/Event4-dianeharpen";
import Event5 from "./2000s/Event5-lisal";
import Event6 from "./2000s/Event6-asuman";
import Event7 from "./2000s/Event7-wangari";
import Event8 from "./2000s/Event8-berger";
import Event9 from "./2000s/Event9-fawe";
import Event10 from "./2000s/Event10";
import Event11 from "./2000s/Event11";

const Decade2000s = () => {
  return (
    <div id="2000">
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
    </div>
  );
};

export default Decade2000s;
