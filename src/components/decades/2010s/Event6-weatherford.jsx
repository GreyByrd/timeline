import "./style-2010.css";
import mary from "../../../assets/mary-weatherford-headshot.png";

const Event6 = () => {
  return (
    <div className="event-container small panel-maroon">
      <div className="content info-panel">
        <img src={mary} />
        <p className="caption">
          <em>Photo by Antony Hoffman courtesy of Gagosian.</em>
        </p>
        <h1 className="date">September 16</h1>
        <h1 className="year-sm white-txt">2014</h1>
        <h2>Art and Life</h2>
        <p>
          On September 16, 2014, the mural{" "}
          <a
            href="https://www.cmc.edu/public-art/mary-weatherford-%E2%80%9Cfrom-mountain-to-sea%E2%80%9D"
            target="_blank"
            aria-label="CMC Public Art: Mary Weatherford (opens in new tab)"
          >
            <em>From the Mountain to the Sea </em>
          </a>{" "}
          was acquired and put on display in the Eggert Dining Room at the
          Athenaeum. The piece, by artist Mary Weatherford, was the first
          installation of CMC public art by a woman.
        </p>
      </div>
    </div>
  );
};

export default Event6;
