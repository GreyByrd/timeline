import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2010s/Event1";
import Event2 from "./2010s/Event2-wla";
import Event3 from "./2010s/Event3-spotlights";
import Event4 from "./2010s/Event4-chelina";
import Event5 from "./2010s/Event5-weatherford";
import Event6 from "./2010s/Event6-mountain";
import Event7 from "./2010s/Event7-jilaward";
import Event8 from "./2010s/Event8-rotc";
import Event9 from "./2010s/Event9";

const Decade2010s = () => {
  return (
    <div id="2010">
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
      </ScrollyElement>
    </div>
  );
};

export default Decade2010s;
