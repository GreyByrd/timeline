import "./style-1970.css";

const Event4 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-2">
        <h1 className="date">July</h1>
        <h1 className="year purple-txt">1972</h1>
        <h2>President Stark pens letter</h2>
        <p>
          In a pivotal act, President Jack Stark urged the Claremont Men’s
          College’s Board of Trustees to undertake a study of the single-sex
          nature of the College: “I believe that the time is ripe to reexamine
          the strengths and weaknesses of CMC as a single-sex college.” A
          committee was formed and serious discussions began concerning next
          steps.
        </p>
        <p>
          Read President Starks’{" "}
          <a
            className="purple-txt"
            href="https://cmcarchives.omeka.net/items/show/232"
            target="_blank"
            aria-label="CMC Archives (open in new tab)"
          >
            letter
          </a>{" "}
          to the Board
        </p>
        <img
          className="profile"
          src="src/assets/not-for-men-only.png"
          alt="Jack Stark."
        />
      </div>
      <div className="col-3">
        <img
          className="event-1-image"
          src="src/assets/1970s_Collage_JackS.jpg"
          alt="Jack Stark."
        />
      </div>
    </div>
  );
};

export default Event4;
