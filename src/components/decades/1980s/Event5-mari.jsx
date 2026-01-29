import "./style-1980.css";
import mari from "../../../assets/1980-profile-mari.png";

const Event5 = () => {
  return (
    <div className="event-container event-narrative gradient-border-multi">
      <img src={mari} />
      <h1 className="year-sm white-txt">1980</h1>
      <h2>Noteworthy Pioneer</h2>
      <p>
        <strong>Mari Adam ’80</strong> graduated magna cum laude with a double
        major in French and Political Science as part of the College’s first
        four-year co-ed class. An expert in financial planning and money
        management, she serves as co-chair of{" "}
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
  );
};

export default Event5;
