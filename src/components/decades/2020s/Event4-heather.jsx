import "./style-2020.css";
import heather from "../../../assets/2020-profile-heather-02.png";

const Event4 = () => {
  return (
    <div className="event-container small panel-black">
      <div className="content">
        <div className="col-3">
          <img
            src={heather}
            alt="Jennifer Feitosa (top left) and Emily Wiley."
          />
        </div>
        <div className="col-3">
          <h1 className="date yellow-txt">February</h1>
          <h1 className="year-sm yellow-txt">2021</h1>
          <h2>Notable Dean</h2>
          <p>
            <strong>Heather Antecol,</strong> the Boswell Professor of
            Economics, was named Vice President and became the first woman to
            serve as Dean of the Faculty in a permanent role. A former director
            of the Berger Institute, Antecol is a distinguished economics
            scholar whose influential research on labor economics is recognized
            on a global scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event4;
