import "./style-2020.css";
import nita from "../../../assets/2020-nita-kumar.png";

const Event10 = () => {
  return (
    <div className="event-container wide panel-yellow">
      <div className="col-1">
        <h1 className="date">April</h1>
        <h1 className="year-sm">2023</h1>
        <h2>In the Scrum</h2>
        <p>
          CMC women showed tenacity on the pitch as the Claremont Foxes women's
          rugby team won their second Division 2 National Championship.
          Following the achievement the team was{" "}
          <a href="#" target="_blank" aria-label="#">
            honored by the City of Claremont
          </a>
          .
        </p>
      </div>
      <div className="col-2">
        <img src="#" />
      </div>
      <div className="col-1">
        <h1 className="year-sm">2024</h1>
        <h2>Family Ties</h2>
        <p>
          Emerita Professor <strong>Nita Kumar</strong>{" "}
          <a
            className="maroon-txt"
            href="https://www.cmc.edu/newsfeed/professor-nita-kumar-awarded-2024-guggenheim-fellowship"
            target="_blank"
            aria-label="Read article: Professor Nita Kumar awarded 2024 Guggenheim Fellowship (opens in new tab)"
          >
            received a Guggenheim Fellowship
          </a>{" "}
          to research and write a social history of an Indian family, with a
          specific focus on gender hierarchies in the state of Uttar Pradesh.
        </p>
      </div>
      <div className="col-2">
        <img src={nita} />
      </div>
    </div>
  );
};

export default Event10;
