import "./style-2020.css";
import awards from "../../../assets/2020-profile-rugby-nita-02.png";
import awards02 from "../../../assets/2020-profile-rugby-nita-mobile.png";

const Event12 = () => {
  return (
    <div className="event-container panel-yellow">
      <div className="content">
        <div className="col-3">
          <h1 className="date">April</h1>
          <h1 className="year-sm">2023</h1>
          <h2>In the Scrum</h2>
          <p>
            CMC women showed tenacity on the pitch as the Claremont Foxes
            women's rugby team won their second Division 2 National
            Championship. Following the achievement the team was{" "}
            <a
              href="https://www.cmc.edu/newsfeed/claremont-foxes-rugby-recognized-city-claremont"
              target="_blank"
              aria-label="Read article: Claremont Foxes Rugby recognized by the City of Claremont (opens in new tab)"
            >
              honored by the City of Claremont
            </a>
            .
          </p>
          <br />
          <h1 className="year-sm">2024</h1>
          <h2>Family Ties</h2>
          <p>
            Emerita Professor <strong>Nita Kumar</strong>{" "}
            <a
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
        <div className="col-3 desktop">
          <img
            src={awards}
            alt="Athena's Rubgy team accepting award (top left) and Professor Nita Kumar."
          />
        </div>
        <div className="col-3 mobile">
          <img
            src={awards02}
            alt="Athena's Rubgy team accepting award (top left) and Professor Nita Kumar."
          />
        </div>
      </div>
    </div>
  );
};

export default Event12;
