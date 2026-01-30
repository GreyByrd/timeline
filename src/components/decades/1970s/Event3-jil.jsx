import "./style-1970.css";
import jil01 from "../../../assets/1970-collage-jil.jpg";

const Event3 = () => {
  return (
    <div className="event-container panel-purple">
      <div className="content-container">
        <div className="col-2">
          <h1 className="date white">February</h1>
          <h1 className="year yellow-txt">1971</h1>
          <h2>Jil Stark '58 GP'11 becomes First Lady of CMC</h2>
          <p>
            Jil Stark’s leadership, including six years building the
            intellectual and social fabric of the College as{" "}
            <a
              href="https://www.cmc.edu/athenaeum/profile-of-director-jil-stark"
              target="_blank"
              aria-label="Jil Stark Profile (open in new tab)"
            >
              Director of the Athenaeum
            </a>
            , impacted the campus and the community with enormous generosity,
            tireless commitment, and gracious dedication while her husband was
            President of the College from 1970 to 1999. She was also an early
            advocate for co-education at CMC – when expanded co-enrollment with
            Scripps College was put on the table, Jil worked behind the scenes
            to steer CMC toward full enrollment for women.
          </p>
        </div>
        <div className="col-3">
          <img
            className="event-1-image"
            src={jil01}
            alt="Collage of Jil Stark on wedding day and by herself."
          />
        </div>
      </div>
    </div>
  );
};

export default Event3;
