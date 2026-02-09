import "./style-2020.css";

const Event7 = () => {
  return (
    <div className="event-container-sm panel-black">
      <div className="content narrative">
        <div className="col-3">
          <img
            className="profile"
            src="src/assets/profile-img.png"
            alt="Image."
          />
        </div>
        <h1 className="date">Faculty Excellence</h1>
        <h1 className="year-sm">Faculty Excellence</h1>
        <h2>Best and Brightest</h2>
        <div className="col-4">
          <p>
            CMC <strong>Prof. Jennifer Feitosa</strong> joined an elite cadre
            when{" "}
            <a
              href="https://www.cmc.edu/newsfeed/prof-feitosa-honored-fulbright"
              target="_blank"
              aria-label="Read article: Prof. Feitosa honored with Fulbright              "
            >
              she was recognized
            </a>{" "}
            with a prestigious U.S. Scholar Fulbright grant. The following year,
            Professor Emily Wiley{" "}
            <a
              href="hthttps://www.cmc.edu/newsfeed/professor-emily-wiley-awarded-fulbright"
              target="_blank"
              aria-label="Read article: Professor Emily Wiley awarded Fulbright              "
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
