import "./style-1980.css";

const Event3 = () => {
  return (
    <div className="event-container event-narrative panel-maroon">
      <div className="event-content">
        <h1 className="date">July 9</h1>
        <h1 className="year white-txt">1976</h1>
        <h2>
          <span className="strikethrough">Claremont Men’s College</span> becomes
          Claremont McKenna College
        </h2>
        <p className="quote quote-white">
          <em>This is not a break with the past, but a natural evolution.</em>
          <br />
          <span className="quote-name">
            —Jack Stark, press conference at the LA Times building
          </span>
        </p>
        <br />
      </div>
      <div className="inset">
        <br />
        <img className="photo-insert" src="/src/assets/1980s-placeholder.png" />
        <p>this is a thing</p>
      </div>
    </div>
  );
};

export default Event3;
