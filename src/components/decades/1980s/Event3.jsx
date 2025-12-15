import "./style-1980.css";

const Event3 = () => {
  return (
    <div className="event-container event-narrative panel-maroon">
      <div className="event-content">
        <h1 className="date">July 9</h1>
        <h1 className="year white-txt">1981</h1>
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
        <img className="photo-insert" src="/src/assets/name-change-01.jpg" />
        <p>
          <em>
            Claremont Men's College signage is removed from Pitzer Hall in 1981
          </em>
        </p>
      </div>
    </div>
  );
};

export default Event3;
