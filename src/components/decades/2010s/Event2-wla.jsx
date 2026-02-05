import "./style-2010.css";
import wla from "../../../assets/2010-Women-In-Leadership.jpg";

const Event2 = () => {
  return (
    <div className="event-container panel-maroon">
      <div className="content">
        <div className="col-2">
          <div>
            <h1 className="date white-txt">February</h1>
            <h1 className="year-sm white-txt">2010</h1>
            <h2>A Place for Mentors</h2>
            <p>
              Kravis Leadership Institute Executive Director and Professor Sarah
              Smith Orr helped launch the first Women & Leadership Workshop at
              The Claremont Colleges in 2010, when students approached her to
              address the need for female leadership mentors on campus. The
              workshop was a success and later grew into the Women & Leadership
              Alliance.
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
    </div>
  );
};

export default Event2;
