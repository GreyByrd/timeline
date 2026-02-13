import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2020s/Event1";
import Event2 from "./2020s/Event2-helena";
import Event3 from "./2020s/Event3-chickens";
import Event4 from "./2020s/Event4-heather";
import Event5 from "./2020s/Event5-rhodes";
import Event6 from "./2020s/Event6-tennis";
import Event7 from "./2020s/Event7-tennisimg";
import Event8 from "./2020s/Event8-profs";
import Event9 from "./2020s/Event9-awards";
import Event10 from "./2020s/Event10-rhodes02";
import Event11 from "./2020s/Event11-awards02";
import Event12 from "./2020s/Event12-glam";
import Event13 from "./2020s/Event13-ella";
import Event14 from "./2020s/Event14-josephine";
import Event15 from "./2020s/Event15";

const Decade2020s = () => {
  return (
    <div id="2020">
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
        <Event14 id={14} />
        <Event15 id={15} />
      </ScrollyElement>
    </div>
  );
};

export default Decade2020s;
