import "./style-2020.css";
import professors from "../../../assets/2020-professors.png";

const Event7 = () => {
  return (
    <div className="event-container narrative small panel-black">
      <div>
        <div className="col-5">
          <img
            src={professors}
            alt="Jennifer Feitosa (top left) and Emily Wiley."
          />
        </div>
        <div className="col-5">
          <h1 className="date yellow-txt">March</h1>
          <h1 className="year-sm yellow-txt">2022</h1>
          <h2>Best and Brightest</h2>
          <p>
            CMC <strong>Prof. Jennifer Feitosa</strong> joined an elite cadre
            when{" "}
            <a
              href="https://www.cmc.edu/newsfeed/prof-feitosa-honored-fulbright"
              target="_blank"
              aria-label="Read article: Prof. Feitosa honored with Fulbright (opens in new tab)"
            >
              she was recognized
            </a>{" "}
            with a prestigious U.S. Scholar Fulbright grant. The following year,
            Professor Emily Wiley (bottom right){" "}
            <a
              href="hthttps://www.cmc.edu/newsfeed/professor-emily-wiley-awarded-fulbright"
              target="_blank"
              aria-label="Read article: Professor Emily Wiley awarded Fulbright (opens in new tab)"
            >
              earned her own Fulbright Scholar award
            </a>{" "}
            as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event7;
