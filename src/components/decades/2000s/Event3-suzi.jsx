import "./style-2000.css";
import suzi from "../../../assets/2000-profile-suzi.png";

const Event3 = () => {
  return (
    <div className="event-container panel-white">
      <div className="col-3">
        <div>
          <h1 className="date purple-txt">March 16</h1>
          <h1 className="year-sm purple-txt">2002</h1>
          <h2>Making a Splash</h2>
          <p>
            With a conference-record time of 2:21.17, swimmer{" "}
            <a
              className="purple-txt"
              href="https://www.cmc.edu/news/suzy-nicoletti-02-national-champion-for-record-breaking-swim-in-200-yard-breaststroke"
              target="_blank"
              aria-label="Read article: Suzy Nicoletti '02 National Champion For Record-Breaking Swim In 200-Yard Breaststroke"
            >
              <strong>Suzy Nicoletti ’02</strong>
            </a>{" "}
            became CMS Athletics’ first national-champion swimmer at the NCAA
            Division III Swimming and Diving Championships. Nicoletti is
            currently a tech executive, and has led teams at Twitter and Intuit,
            among others, in the Australia/Asia-Pacific market.
          </p>
        </div>
      </div>
      <div className="col-2">
        <img src={suzi} alt="Suzi Nicoletti ’02." />
      </div>
    </div>
  );
};

export default Event3;
