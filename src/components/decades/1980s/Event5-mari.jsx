import "./style-1980.css";
import mari from "../../../assets/1980-profile-mari.png";

const Event5 = () => {
  return (
    <div className="event-container-sm multi-gradient">
      <div className="col-3">
        <h1 className="year-sm white-txt">1980</h1>
        <h2>Noteworthy Pioneer</h2>
        <p>
          Mari Adam ’80 graduated magna cum laude with a double major in French
          and Political Science as part of the College’s first four-year co-ed
          class. An expert in financial planning and money management, she
          serves as co-chair of{" "}
          <a
            className="white-txt"
            href="https://www.cmc.edu/50-coeducation"
            target="_blank"
            aria-label="CMC 50 years of Co-education (opens in new tab)"
          >
            CMC’s co-ed celebration
          </a>
          .
        </p>
      </div>
      <div className="col-2">
        <img src={mari} />
      </div>
    </div>
  );
};

export default Event5;
