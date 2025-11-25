import "./style.css";

const Event4 = () => {
  return (
    <div className="event-container">
      <div className="event-1-content">
        <h1 className="date">July 9</h1>
        <h1 className="year">1972</h1>
        <h2>President Stark pins letter</h2>
        <p>
          Jack Start urges the Claremont Men’s College’s Board of Trustees to
          undertake a study of the single-sex nature of the College. Soon,
          serious discussions begin concerning next steps.
        </p>
        <img
          className="event-1-image"
          src="src/assets/1970s_Collage_JackS.jpg"
          alt="Jack Stark."
        />
      </div>
      <div className="event-content-wide">
        <h1 className="date">November 17</h1>
        <h1 className="year">1972</h1>
        <p>
          Los Angeles Times article outlines potential shift to coeducation.
        </p>
      </div>
    </div>
  );
};

export default Event4;
