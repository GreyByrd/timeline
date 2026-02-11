import "./style-2020.css";
import helena from "../../../assets/2020-profile-helena-b-evich.jpg";

const Event2 = () => {
  return (
    <div className="event-container small panel-yellow">
      <div className="content">
        <div className="col-3">
          <img src={helena} alt="Helena Bottemiller Evich ’09." />
        </div>
        <div className="col-4">
          <h1 className="date">February</h1>
          <h1 className="year-sm">2020</h1>
          <h2>Breaking the News</h2>
          <p>
            POLITICO reporter <strong>Helena Bottemiller Evich ’09</strong>{" "}
            <a
              href="https://www.politico.com/news/2020/02/19/politico-journalist-wins-polk-award-116054%22"
              target="_blank"
              aria-label="Read POLITICO article (opens in new tab)"
            >
              wins a prestigious Polk Award
            </a>{" "}
            for a series of articles on the U.S. Department of Agriculture’s
            response to climate change. Evich found her interest in food policy
            in her CMC senior thesis in 2009.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event2;
