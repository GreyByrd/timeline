import "./style-1980.css";
import WE1980 from "../../../assets/World-Event-1980.gif";

const Event1 = () => {
  return (
    <div className="event-container wide panel-white">
      <div className="col-3">
        <div>
          <h1 className="eyebrow">A moment in history</h1>
          <h1 id="1980" className="maroon anchor">
            1980s
          </h1>
          <p>
            As the calendar turned from one decade to the next, tectonic shifts
            in society and culture were underway. The election of Margaret
            Thatcher as the UK’s first female prime minister opened doors for
            women – and for new approaches to governance. The administration of
            Ronald Reagan, the rise of Wall Street, and the collapse of the Cold
            War-era global structure continued a move toward greater individual
            liberty and a reduced role of the state in the global economy.
            Technological advancements came fast and furious, with computers,
            mobile phones, and the Space Shuttle revealing the promise of a
            bright future. At the same time, the Chernobyl and Challenger
            disasters; conflict in Northern Ireland, Afghanistan, Latin America,
            and Africa; and the emergence of the HIV/AIDS epidemic presented
            major challenges to world leaders.
          </p>
          <p>
            Back at CMC, the College entered the decade with women making up
            nearly a quarter of the student body. By 1989, [CAN WE GET FIGURES
            HERE?] But the first challenge facing College leaders was related to
            CMC’s fundamental identity.
          </p>
        </div>
      </div>
      <div className="col-3">
        <img src={WE1980} />
      </div>
    </div>
  );
};

export default Event1;
