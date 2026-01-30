import "./style-2000.css";
import heather from "../../../assets/2000-profile-heather-a.png";

const Event3 = () => {
  return (
    <div className="event-container panel-purple">
      <div className="col-2">
        <img src={heather} alt="Heather Antecol." />
      </div>
      <div className="col-3 white-txt">
        <h1 className="year-sm white-txt">2000</h1>
        <h2>Notable Dean</h2>
        <p>
          In February 2021, <strong>Heather Antecol</strong>, the Boswell Professor of Economics, was named Vice President and the first woman to become Dean of the Faculty.  Former director of the Berger Institute, Antecol is a distinguished economics scholar whose influential research on labor economics is recognized on a global scale.
        </p>
      </div>
    </div>
  );
};

export default Event3;
