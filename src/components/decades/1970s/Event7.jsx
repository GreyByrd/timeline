import "./style-1970.css";

const Event7 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-2">
        <h1 className="date">March 15</h1>
        <h1 className="year purple-txt">1976</h1>
        <h2>First women on campus</h2>
        <p>
          Marking the College’s 30th anniversary, the first women are welcomes
          on campus.
        </p>
      </div>
      <div className="col-3">
        <img
          src="src/assets/1970s_Kathleen-campus.gif"
          alt="Collage of images related to Kathleen Evans early time on campus."
        />
        <p className="caption">
          Kathleen Evans the first to enroll. She would go on excel as a XYZ
          dual degree and all-SCIAC athlete.
        </p>
      </div>
    </div>
  );
};

export default Event7;
