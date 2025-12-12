import "./style-1970.css";

const Event1 = () => {
  return (
    <div className="event-container panel-white">
      <div className="col-2">
        <h1 className="eyebrow">A moment in history</h1>
        <h1 className="purple-txt">1970s</h1>
        <h2>The age of change</h2>
        <p>
          Time was changing. The world was becoming more connected than ever,
          bridging geographic gaps in efficient time with the rise in airline
          travel. Likewise, the United States established the 28th Amendment.
          With the landmark decision in Roe v. Wade, equality became the new
          baseline.
        </p>
      </div>
      <div className="col-4">
        <img src="/src/assets/1970s-intro.gif" />
      </div>
    </div>
  );
};

export default Event1;
