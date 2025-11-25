import "./style.css";

const Event9 = () => {
  return (
    <div className="event-container panel-2">
      <div className="event-1-content">
        <h1 className="date">July 9</h1>
        <h1 className="year">1972</h1>
        <h2>
          The <em>Pioneers</em> excel on campus
        </h2>
        <a href="#">
          <p>The first women students graduate</p>
        </a>
        <p>CMS Cross Country becomes first women’s sport SCIAC </p>
        <p>Mary Tracey ’81 is first female All-American for CMC</p>
      </div>
      <div className="event-1-content">
        <img
          className="event-1-image"
          src="src/assets/Timeline-placeholder-02.png"
          alt="Jack Stark."
        />
      </div>
    </div>
  );
};

export default Event9;
