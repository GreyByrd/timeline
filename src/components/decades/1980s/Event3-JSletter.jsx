import "./style-1980.css";
import letter from "../../../assets/papers.gif";

const Event3 = () => {
  return (
    <div className="event-container event-narrative panel-gray">
      <h1 className="date">April 24</h1>
      <h1 className="year-sm maroon">1980</h1>
      <div className="photo-spread">
        <img className="photo-front" src={letter} />
      </div>
      <p>
        <em>Click to view larger</em>
      </p>
    </div>
  );
};

export default Event3;
