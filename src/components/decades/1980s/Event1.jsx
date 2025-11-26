import "./style.css";

const Event1 = () => {
  return (
    <div className="event-container panel-white">
      <div className="intro-content">
        <div className="intro-text">
          <h1>1980s</h1>
          <h2>The age of change</h2>
          <p>
            Time was changing. The world was becoming more connected than ever,
            bridging geographic gaps in efficient time with the rise in airline
            travel. Likewise, the United States established the 28th Amendment.
            With the landmark decision in Roe v. Wade, equality became the new
            baseline.
          </p>
        </div>
      </div>
      <div className="intro-content">
        <img
          className="intro-image"
          src="src/assets/1970s_1.gif"
          alt="Collage of historical events in 1970s."
        />
      </div>
    </div>
  );
};

export default Event1;
