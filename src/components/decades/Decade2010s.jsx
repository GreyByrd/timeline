import ScrollyElement from "react-scrolly-telling/element";
import Event1 from "./2010s/Event1";
import Event2 from "./2010s/Event2-wla";
import Event3 from "./2010s/Event3-myths";
import Event4 from "./2010s/Event4-takako";
import Event5 from "./2010s/Event5-spotlights";
import Event6 from "./2010s/Event6-weatherford";
import Event7 from "./2010s/Event7-mountain";
import Event8 from "./2010s/Event8-jilaward";
import Event9 from "./2010s/Event9-rotc";
import Event10 from "./2010s/Event10";

const Decade2010s = () => {
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
    </ScrollyElement>
  );
};

export default Decade2010s;
