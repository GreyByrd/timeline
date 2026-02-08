import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./1970s/Event1";
import Event2 from "./1970s/Event2-lead";
import Event3 from "./1970s/Event3-jil";
import Event4 from "./1970s/Event4-JS";
import Event5 from "./1970s/Event5-edessa";
import Event6 from "./1970s/Event6-board";
import Event7 from "./1970s/Event7-vote";
import Event8 from "./1970s/Event8-kathleen";
import Event9 from "./1970s/Event9-coed";
import Event10 from "./1970s/Event10-pioneers";
import Event11 from "./1970s/Event11";

const Decade1970s = () => {
  return (
    <div id="1970">
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

export default Decade1970s;
