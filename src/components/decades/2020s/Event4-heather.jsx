import "./style-2020.css";
import heather from "../../../assets/2020-profile-heather-02.png";

const Event4 = () => {
  return (
    <div className="event-container small panel-black">
      <div className="content">
        <div className="col-3">
          <img src={heather} alt="Heather Antecol." />
        </div>
        <div className="col-3">
          <h1 className="date yellow-txt">February</h1>
          <h1 className="year-sm yellow-txt">2021</h1>
          <h2>Notable Vice President and Dean</h2>
          <p>
            <strong>Heather Antecol,</strong> the James G. Boswell Professor of
            Economics, was named Vice President for Academic Affairs and Dean of
            the Faculty, becoming the first woman to hold this position in a
            permanent role. With extensive faculty governance experience,
            Antecol previously served as director of the Berger Institute and
            chair of both the Robert Day School of Economics and Finance and the
            Administration Committee. She is also a distinguished scholar whose
            influential research in labor economics is recognized on a global
            scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event4;
