import "./style-1990.css";
import pamgann from "../../../assets/1990-pam-gann.png";

const Event9 = () => {
  return (
    <div className="event-container panel-yellow">
      <div className="col-2">
        <h1 className="date">July 1</h1>
        <h1 className="year">1999</h1>
        <h2>Promise realized</h2>
        <p>
          <strong>Pamela Gann</strong> began her tenure as the fourth president
          of CMC and first woman to lead the College. During her tenure, the
          ranks of the faculty increased by 65 percent, two new research
          institutes and two new resource centers were established, and
          increased opportunities for graduates emerged with expanded student
          internship opportunities.
        </p>
        <p>Gann recognized the responsibility she carried on her shoulders.</p>
      </div>
      <div className="col-2">
        <img src={pamgann} />
        <p className="quote">
          “Creating opportunities for educational attainment has been a guiding
          principle throught my career.”
        </p>
      </div>
    </div>
  );
};

export default Event9;
