import "./style-2000.css";
import lisal from "../../../assets/2000-profile-lisal.png";

const Event5 = () => {
  return (
    <div className="event-container panel-white">
      <div className="content-container">
        <div className="col-3">
          <h1 className="date">September 16</h1>
          <h1 className="year-sm purple-txt">2005</h1>
          <h2>Student Excellence</h2>
          <p>
            <strong>Lisal Smith ’07</strong>, an economics major and CMC Female
            Athlete of the Year in 2004, won first place in the master's women's
            division of the La Jolla Rough Water competition—her first ocean
            swim. Smith beat out more than 370 exceptional swimmers in her
            division to claim victory in the one-mile race.
          </p>
        </div>
        <div className="col-3">
          <img src={lisal} alt="Lisal Smith ’07 with fellow Athena swimmer." />
        </div>
      </div>
    </div>
  );
};

export default Event5;
