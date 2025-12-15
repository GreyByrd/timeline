import ScrollyElement from "react-scrolly-telling/element";
import Event0 from "./Intro/Event0";
import Event1 from "./Intro/Event1";

const DecadeIntro = () => {
  return (
    <ScrollyElement horizontal>
      <Event0 id={0} />
      <Event1 id={1} />
    </ScrollyElement>
  );
};

export default DecadeIntro;
