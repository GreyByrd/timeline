import "./style-2010.css";
import wla from "../../../assets/2010-Women-In-Leadership.jpg";

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
      <div className="col-4">
        <img
          className="fullwidth"
          src={wla}
          alt="The inaugural Women In Leadership Alliance event."
        />
      </div>
    </div>
  );
};

export default Event2;
