import "./style-2000.css";
import asuman from "../../../assets/2000-profile-asuman.png";

const Event7 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-3">
        <div>
          <h1 className="date">April 8</h1>
          <h1 className="year-sm purple-txt">2006</h1>
          <h2>Influencer</h2>
          <p>
            April 2006, <strong>Professor Asuman Aksoy</strong> was the first
            woman professor, and second in CMC history, to be honored with the
            Distinguished College or University Teaching Award from the Southern
            California-Nevada Section of the Mathematical Association of
            America.
          </p>
        </div>
      </div>
      <div className="col-2">
        <img src={asuman} alt="Asuman Aksoy." />
      </div>
    </div>
  );
};

export default Event7;
