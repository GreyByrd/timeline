import "./style-1980.css";
import letter from "../../../assets/1980-JS-letter.gif";

const Event3 = () => {
  return (
    <div className="event-container narrative letters">
      <div>
        <div className="col-5">
          <h1 className="date">April 24</h1>
          <h1 className="year-sm maroon">1980</h1>
          <p>
            <a
              className="maroon-txt"
              href="https://cmcarchives.omeka.net/exhibits/show/notformenonly/namechange"
              target="_blank"
              aria-label="CMC Archive (opens in new tab)"
            >
              <em>Read the letter.</em>
            </a>
          </p>
          <img className="photo-sm" src={letter} />
        </div>
      </div>
    </div>
  );
};

export default Event3;
