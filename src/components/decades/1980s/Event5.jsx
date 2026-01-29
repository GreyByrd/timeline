import "./style-1980.css";
import namechange from "../../../assets/1980-name-change-sign.jpg";

const Event5 = () => {
  return (
    <div className="event-container event-narrative panel-maroon">
      <div className="event-content">
        <h1 className="date">October 15</h1>
        <h1 className="year white-txt">1981</h1>
        <h2>
          <span className="strikethrough">Claremont Men’s College</span> becomes
          Claremont McKenna College
        </h2>
        <p>
          Following a 34-5 board vote, Claremont McKenna College celebrated its
          official debut with parties, athletics, an aerial flyover, a black-tie
          dinner, and a national press campaign.
        </p>
        <p className="quote quote-white">
          <em>This is not a break with the past, but a natural evolution.</em>
          <br />
          <span className="quote-name">
            —Jack Stark, press conference at the LA Times building
          </span>
        </p>
      </div>
      <div className="inset">
        <img className="photo-insert" src={namechange} />
        <br />
        <p>
          <em>
            Claremont Men's College signage is removed from Pitzer Hall in 1981
          </em>
        </p>
      </div>
    </div>
  );
};

export default Event5;
