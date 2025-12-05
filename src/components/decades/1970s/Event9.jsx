import "./style-1970.css";

const Event9 = () => {
  return (
    <div className="event-container panel-2">
      <div className="event-1-content">
        <h1 className="date">July 9</h1>
        <h1 className="year">1972</h1>
        <h2>
          The <em>Pioneers</em> excel on campus
        </h2>
        <p className="link-list">
          <a href="#">
            The first women students graduate
            <br />
          </a>
          <a href="#">
            CMS Cross Country becomes first women’s sport SCIAC
            <br />
          </a>
          <a href="#">Mary Tracey ’81 is first female All-American for CMC</a>
        </p>
      </div>
      <div className="event-1-content">
        <img
          className="event-image-sm"
          src="src/assets/1970s_pioneers.png"
          alt="dfds."
        />
      </div>
    </div>
  );
};

export default Event9;
