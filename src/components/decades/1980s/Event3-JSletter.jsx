import "./style-1980.css";
import letter from "../../../assets/1980-JS-letter.gif";

const Event3 = () => {
  return (
    <div className="event-container event-narrative panel-gray">
      <h1 className="date">April 24</h1>
      <h1 className="year-sm maroon">1980</h1>
      <img className="photo-sm" src={letter} />
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
    </div>
  );
};

export default Event3;
