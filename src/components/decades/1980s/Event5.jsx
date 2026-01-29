import "./style-1980.css";
import harriet from "../../../assets/1990-profile-harriet.png";

const Event5 = () => {
  return (
    <div className="event-container-wide panel-maroon">
      <div className="col-2">
        <h1 className="year-sm white-txt">1980</h1>
        <h2>Noteworthy Pioneer</h2>
        <p>
          Mari Adam ’80 graduated magna cum laude with a double major in French
          and Political Science as part of the College’s first four-year co-ed
          class. An expert in financial planning and money management, she
          serves as co-chair of CMC’s co-ed celebration.
        </p>
      </div>
      <div className="col-2">
        <img src={harriet} />
      </div>
    </div>
  );
};

export default Event5;
