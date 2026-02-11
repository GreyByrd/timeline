import "./style-1980.css";
import lorraine from "../../../assets/1980-profile-lorraine.png";

const Event13 = () => {
  return (
    <div className="event-container narrative panel-gray gradient-border-multi">
      <div className="content">
        <div className="col-5">
          <img src={lorraine} />
          <h1 className="year-sm maroon-txt">1988</h1>
          <h2>Alumni Association breaks barriers</h2>
          <p>
            In 1988, <strong>Lorraine Bains ’88</strong> became the first woman
            and first woman of color to serve as the CMC Alumni Association
            President. A banking executive, she continues to serve CMC as a
            Trustee and a co-chair of{" "}
            <a
              className="maroon-txt"
              href="https://www.cmc.edu/50-coeducation"
              target="_blank"
              aria-label="CMC 50 years of Co-education (opens in new tab)"
            >
              CMC’s co-ed celebration
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event13;
