import "./style-2000.css";
import asuman from "../../../assets/2000-profile-asuman.png";

const Event6 = () => {
  return (
    <div className="event-container small panel-gray">
      <div className="content">
        <div className="col-3">
          <h1 className="date">April 8</h1>
          <h1 className="year-sm purple-txt">2006</h1>
          <h2>Noteworthy mathematician</h2>
          <p>
            <a
              className="purple-txt"
              href="https://www.cmc.edu/news/professor-aksoy-receives-award"
              target="_blank"
              aria-label="Read article: Professor Aksoy Receives Award (opens in new tab)
              "
            >
              <strong>Professor Asuman Aksoy</strong>
            </a>{" "}
            became the first woman professor, and second in CMC history, to be
            honored with the Distinguished College or University Teaching Award
            from the Southern California-Nevada Section of the Mathematical
            Association of America.
          </p>
        </div>
        <div className="col-3">
          <img src={asuman} alt="Asuman Aksoy." />
        </div>
      </div>
    </div>
  );
};

export default Event6;
