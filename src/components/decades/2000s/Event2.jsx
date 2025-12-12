import "./style-2000.css";

const Event2 = () => {
  return (
    <div className="event-container panel-maroon">
      <div className="col-2">
        <div>
          <h1 className="year white-txt">2010</h1>
          <h2>Women and Leadership Alliance established</h2>
          <p>
            Jointly coordinated by the Kravis Leadership Institute, Robert Day
            School, and women administrators on campus.
          </p>
        </div>
      </div>
      <div className="col-3">
        <img
          className="fullwidth"
          src="src/assets/fullwidth-placeholder.png"
          alt="Image."
        />
      </div>
    </div>
  );
};

export default Event2;
