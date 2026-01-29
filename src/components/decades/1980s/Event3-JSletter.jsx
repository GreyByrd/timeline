import "./style-1980.css";
import letter from "../../../assets/1980-name-change.jpg";

const Event3 = () => {
  return (
    <div className="event-container event-narrative panel-gray">
      <h1 className="date">April 24</h1>
      <h1 className="year-sm maroon">1980</h1>
      <img className="photo-sm" src={letter} />
      <p>
        <em>Click to view larger</em>
      </p>
    </div>
  );
};

export default Event3;
