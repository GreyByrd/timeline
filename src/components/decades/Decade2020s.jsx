import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2020s/Event1";
import Event2 from "./2020s/Event2-helena";
import Event3 from "./2020s/Event3-chickens";
import Event4 from "./2020s/Event4-rhodes";
import Event5 from "./2020s/Event5-tennis";
import Event6 from "./2020s/Event6-tennisimg";
import Event7 from "./2020s/Event7-profs";
import Event8 from "./2020s/Event8-awards";
import Event9 from "./2020s/Event9-rhodes02";
import Event10 from "./2020s/Event10-awards02";
import Event11 from "./2020s/Event11-glam";
import Event12 from "./2020s/Event12-ella";
import Event13 from "./2020s/Event13-josephine";
import Event14 from "./2020s/Event14";

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
      <Event9 id={9} />
      <Event10 id={10} />
      <Event11 id={11} />
      <Event12 id={12} />
      <Event13 id={13} />
      <Event14 id={14} />
    </ScrollyElement>
  );
};

export default Decade2020s;
